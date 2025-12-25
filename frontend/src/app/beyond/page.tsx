'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import Footer from '../../components/Footer';

const BeyondPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <AIAssistant />

      <main className="pt-32">
        {/* Main Content Section */}
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: 'var(--color-text)' }}>
                Beyond
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                Beyond birth and postpartum, we offer additional services to support your confidence, healing, learning, and growth all of which you can explore in detail during your complimentary consultation.
              </p>
            </div>
            <div className="space-y-4 rounded-3xl px-6 py-8" style={{ backgroundColor: 'var(--color-secondary)' }}>
              <ul className="space-y-3" style={{ color: 'var(--color-text)' }}>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Lactation guidance</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Nutritionist consultation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Birth and parenting classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Prenatal yoga classes</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Belly binding and abdominal correction</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Placenta encapsulation</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Birth photograph</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Photos Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="rounded-3xl overflow-hidden">
                <img src="/beyond1.jpg" alt="Beyond services" className="w-full h-full object-cover rounded-3xl" style={{ aspectRatio: '1/1' }} />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img src="/beyond2.jpg" alt="Beyond services" className="w-full h-full object-cover rounded-3xl" style={{ aspectRatio: '1/1' }} />
              </div>
              <div className="rounded-3xl overflow-hidden">
                <img src="/beyond3.jpg" alt="Beyond services" className="w-full h-full object-cover rounded-3xl" style={{ aspectRatio: '1/1' }} />
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl px-6 py-10 sm:px-12" style={{ backgroundColor: 'var(--color-olive)' }}>
              <h2 className="text-2xl sm:text-3xl mb-4 text-center" style={{ color: 'var(--color-text)' }}>
                Let's discover how our beyond support can serve you best!
              </h2>
              <p className="text-sm sm:text-base mb-6 text-center" style={{ color: 'var(--color-text)' }}>
                Explore the many ways our beyond support can nurture your family
              </p>
              <div className="flex justify-center">
                <Link href="/consultation" className="btn-primary inline-flex px-6 py-3 text-base">
                  Book a free consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BeyondPage;
