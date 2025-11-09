'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import Footer from '../../components/Footer';

const BirthPage = () => {
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
              "linear-gradient(rgba(228, 175, 163, 0.6), rgba(251, 249, 246, 0.9)), url('https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl sm:text-5xl max-w-3xl" style={{ color: 'var(--color-text)' }}>
              Birth Support: Gentle Guidance for a Celebrated Beginning
            </h1>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-start">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                Your birth experience is sacred. We arrive with calm hearts, intuitive hands, and deep knowledge, so
                that you feel anchored through every wave. From crafting your birth vision to whispered reassurance in
                the delivery room, our doulas are your steadfast circle of care.
              </p>
              <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                We collaborate with medical teams, honor your preferred rituals, and create an environment where your
                intuition leads. Each breath, touch, and word is designed to help you feel powerful, nurtured, and in
                rhythm with your baby.
              </p>
            </div>
            <div className="space-y-4">
              {[
                'Prenatal visits to deepen trust, map comfort techniques, and align birth wishes.',
                'Continuous presence throughout labor with massage, breath guidance, and mindful positioning.',
                'Immediate postpartum support for bonding, first feeds, and emotional grounding.',
              ].map((item) => (
                <div
                  key={item}
                  className="rounded-2xl px-5 py-4"
                  style={{ backgroundColor: 'var(--color-secondary)' }}
                >
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
                Ready to welcome your baby with serenity and strength?
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
                Let’s design a birth space that reflects your heart. Schedule a complimentary consultation and begin
                your cherished preparation.
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

export default BirthPage;

