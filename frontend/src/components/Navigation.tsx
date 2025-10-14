'use client';

import { useState } from 'react';
import ThemeToggle from './ThemeToggle';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm z-50 border-b border-neutral-200">
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{backgroundColor: 'var(--color-primary)'}}>
              <span className="text-white font-bold text-lg">D</span>
            </div>
            <span className="text-lg sm:text-xl font-bold text-neutral-900 truncate">
              DoulaDoo
            </span>
          </div>

                  {/* Desktop Navigation */}
                  <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
                    <button
                      onClick={() => scrollToSection('home')}
                      className="text-neutral-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base"
                    >
                      Home
                    </button>
                    <button
                      onClick={() => scrollToSection('services')}
                      className="text-neutral-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base"
                    >
                      Services
                    </button>
                    <button
                      onClick={() => scrollToSection('about')}
                      className="text-neutral-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base"
                    >
                      About
                    </button>
                    <button
                      onClick={() => scrollToSection('ai-assistant')}
                      className="text-neutral-700 hover:text-primary-600 font-medium transition-colors text-sm xl:text-base"
                    >
                      AI Assistant
                    </button>
                    <ThemeToggle />
                    <button
                      onClick={() => scrollToSection('booking')}
                      className="btn-primary text-sm xl:text-base px-4 py-2 xl:px-6 xl:py-3"
                    >
                      Book Now
                    </button>
                  </div>

          {/* Tablet Navigation (md to lg) */}
          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <button
              onClick={() => scrollToSection('services')}
              className="text-neutral-700 hover:text-primary-600 font-medium transition-colors text-sm"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('booking')}
              className="btn-primary text-sm px-4 py-2"
            >
              Book Now
            </button>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md hover:bg-neutral-100 transition-colors"
            aria-label="Открыть меню"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div className={`w-full h-0.5 bg-neutral-700 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`} />
              <div className={`w-full h-0.5 bg-neutral-700 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <div className={`w-full h-0.5 bg-neutral-700 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`} />
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <div className="py-4 space-y-3 border-t border-neutral-200">
            <button
              onClick={() => scrollToSection('home')}
              className="block w-full text-left text-neutral-700 hover:text-primary-600 font-medium py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-neutral-700 hover:text-primary-600 font-medium py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('about')}
              className="block w-full text-left text-neutral-700 hover:text-primary-600 font-medium py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors"
            >
              About
            </button>
                    <button
                      onClick={() => scrollToSection('ai-assistant')}
                      className="block w-full text-left text-neutral-700 hover:text-primary-600 font-medium py-3 px-2 rounded-md hover:bg-neutral-50 transition-colors"
                    >
                      AI Assistant
                    </button>
                    <div className="pt-2 px-2">
                      <ThemeToggle />
                    </div>
                    <div className="pt-2">
                      <button
                        onClick={() => scrollToSection('booking')}
                        className="btn-primary w-full text-center"
                      >
                        Book Consultation
                      </button>
                    </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
