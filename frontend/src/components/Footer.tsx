import Link from 'next/link';

const links = [
  { label: 'Home', href: '/' },
  { label: 'Birth', href: '/birth' },
  { label: 'Postpartum', href: '/postpartum' },
  { label: 'Beyond', href: '/beyond' },
  { label: 'Our Team', href: '/team' },
  { label: 'Contacts', href: '/#contacts' },
  { label: 'Free Consultation', href: '/consultation' },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-24" style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src="/logo.png" alt="DoulaDoo Logo" className="h-12 w-12 object-contain" />
            <img src="/logo_txt.png" alt="DoulaDoo" className="h-7 object-contain" />
          </div>
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            DoulaDoo offers calm, continuous care for mothers and families—before birth, through postpartum, and every
            season beyond.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: 'var(--color-text)' }}>
              Navigate
            </h3>
            <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm">
              {links.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="hover:opacity-70 transition-opacity">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xs uppercase tracking-[0.4em] mb-3" style={{ color: 'var(--color-text)' }}>
              Contact
            </h3>
            <ul className="space-y-2 text-sm">
              <li>+1 (555) 123-4567</li>
              <li>hello@douladoo.care</li>
              <li>New York, NY</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="border-t py-4 text-center text-xs" style={{ borderColor: 'var(--color-olive)', color: 'var(--color-text)' }}>
        © {currentYear} DoulaDoo. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

