'use client';

import { useEffect } from 'react';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import Footer from '../../components/Footer';

const calendlySrc =
  'https://calendly.com/miamidouladoo/30min?hide_event_type_details=1&hide_gdpr_banner=1&background_color=fbf9f6&text_color=3f3f3f&primary_color=e4afa3';

const ConsultationPage = () => {
  useEffect(() => {
    if (!document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://assets.calendly.com/assets/external/widget.js';
      script.async = true;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <AIAssistant />

      <main className="pt-32">
        <section className="section-padding pb-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h1 className="text-4xl sm:text-5xl" style={{ color: 'var(--color-text)' }}>
              Book a Free Consultation
            </h1>
            <p className="text-base sm:text-lg max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
              Choose a moment that feels right. During our call we will listen to your wishes, share how we support
              families through birth and beyond, and co-create the perfect plan for you.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div style={{ backgroundColor: 'var(--color-background)' }}>
              <div className="calendly-inline-widget" data-url={calendlySrc} style={{ minWidth: '320px', height: '700px', maxHeight: '700px' }} />
            </div>
            <div className="mt-6 rounded-3xl px-6 py-6 text-center" style={{ backgroundColor: 'var(--color-secondary)' }}>
              <p className="mb-3" style={{ color: 'var(--color-text)' }}>
                Prefer email? Reach us at <a href="mailto:hello@douladoo.care">hello@douladoo.care</a>
              </p>
              <a
                href={calendlySrc}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary inline-flex px-6 py-3 text-base"
              >
                Open Calendly in New Tab
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ConsultationPage;

