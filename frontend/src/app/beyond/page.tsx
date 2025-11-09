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

      <main className="pt-24">
        <section
          className="relative flex items-center"
          style={{
            minHeight: '360px',
            backgroundImage:
              "linear-gradient(rgba(243, 187, 168, 0.58), rgba(251, 249, 246, 0.9)), url('https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl sm:text-5xl max-w-3xl" style={{ color: 'var(--color-text)' }}>
              Beyond Services: Continuing the Circle of Nurture
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                Motherhood keeps unfolding—through first steps, sibling transitions, and reinvention of self. Our
                beyond services offer coaching, wellness plans, and continuous care that adapts with your family’s
                rhythm.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                From home blessings to overnight doula care, we craft bespoke experiences that honor your evolving
                needs. Think of us as your devoted confidantes, ready whenever motherhood calls for an extra set of
                loving hands.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Holistic wellness consults blending herbal support, mindfulness, and practical routines.',
                'Sibling preparation, gentle parenting mentorship, and family integration ceremonies.',
                'Overnight doula care, travel doula accompaniment, and milestone celebration planning.',
              ].map((item) => (
                <div key={item} className="rounded-2xl px-5 py-4" style={{ backgroundColor: 'var(--color-secondary)' }}>
                  <p style={{ color: 'var(--color-text)' }}>{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl px-6 py-10 sm:px-12" style={{ backgroundColor: 'var(--color-olive)' }}>
              <h2 className="text-2xl sm:text-3xl mb-4" style={{ color: 'var(--color-text)' }}>
                Your family’s story is ever-growing—let’s dream the next chapter together.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
                Tell us what support looks like for you now. Schedule a complimentary consultation and we’ll tailor an
                offering that feels like home.
              </p>
              <Link href="/consultation" className="btn-primary inline-flex px-6 py-3 text-base">
                Book a Free Consultation
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default BeyondPage;

