'use client';

import { useState, useRef, useEffect } from 'react';
import Link from 'next/link';

const MAX_MESSAGE_LENGTH = 1500;

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hello! I\'m your DoulaDoo AI assistant. I can answer questions about our services, team, and how we support families through birth, postpartum, and beyond.',
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Load conversation history from localStorage
  const loadHistory = () => {
    try {
      const savedHistory = localStorage.getItem('douladoo_chat_history');
      
      if (savedHistory) {
        const history = JSON.parse(savedHistory);
        
        // Convert history to messages format (skip system message)
        const historyMessages = history
          .filter((msg: { role: string }) => msg.role !== 'system')
          .map((msg: { role: string; content: string }, index: number) => ({
            id: Date.now() + index, // Use timestamp for unique IDs
            text: msg.content,
            isBot: msg.role === 'assistant',
          }));
        
        if (historyMessages.length > 0) {
          // If we have history, replace all messages with history (no initial greeting)
          setMessages(historyMessages);
        }
      }
    } catch (e) {
      console.error('Error loading chat history:', e);
    }
  };

  // Save conversation history to localStorage
  const saveHistory = (history: Array<{ role: string; content: string }>) => {
    try {
      // Keep last 20 messages
      const historyToSave = history
        .filter(msg => msg.role !== 'system')
        .slice(-20);
      
      localStorage.setItem('douladoo_chat_history', JSON.stringify(historyToSave));
    } catch (e) {
      console.error('Error saving chat history:', e);
    }
  };

  // Load history on mount
  useEffect(() => {
    loadHistory();
  }, []);

  // Reload history when chat opens
  useEffect(() => {
    if (isOpen) {
      loadHistory();
    }
  }, [isOpen]);

  const quickQuestions = [
    'What is Birth Support?',
    'What is Postpartum Support?',
    'What are Beyond Services?',
    'Who is on your team?',
    'How do I book a consultation?',
  ];

  // Auto-scroll to bottom when new messages arrive
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages, isLoading]);

  // Handle ESC key to close chat
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        setIsOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen]);

  const handleSendMessage = async () => {
    if (!inputMessage.trim() || isLoading) return;
    
    // Check message length
    if (inputMessage.length > MAX_MESSAGE_LENGTH) {
      return; // Don't send if too long
    }

    const messageToSend = inputMessage;
    const newMessageId = Date.now();
    const newMessage = {
      id: newMessageId,
      text: inputMessage,
      isBot: false,
    };

    setMessages(prev => [...prev, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    // Build conversation history for API
    const conversationHistory = messages
      .map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text,
      }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: messageToSend,
          conversationHistory: conversationHistory,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const botResponseId = Date.now() + 1;
        const botResponse = {
          id: botResponseId,
          text: data.response,
          isBot: true,
        };
        setMessages(prev => {
          const updatedMessages = [...prev, botResponse];
          // Save to localStorage
          const historyToSave = updatedMessages.map(msg => ({
            role: msg.isBot ? 'assistant' : 'user',
            content: msg.text,
          }));
          saveHistory(historyToSave);
          return updatedMessages;
        });
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      const errorResponseId = Date.now() + 1;
      const errorResponse = {
        id: errorResponseId,
        text: 'I apologize, but I\'m having trouble responding right now. Please try again in a moment.',
        isBot: true,
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleQuickQuestion = async (question: string) => {
    if (isLoading) return;

    const newMessageId = Date.now();
    const newMessage = {
      id: newMessageId,
      text: question,
      isBot: false,
    };

    setMessages(prev => [...prev, newMessage]);
    setIsLoading(true);

    // Build conversation history for API
    const conversationHistory = messages
      .map(msg => ({
        role: msg.isBot ? 'assistant' : 'user',
        content: msg.text,
      }));

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ 
          message: question,
          conversationHistory: conversationHistory,
        }),
      });

      const data = await response.json();

      if (response.ok) {
        const botResponseId = Date.now() + 1;
        const botResponse = {
          id: botResponseId,
          text: data.response,
          isBot: true,
        };
        setMessages(prev => {
          const updatedMessages = [...prev, botResponse];
          // Save to localStorage
          const historyToSave = updatedMessages.map(msg => ({
            role: msg.isBot ? 'assistant' : 'user',
            content: msg.text,
          }));
          saveHistory(historyToSave);
          return updatedMessages;
        });
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      const errorResponseId = Date.now() + 1;
      const errorResponse = {
        id: errorResponseId,
        text: 'I apologize, but I\'m having trouble responding right now. Please try again in a moment.',
        isBot: true,
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
  };

  // Parse markdown links and render them as clickable links
  // Also hide "/consultation" as plain text (but not inside markdown links)
  const parseMessage = (text: string) => {
    const parts: (string | JSX.Element)[] = [];
    let lastIndex = 0;
    
    // Match markdown links: [text](url)
    const linkRegex = /\[([^\]]+)\]\(([^)]+)\)/g;
    let match;
    const linkRanges: Array<{ start: number; end: number }> = [];
    
    // First pass: find all markdown links to protect them from text replacement
    while ((match = linkRegex.exec(text)) !== null) {
      linkRanges.push({
        start: match.index,
        end: match.index + match[0].length
      });
    }
    
    // Reset regex
    linkRegex.lastIndex = 0;
    
    // Second pass: process links and text
    while ((match = linkRegex.exec(text)) !== null) {
      // Add text before the link, replacing "/consultation" only if not in a link
      if (match.index > lastIndex) {
        let textBefore = text.substring(lastIndex, match.index);
        // Replace plain "/consultation" text, but only if it's not part of a markdown link
        textBefore = textBefore.replace(/\/(consultation)\b/g, 'Free Consultation page');
        parts.push(textBefore);
      }
      
      const linkText = match[1];
      const linkUrl = match[2];
      
      // Check if it's a phone link
      if (linkUrl.startsWith('tel:')) {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            className="underline font-semibold"
            style={{ color: 'var(--color-primary)' }}
          >
            {linkText}
          </a>
        );
      }
      // Check if it's an email link
      else if (linkUrl.startsWith('mailto:')) {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            className="underline font-semibold"
            style={{ color: 'var(--color-primary)' }}
          >
            {linkText}
          </a>
        );
      }
      // Check if it's an internal link (starts with /)
      else if (linkUrl.startsWith('/')) {
        parts.push(
          <Link
            key={match.index}
            href={linkUrl}
            className="underline font-semibold"
            style={{ color: 'var(--color-primary)' }}
            onClick={() => setIsOpen(false)}
          >
            {linkText}
          </Link>
        );
      }
      // External link
      else {
        parts.push(
          <a
            key={match.index}
            href={linkUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="underline font-semibold"
            style={{ color: 'var(--color-primary)' }}
          >
            {linkText}
          </a>
        );
      }
      
      lastIndex = match.index + match[0].length;
    }
    
    // Add remaining text, replacing "/consultation" if not in a link
    if (lastIndex < text.length) {
      let remainingText = text.substring(lastIndex);
      remainingText = remainingText.replace(/\/(consultation)\b/g, 'Free Consultation page');
      parts.push(remainingText);
    }
    
    return parts.length > 0 ? parts : [text.replace(/\/(consultation)\b/g, 'Free Consultation page')];
  };

  return (
    <>
      {/* AI Assistant Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-6 right-6 w-16 h-16 rounded-full shadow-xl hover:shadow-2xl transition-all duration-300 z-40 flex items-center justify-center animate-bounce-gentle"
        style={{backgroundColor: 'var(--color-primary)', opacity: 1, color: 'var(--color-background)'}}
        onMouseEnter={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
          e.currentTarget.style.opacity = '1';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.backgroundColor = 'var(--color-primary)';
          e.currentTarget.style.opacity = '1';
        }}
      >
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      </button>

      {/* AI Assistant Modal */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end justify-end p-4" style={{backgroundColor: 'rgba(63, 63, 63, 0.5)'}}>
          <div className="rounded-2xl w-full max-w-md h-[600px] flex flex-col shadow-2xl" style={{backgroundColor: 'var(--color-background)'}}>
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b" style={{borderColor: 'var(--color-olive)'}}>
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{backgroundColor: 'var(--color-primary)', opacity: 1}}>
                  <span className="font-bold" style={{color: 'var(--color-background)'}}>AI</span>
                </div>
                  <div>
                    <h3 className="font-semibold" style={{color: 'var(--color-text)'}}>Doula AI Assistant</h3>
                    <p className="text-sm" style={{color: 'var(--color-text-light)'}}>Available 24/7</p>
                  </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 flex items-center justify-center rounded-full transition-colors"
                style={{color: 'var(--color-text)'}}
                onMouseEnter={(e) => {e.currentTarget.style.backgroundColor = 'var(--color-secondary)';}}
                onMouseLeave={(e) => {e.currentTarget.style.backgroundColor = 'transparent';}}
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => {
                const parsedContent = message.isBot ? parseMessage(message.text) : [message.text];
                // Check if message contains consultation link (in markdown format or plain text)
                const hasConsultationLink = message.isBot && (
                  message.text.includes('[Book a Free Consultation](/consultation)') ||
                  message.text.includes('Free Consultation') ||
                  message.text.toLowerCase().includes('consultation')
                );
                
                return (
                  <div
                    key={message.id}
                    className={`flex flex-col ${message.isBot ? 'items-start' : 'items-end'}`}
                  >
                    <div
                      className={`max-w-xs px-4 py-2 rounded-2xl ${message.isBot ? '' : 'text-right'}`}
                      style={message.isBot ? {backgroundColor: 'var(--color-secondary)', color: 'var(--color-text)'} : {backgroundColor: 'var(--color-primary)', opacity: 1, color: 'var(--color-background)'}}
                    >
                      <p className="text-sm whitespace-pre-wrap">
                        {parsedContent}
                      </p>
                    </div>
                    {hasConsultationLink && message.isBot && (
                      <div className="mt-2">
                        <Link
                          href="/consultation"
                          onClick={() => setIsOpen(false)}
                          className="inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                          style={{backgroundColor: 'var(--color-primary)', color: 'var(--color-background)'}}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                          }}
                        >
                          Book a Free Consultation
                        </Link>
                      </div>
                    )}
                  </div>
                );
              })}
              
              {/* Loading indicator */}
              {isLoading && (
                <div className="flex justify-start">
                  <div className="max-w-xs px-4 py-2 rounded-2xl" style={{backgroundColor: 'var(--color-secondary)'}}>
                    <div className="flex items-center space-x-1">
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: 'var(--color-primary)'}}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: 'var(--color-primary)', animationDelay: '0.1s'}}></div>
                      <div className="w-2 h-2 rounded-full animate-bounce" style={{backgroundColor: 'var(--color-primary)', animationDelay: '0.2s'}}></div>
                    </div>
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Questions */}
            <div className="p-4 border-t" style={{borderColor: 'var(--color-olive)'}}>
              <p className="text-sm font-medium mb-2" style={{color: 'var(--color-text)'}}>Frequent questions:</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {quickQuestions.map((question, index) => (
                  <button
                    key={index}
                    onClick={() => handleQuickQuestion(question)}
                    disabled={isLoading}
                    className="text-xs disabled:cursor-not-allowed px-3 py-2 rounded-full transition-colors"
                    style={{backgroundColor: isLoading ? 'var(--color-background)' : 'var(--color-secondary)', color: 'var(--color-text)'}}
                    onMouseEnter={(e) => {if (!isLoading) e.currentTarget.style.backgroundColor = 'var(--color-accent)';}}
                    onMouseLeave={(e) => {if (!isLoading) e.currentTarget.style.backgroundColor = 'var(--color-secondary)';}}
                  >
                    {question}
                  </button>
                ))}
              </div>

              {/* Input */}
              <div className="flex flex-col space-y-2">
                {inputMessage.length > MAX_MESSAGE_LENGTH && (
                  <p className="text-xs" style={{ color: 'var(--color-primary)' }}>
                    Message is too long. Maximum {MAX_MESSAGE_LENGTH} characters. ({inputMessage.length}/{MAX_MESSAGE_LENGTH})
                  </p>
                )}
                <div className="flex space-x-2">
                  <input
                    type="text"
                    value={inputMessage}
                    onChange={(e) => setInputMessage(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && !isLoading && inputMessage.length <= MAX_MESSAGE_LENGTH && handleSendMessage()}
                    placeholder="Ask a question..."
                    className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2"
                    style={{
                      borderColor: inputMessage.length > MAX_MESSAGE_LENGTH ? 'var(--color-primary)' : 'var(--color-olive)',
                      color: 'var(--color-text)'
                    }}
                    onFocus={(e) => {e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.outline = 'none';}}
                    onBlur={(e) => {e.currentTarget.style.borderColor = inputMessage.length > MAX_MESSAGE_LENGTH ? 'var(--color-primary)' : 'var(--color-olive)';}}
                    maxLength={MAX_MESSAGE_LENGTH + 100} // Allow typing but show warning
                  />
                  <button
                    onClick={handleSendMessage}
                    disabled={isLoading || !inputMessage.trim() || inputMessage.length > MAX_MESSAGE_LENGTH}
                    className="w-10 h-10 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
                    style={{backgroundColor: isLoading || !inputMessage.trim() || inputMessage.length > MAX_MESSAGE_LENGTH ? 'var(--color-olive)' : 'var(--color-primary)', opacity: 1, color: isLoading || !inputMessage.trim() || inputMessage.length > MAX_MESSAGE_LENGTH ? 'var(--color-text)' : 'var(--color-background)'}}
                    onMouseEnter={(e) => {
                      if (!isLoading && inputMessage.trim() && inputMessage.length <= MAX_MESSAGE_LENGTH) {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                        e.currentTarget.style.opacity = '1';
                      }
                    }}
                    onMouseLeave={(e) => {
                      if (!isLoading && inputMessage.trim() && inputMessage.length <= MAX_MESSAGE_LENGTH) {
                        e.currentTarget.style.backgroundColor = 'var(--color-primary)';
                        e.currentTarget.style.opacity = '1';
                      }
                    }}
                  >
                    {isLoading ? (
                      <div className="w-4 h-4 border-2 border-t-transparent rounded-full animate-spin" style={{borderColor: 'var(--color-background)', borderTopColor: 'transparent'}}></div>
                    ) : (
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default AIAssistant;
