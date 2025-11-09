'use client';

import Link from 'next/link';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'Birth', href: '/birth' },
  { label: 'Postpartum', href: '/postpartum' },
  { label: 'Beyond', href: '/beyond' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contacts', href: '/#contacts' },
];

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/#contacts') {
      return pathname === '/' && typeof window !== 'undefined' && window.location.hash === '#contacts';
    }

    if (href === '/') {
      return pathname === '/';
    }

    return pathname.startsWith(href);
  };

  return (
    <nav
      className="nav-watermark fixed top-0 left-0 right-0 z-50 border-b"
      style={{ backgroundColor: 'rgba(251, 249, 246, 0.92)', borderColor: 'var(--color-olive)' }}
    >
      <div className="container-custom px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-2 flex-shrink-0">
            <div className="w-12 h-12 flex items-center justify-center">
              <img src="/logo.png" alt="DoulaDoo Logo" className="w-full h-full object-contain" />
            </div>
            <img src="/logo_txt.png" alt="DoulaDoo" className="h-6 sm:h-7 object-contain" />
          </div>

          <div className="hidden lg:flex items-center space-x-6 xl:space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className={`font-medium text-sm xl:text-base transition-opacity hover:opacity-75 ${
                  isActive(item.href) ? 'underline decoration-2 underline-offset-8' : ''
                }`}
                style={{ color: 'var(--color-text)' }}
              >
                {item.label}
              </Link>
            ))}
            <Link href="/consultation" className="btn-primary text-sm xl:text-base px-4 py-2 xl:px-6 xl:py-3" onClick={() => setIsOpen(false)}>
              Free Consultation
            </Link>
          </div>

          <div className="hidden md:flex lg:hidden items-center space-x-4">
            <Link
              href="/consultation"
              className="btn-primary text-sm px-4 py-2"
              onClick={() => setIsOpen(false)}
            >
              Free Consultation
            </Link>
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-md transition-colors"
            style={{ backgroundColor: 'transparent' }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = 'var(--color-secondary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-6 flex flex-col justify-center space-y-1">
              <div
                className={`w-full h-0.5 transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}
                style={{ backgroundColor: 'var(--color-text)' }}
              />
              <div
                className={`w-full h-0.5 transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`}
                style={{ backgroundColor: 'var(--color-text)' }}
              />
              <div
                className={`w-full h-0.5 transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-1.5' : ''}`}
                style={{ backgroundColor: 'var(--color-text)' }}
              />
            </div>
          </button>
        </div>

        <div
          className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}
        >
          <div className="py-4 space-y-3 border-t" style={{ borderColor: 'var(--color-olive)' }}>
            {navItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="block w-full text-left font-medium py-3 px-2 rounded-md transition-opacity hover:opacity-75"
                style={{ color: 'var(--color-text)' }}
              >
                {item.label}
              </Link>
            ))}
            <div className="pt-2">
              <Link href="/consultation" onClick={() => setIsOpen(false)} className="btn-primary w-full text-center">
                Free Consultation
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;
