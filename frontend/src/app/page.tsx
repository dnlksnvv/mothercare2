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
    image: '/img1.jpg',
  },
  {
    title: 'Postpartum Support',
    description: 'Restful care, nourishing routines, and gentle coaching for the fourth trimester.',
    href: '/postpartum',
    image: '/img2.jpg',
  },
  {
    title: 'Beyond Services',
    description: 'Long-term companionship for family transitions, sibling prep, and everyday rhythms.',
    href: '/beyond',
    image: '/img3.jpg',
  },
];

export default function HomePage() {
  return (
    <div className="min-h-screen" style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <AIAssistant />

      <main className="pt-32">
        <section className="section-padding px-4 sm:px-6 lg:px-8">
          <div className="w-full max-w-none">
            <div className="rounded-[32px] overflow-hidden relative w-full" style={{ border: '1px solid var(--color-olive)' }}>
              <img
                src="/img_main.jpeg"
                alt="Sacred Pregnancy, Empowered Birth, Gentle Postpartum"
                className="w-full h-auto object-contain"
              />
              <div 
                className="absolute inset-0 flex flex-col justify-end sm:justify-between"
                style={{
                  background: 'linear-gradient(135deg, rgba(247, 214, 193, 0.45) 40%, rgba(251, 249, 246, 0.92) 100%)',
                }}
              >
                <div className="w-full pt-12 hidden sm:flex">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="space-y-2">
                      <h2 className="text-5xl sm:text-6xl lg:text-7xl leading-tight" style={{ color: 'var(--color-text)' }}>
                        Sacred Pregnancy.
                      </h2>
                      <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-tight" style={{ color: 'var(--color-text)' }}>
                        Empowered Birth.
                      </h2>
                      <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: 'var(--color-text)' }}>
                        Gentle Postpartum.
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="w-full pt-12 pb-4 sm:py-12">
                  <div className="px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-16">
                      <div className="flex justify-center">
                        <Link href="/consultation" className="btn-primary px-6 py-3 text-base sm:text-base md:text-lg lg:text-xl text-center w-full whitespace-nowrap">
                          Book free consultation
                        </Link>
                      </div>
                      <div className="flex justify-center">
                        <Link
                          href="/#journey"
                          className="btn-secondary px-6 py-3 text-base sm:text-base md:text-lg lg:text-xl text-center w-full whitespace-nowrap"
                          style={{ borderColor: 'var(--color-olive)' }}
                        >
                          Discover services
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl leading-tight" style={{ color: 'var(--color-text)' }}>
                DoulaDoo is a maternal support agency in South Florida
              </h2>
              <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                where every woman can feel calm, confident, and deeply empowered throughout her entire journey into motherhood - from a smooth, mindful pregnancy to a powerful birth and a gentle, supported postpartum.
              </p>
          </div>
            <div className="rounded-[32px] overflow-hidden" style={{ border: '1px solid var(--color-olive)', maxHeight: '600px' }}>
              <img
                src="/belly_photo.jpg"
                alt="Pregnant woman with flowers"
                className="w-full h-full object-cover"
                style={{ maxHeight: '600px' }}
              />
            </div>
          </div>
        </section>

        

        <section className="py-16" style={{ backgroundColor: 'var(--color-secondary)' }}>
          <div className="container-custom px-4 sm:px-6 lg:px-8 text-center">
            <blockquote className="text-2xl sm:text-3xl leading-relaxed" style={{ color: 'var(--color-text)' }}>
              “Birth as a celebration…Motherhood as a journey…Both as Love”
            </blockquote>
        </div>
      </section>

        <section className="section-padding" id="journey">
          <div className="container-custom px-4 sm:px-6 lg:px-8 space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl sm:text-4xl leading-relaxed" style={{ color: 'var(--color-text)' }}>
                We are a collective of birth and postpartum doulas — true heartworkers who genuinely love what we do and honor every woman simply for who she is.
              </h2>
              <p className="max-w-3xl mx-auto text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                We stand beside each mother with unwavering presence, compassion, and respect  - offering emotional support, evidence-based guidance, physical comfort, and a peaceful atmosphere where she can fully trust her body, her baby, and her own strength and power!
              </p>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {serviceCards.map((card) => (
                <Link
                  key={card.title}
                  href={card.href}
                  className="block"
                >
                  <article
                    className="rounded-[28px] overflow-hidden space-y-4 transition-all duration-300 cursor-pointer hover:shadow-lg hover:scale-[1.02]"
                    style={{ backgroundColor: 'var(--color-background)', border: '1px solid var(--color-olive)' }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-primary)';
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.borderColor = 'var(--color-olive)';
                    }}
                  >
                    <div 
                      className="h-64 w-full overflow-hidden rounded-[28px] transition-all duration-300"
                      style={{ border: '1px solid var(--color-olive)' }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-primary)';
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.borderColor = 'var(--color-olive)';
                      }}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                      />
                    </div>
                    <div className="p-8 text-center space-y-3">
                      <h3 className="text-2xl" style={{ color: 'var(--color-text)' }}>
                        {card.title}
                      </h3>
                      <div
                        className="inline-flex items-center text-sm font-semibold gap-1"
                        style={{ color: 'var(--color-primary)' }}
                      >
                        Explore the details ↗
                      </div>
                    </div>
                  </article>
                </Link>
              ))}
          </div>
        </div>
      </section>

        <section id="contacts" className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl px-6 py-10 sm:px-12" style={{ backgroundColor: 'var(--color-olive)' }}>
              <h2 className="text-2xl sm:text-3xl mb-4 text-center" style={{ color: 'var(--color-text)' }}>
                Begin your supported motherhood journey here!
              </h2>
              <div className="flex justify-center">
                <Link href="/consultation" className="btn-primary inline-flex px-6 py-3 text-base">
                  Book a Free Consultation
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
