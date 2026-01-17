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
    <footer style={{ backgroundColor: 'var(--color-background)', color: 'var(--color-text)' }}>
      <div className="container-custom px-4 sm:px-6 lg:px-8 py-12 grid gap-8 md:grid-cols-2">
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <img src="/DoulaDoo_LOGO_goriz.svg" alt="DoulaDoo Logo" className="h-12 object-contain" />
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
              {links.filter(link => link.href !== '/team').map((link) => (
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
              <li>
                <a href="tel:+16615900809" className="hover:opacity-70 transition-opacity">
                  +1 661-590-0809
                </a>
              </li>
              <li>
                <a href="mailto:love@douladoo.com" className="hover:opacity-70 transition-opacity">
                  love@douladoo.com
                </a>
              </li>
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

