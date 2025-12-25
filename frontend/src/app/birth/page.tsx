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

      <main className="pt-32">
        {/* Who Is a Birth Doula? Section */}
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: 'var(--color-text)' }}>
                  Who Is a Birth Doula?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  A birth doula is a trained support professional who provides emotional, informational, and physical support during pregnancy, labor, and birth.
                </p>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  She is not a medical provider — she is the steady, calming presence that helps a woman feel safe, confident, and deeply supported throughout the entire birth experience.
                </p>
            </div>
            <div className="space-y-4 rounded-3xl px-6 py-8" style={{ backgroundColor: 'var(--color-secondary)' }}>
              <ul className="space-y-3" style={{ color: 'var(--color-text)' }}>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>offers comfort techniques, positions, breathing, and grounding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>provides evidence-based information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>supports the partner and enhances teamwork</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>protects the emotional atmosphere</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>helps the woman feel seen, heard, and empowered</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>hold space, reduce fear, and strengthen your inner trust at every stage.</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Needs a Birth Doula? Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: 'var(--color-text)' }}>
                  Who Needs a Birth Doula?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  Having a birth doula is especially valuable for women who:
                </p>
                <ul className="space-y-3" style={{ color: 'var(--color-text)' }}>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want a more natural or low-intervention birth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want to feel calm, informed, and emotionally grounded</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>feel anxious, uncertain, or overwhelmed by the birth process</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want to rewrite her birth story after a negative experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want continuous care and steady presence — a holding hand and a whispering voice behind</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>have partners who also need reassurance, guidance, and support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>are preparing for a planned or medically-indicated cesarean birth and want the experience to be calm, respectful, and empowering</span>
                  </li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed font-semibold" style={{ color: 'var(--color-text)' }}>
                  …Ultimately, every woman deserves calm, continuous support - in every birth, in every circumstance!
                </p>
            </div>
            <div className="rounded-3xl overflow-hidden flex items-center justify-center" style={{ maxHeight: '600px', height: '100%' }}>
              <img src="/birth2.jpeg" alt="Birth support" className="max-w-full max-h-full object-contain rounded-3xl" />
            </div>
          </div>
        </section>

        {/* Benefits of Having a Birth Doula Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-center" style={{ color: 'var(--color-text)' }}>
              Benefits of Having a Birth Doula
            </h2>
            <p className="text-sm sm:text-base mb-8 text-center italic" style={{ color: 'var(--color-text)' }}>
              (Based on leading international research)
            </p>
            <div className="max-w-4xl mx-auto grid lg:grid-cols-2 gap-12">
              <div className="space-y-3">
                <p className="text-base sm:text-lg" style={{ color: 'var(--color-text)' }}>
                  <strong>25% shorter labors on average</strong>
                </p>
                <ul className="space-y-2" style={{ color: 'var(--color-text)' }}>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>28% reduction in cesarean births</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>12% higher chance of</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>31% less need for artificial oxytocin</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>9% less need for pain medication</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>10-15% reduced rates of epidural use</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>8-15% fewer operative deliveries (vacuum/forceps)</span>
                  </li>
                </ul>
              </div>
              <div className="space-y-3">
                <p className="text-base sm:text-lg font-semibold" style={{ color: 'var(--color-text)' }}>
                  Better outcomes for babies:
                </p>
                <ul className="space-y-2" style={{ color: 'var(--color-text)' }}>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>Higher Apgar scores</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>Reduced NICU admissions</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>More stable vital signs after birth</span>
                  </li>
                </ul>
                <ul className="space-y-2" style={{ color: 'var(--color-text)' }}>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>✔️</span>
                    <span>Better emotional experience</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>✔️</span>
                    <span>Stronger partner involvement</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>✔️</span>
                    <span>Improved breastfeeding and postpartum adjustment</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl px-6 py-10 sm:px-12" style={{ backgroundColor: 'var(--color-olive)' }}>
              <h2 className="text-2xl sm:text-3xl mb-4 text-center" style={{ color: 'var(--color-text)' }}>
                Step into your birth with calm, confidence, and a steady hand by your side!
              </h2>
              <p className="text-sm sm:text-base mb-6 text-center" style={{ color: 'var(--color-text)' }}>
                Explore Birth support packages and options
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

export default BirthPage;
