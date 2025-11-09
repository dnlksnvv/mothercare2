'use client';

import Link from 'next/link';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import Footer from '../components/Footer';

const serviceCards = [
  {
    title: 'Birth Support',
    description: 'Continuous guidance before, during, and after labour so you feel grounded and calm.',
    href: '/birth',
    icon: '🤍',
  },
  {
    title: 'Postpartum Support',
    description: 'Restful care, nourishing routines, and gentle coaching for the fourth trimester.',
    href: '/postpartum',
    icon: '🌿',
  },
  {
    title: 'Beyond Services',
    description: 'Long-term companionship for family transitions, sibling prep, and everyday rhythms.',
    href: '/beyond',
    icon: '✨',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <AIAssistant />

      <main className="pt-24">
        <section
          className="relative overflow-hidden"
          style={{
            backgroundImage:
              "linear-gradient(135deg, rgba(247,214,193,0.45), rgba(251,249,246,0.92)), url('https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-24">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <p className="text-sm uppercase tracking-[0.4em]" style={{ color: 'var(--color-text)' }}>
                  The Sacred Mom's Journey
                </p>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ color: 'var(--color-text)' }}>
                  Birth as celebration.<br /> Motherhood as journey.<br /> Both as{' '}
                  <span className="accent-script">Love</span>.
                </h1>
                <p className="text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  DoulaDoo surrounds each chapter with intuitive care, evidence-based guidance, and a soothing presence
                  that keeps mothers at the centre.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Link href="/consultation" className="btn-primary px-6 py-3 text-base">
                    Book a Free Consultation
                  </Link>
                  <Link
                    href="/#journey"
                    className="btn-secondary px-6 py-3 text-base"
                    style={{ borderColor: 'var(--color-olive)' }}
                  >
                    Discover Services
                  </Link>
                </div>
              </div>
              <div className="hidden lg:flex justify-end">
                <div
                  className="rounded-[36px] p-12 w-full max-w-md"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-olive)' }}
                >
                  <p className="text-xl leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    “When mothers are held with empathy and gentleness, the entire family takes its first breath of
                    ease.”
                  </p>
                  <p className="mt-6 text-sm uppercase tracking-[0.3em]" style={{ color: 'var(--color-accent)' }}>
                    DoulaDoo Collective
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl" style={{ color: 'var(--color-text)' }}>
                Warm, present, and quietly confident support
              </h2>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
                We listen, design, and walk beside you—maintaining calm in clinical spaces, orchestrating postpartum
                rest, and guiding every small transition. Our work lets you lean into love rather than logistics.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'var(--color-text)' }}>
                Each visit is intentional: gentle touch, mindful breathwork, restorative meals, and simple rituals that
                bring families back to themselves.
              </p>
            </div>
            <div className="rounded-[32px] overflow-hidden" style={{ border: '1px solid var(--color-olive)' }}>
              <img
                src="https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80"
                alt="Mother holding newborn"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        <section className="py-16" style={{ backgroundColor: 'var(--color-secondary)' }}>
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl sm:text-3xl leading-relaxed" style={{ color: 'var(--color-text)' }}>
              “We believe a nurtured mother creates a radiant beginning.”
            </blockquote>
          </div>
        </section>

        <section className="section-padding" id="journey">
          <div className="container-custom px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl" style={{ color: 'var(--color-text)' }}>
                Your journey. Our companionship.
              </h2>
              <p className="max-w-3xl mx-auto" style={{ color: 'var(--color-text)' }}>
                Three signature pathways designed to meet you where you are—each fully customisable, always rooted in
                compassion.
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((card) => (
                <article
                  key={card.title}
                  className="space-y-5 rounded-[28px] p-8"
                  style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-olive)' }}
                >
                  <div className="text-3xl" style={{ color: 'var(--color-primary)' }}>
                    {card.icon}
                  </div>
                  <h3 className="text-2xl" style={{ color: 'var(--color-text)' }}>
                    {card.title}
                  </h3>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    {card.description}
                  </p>
                  <Link
                    href={card.href}
                    className="inline-flex items-center text-sm font-semibold gap-1"
                    style={{ color: 'var(--color-primary)' }}
                  >
                    Explore the details ↗
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20" style={{ backgroundColor: 'var(--color-olive)' }}>
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center space-y-6">
            <h2 className="text-2xl sm:text-3xl" style={{ color: 'var(--color-text)' }}>
              Ready to feel held every step of the way?
            </h2>
            <Link href="/consultation" className="btn-primary text-base px-8 py-4 inline-flex justify-center">
              Book a Free Consultation
            </Link>
          </div>
        </section>

        <section id="contacts" className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--color-primary)' }}>
                  Studio
                </p>
                <p style={{ color: 'var(--color-text)' }}>New York, NY</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--color-primary)' }}>
                  Phone
                </p>
                <p style={{ color: 'var(--color-text)' }}>+1 (555) 123-4567</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--color-primary)' }}>
                  Email
                </p>
                <p style={{ color: 'var(--color-text)' }}>hello@douladoo.care</p>
              </div>
              <div className="space-y-2">
                <p className="text-xs uppercase tracking-[0.4em]" style={{ color: 'var(--color-primary)' }}>
                  Social
                </p>
                <p style={{ color: 'var(--color-text)' }}>@douladoo.moms</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
