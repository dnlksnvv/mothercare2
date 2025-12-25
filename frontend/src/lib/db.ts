import Database from 'better-sqlite3';
import path from 'path';
import fs from 'fs';

// Get database path
const dbPath = path.join(process.cwd(), 'data', 'rate_limits.db');

// Ensure data directory exists
const dataDir = path.dirname(dbPath);
if (!fs.existsSync(dataDir)) {
  fs.mkdirSync(dataDir, { recursive: true });
}

// Initialize database
let db: Database.Database | null = null;

function getDb(): Database.Database {
  if (!db) {
    db = new Database(dbPath);
    
    // Create table if it doesn't exist
    db.exec(`
      CREATE TABLE IF NOT EXISTS rate_limits (
        ip TEXT PRIMARY KEY,
        request_count INTEGER DEFAULT 1,
        first_request_date TEXT NOT NULL,
        last_request_date TEXT NOT NULL
      );
      
      CREATE INDEX IF NOT EXISTS idx_last_request_date ON rate_limits(last_request_date);
    `);
  }
  return db;
}

export interface RateLimitInfo {
  ip: string;
  requestCount: number;
  firstRequestDate: string;
  lastRequestDate: string;
}

const MAX_REQUESTS_PER_DAY = 50;

export function checkRateLimit(ip: string): { allowed: boolean; remaining: number; resetDate: string } {
  const database = getDb();
  const now = new Date().toISOString();
  const today = new Date().toISOString().split('T')[0]; // YYYY-MM-DD
  
  // Get or create rate limit record
  let record = database.prepare('SELECT * FROM rate_limits WHERE ip = ?').get(ip) as RateLimitInfo | undefined;
  
  if (!record) {
    // First request from this IP
    database.prepare(`
      INSERT INTO rate_limits (ip, request_count, first_request_date, last_request_date)
      VALUES (?, 1, ?, ?)
    `).run(ip, now, now);
    
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_DAY - 1,
      resetDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  }
  
  // Check if it's a new day
  const recordDate = record.first_request_date.split('T')[0];
  
  if (recordDate !== today) {
    // Reset for new day
    database.prepare(`
      UPDATE rate_limits 
      SET request_count = 1, first_request_date = ?, last_request_date = ?
      WHERE ip = ?
    `).run(now, now, ip);
    
    return {
      allowed: true,
      remaining: MAX_REQUESTS_PER_DAY - 1,
      resetDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
    };
  }
  
  // Same day - check limit
  if (record.request_count >= MAX_REQUESTS_PER_DAY) {
    // Calculate reset time (start of next day)
    const resetDate = new Date();
    resetDate.setDate(resetDate.getDate() + 1);
    resetDate.setHours(0, 0, 0, 0);
    
    return {
      allowed: false,
      remaining: 0,
      resetDate: resetDate.toISOString()
    };
  }
  
  // Increment counter
  database.prepare(`
    UPDATE rate_limits 
    SET request_count = request_count + 1, last_request_date = ?
    WHERE ip = ?
  `).run(now, ip);
  
  return {
    allowed: true,
    remaining: MAX_REQUESTS_PER_DAY - (record.request_count + 1),
    resetDate: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString()
  };
}

export function getClientIP(request: { headers: Headers | { get: (key: string) => string | null } }): string {
  // Try to get IP from various headers (for proxies/load balancers)
  const getHeader = (key: string) => {
    if ('get' in request.headers) {
      return request.headers.get(key);
    }
    return null;
  };
  
  const forwarded = getHeader('x-forwarded-for');
  if (forwarded) {
    const ips = forwarded.split(',');
    return ips[0]?.trim() || 'unknown';
  }
  
  const realIP = getHeader('x-real-ip');
  if (realIP) {
    return realIP;
  }
  
  // Fallback for development
  return '127.0.0.1';
}

// Cleanup old records (older than 7 days) - can be called periodically
export function cleanupOldRecords() {
  const database = getDb();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);
  
  database.prepare(`
    DELETE FROM rate_limits 
    WHERE last_request_date < ?
  `).run(sevenDaysAgo.toISOString());
}

// Close database connection (for graceful shutdown)
export function closeDb() {
  if (db) {
    db.close();
    db = null;
  }
}

