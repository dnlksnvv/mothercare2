'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import Footer from '../../components/Footer';

const PostpartumPage = () => {
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
              "linear-gradient(rgba(201, 210, 182, 0.62), rgba(251, 249, 246, 0.9)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl sm:text-5xl max-w-3xl" style={{ color: 'var(--color-text)' }}>
              Postpartum Support: A Soft Landing for Sacred Days
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                The fourth trimester deserves reverence. We weave gentle rhythms into your home so that you can heal,
                bond, and rest. Nourishing meals, infant care coaching, and emotional companionship ensure you never
                feel alone in this tender chapter.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                Our doulas support your body’s recovery, guide lactation journeys, and harmonize the needs of your
                growing family. We honor your cultural practices and create pockets of peace where you can simply be.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Restful in-home visits with nourishing teas, herbal baths, and grounding rituals.',
                'Breast/chestfeeding assistance, bottle introductions, and responsive newborn care.',
                'Emotional debrief sessions and resources for mental well-being and partner support.',
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
                Let us cradle your family while you rediscover your rhythm.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
                Arrange a complimentary consultation to design postpartum care attuned to your traditions, desires, and
                the unique song of your baby.
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

export default PostpartumPage;

