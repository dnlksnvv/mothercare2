/** @type {import('next').NextConfig} */
const nextConfig = {
  // Чистая конфигурация для Turbopack
  output: 'standalone', // Для оптимизации Docker образа
}

module.exports = nextConfig
