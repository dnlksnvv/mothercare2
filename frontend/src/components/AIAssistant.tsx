'use client';

import { useState, useRef, useEffect } from 'react';

const AIAssistant = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      text: 'Hi! I\'m your Doula AI assistant. I\'m here to support you through birth, postpartum, and beyond. How can I help today?',
      isBot: true,
    },
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const quickQuestions = [
    'What does a birth doula do?',
    'How to prepare for postpartum?',
    'Signs of labor beginning',
    'Breathing techniques for birth',
    'When to contact my doula?',
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

    const newMessage = {
      id: messages.length + 1,
      text: inputMessage,
      isBot: false,
    };

    setMessages([...messages, newMessage]);
    setInputMessage('');
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      });

      const data = await response.json();

      if (response.ok) {
        const botResponse = {
          id: messages.length + 2,
          text: data.response,
          isBot: true,
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      const errorResponse = {
        id: messages.length + 2,
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

    const newMessage = {
      id: messages.length + 1,
      text: question,
      isBot: false,
    };

    setMessages([...messages, newMessage]);
    setIsLoading(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: question }),
      });

      const data = await response.json();

      if (response.ok) {
        const botResponse = {
          id: messages.length + 2,
          text: data.response,
          isBot: true,
        };
        setMessages(prev => [...prev, botResponse]);
      } else {
        throw new Error(data.error || 'Failed to get response');
      }
    } catch (error) {
      const errorResponse = {
        id: messages.length + 2,
        text: 'I apologize, but I\'m having trouble responding right now. Please try again in a moment.',
        isBot: true,
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsLoading(false);
    }
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
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.isBot ? 'justify-start' : 'justify-end'}`}
                >
                  <div
                    className="max-w-xs px-4 py-2 rounded-2xl"
                    style={message.isBot ? {backgroundColor: 'var(--color-secondary)', color: 'var(--color-text)'} : {backgroundColor: 'var(--color-primary)', opacity: 1, color: 'var(--color-background)'}}
                  >
                    <p className="text-sm">{message.text}</p>
                  </div>
                </div>
              ))}
              
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
              <div className="flex space-x-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && !isLoading && handleSendMessage()}
                  placeholder="Ask a question..."
                  className="flex-1 px-4 py-2 border rounded-full focus:outline-none focus:ring-2"
                  style={{borderColor: 'var(--color-olive)', color: 'var(--color-text)'}}
                  onFocus={(e) => {e.currentTarget.style.borderColor = 'var(--color-primary)'; e.currentTarget.style.outline = 'none';}}
                  onBlur={(e) => {e.currentTarget.style.borderColor = 'var(--color-olive)';}}
                />
                <button
                  onClick={handleSendMessage}
                  disabled={isLoading || !inputMessage.trim()}
                  className="w-10 h-10 disabled:cursor-not-allowed rounded-full flex items-center justify-center transition-colors"
                  style={{backgroundColor: isLoading || !inputMessage.trim() ? 'var(--color-olive)' : 'var(--color-primary)', opacity: 1, color: isLoading || !inputMessage.trim() ? 'var(--color-text)' : 'var(--color-background)'}}
                  onMouseEnter={(e) => {
                    if (!isLoading && inputMessage.trim()) {
                      e.currentTarget.style.backgroundColor = 'var(--color-primary-hover)';
                      e.currentTarget.style.opacity = '1';
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isLoading && inputMessage.trim()) {
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
      )}
    </>
  );
};

export default AIAssistant;
