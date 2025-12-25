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

      <main className="pt-32">
        {/* Who Is a Postpartum Doula? Section */}
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: 'var(--color-text)' }}>
                  Who Is a Postpartum Doula?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  A postpartum doula is a trained support professional who helps a new mother and her family adjust, heal, and thrive during the first weeks after birth. She provides emotional, informational, and hands-on support, creating a calm, nurturing environment where the mother feels cared for, confident, and never alone.
                </p>
            </div>
            <div className="space-y-4 rounded-3xl px-6 py-8" style={{ backgroundColor: 'var(--color-secondary)' }}>
              <ul className="space-y-3" style={{ color: 'var(--color-text)' }}>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>supports the mother's physical and emotional healing</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>guides newborn care with evidence-based information</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>helps establish breastfeeding or bottle-feeding</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>ensures safe sleep practices and soothing techniques</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>cares for the baby so the mother can rest</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>supports household flow so the family can feel balanced</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>protects the emotional atmosphere and reduces overwhelm</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>helps the mother feel seen, heard, validated, and supported</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* Who Needs a Postpartum Doula? Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="space-y-6">
                <h2 className="text-3xl sm:text-4xl lg:text-5xl" style={{ color: 'var(--color-text)' }}>
                  Who Needs a Postpartum Doula?
                </h2>
                <p className="text-base sm:text-lg leading-relaxed" style={{ color: 'var(--color-text)' }}>
                  Having a postpartum doula is especially valuable for families who:
                </p>
                <ul className="space-y-3" style={{ color: 'var(--color-text)' }}>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want the postpartum period to feel peaceful, organized, and emotionally supported</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want gentle, continuous guidance in the early weeks after birth</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>feel anxious, exhausted, or overwhelmed</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want to recover physically and emotionally with support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want help with breastfeeding, pumping, or bottle-feeding</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>need a safe, calm professional to care for the newborn at night</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>want to sleep and restore their strength</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>are welcoming their first baby and want confident, evidence-based support</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>have toddlers or older children who also need love and attention</span>
                  </li>
                  <li className="flex items-start">
                    <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                    <span>had a cesarean birth and need help with mobility, healing, and rest</span>
                  </li>
                </ul>
                <p className="text-base sm:text-lg leading-relaxed font-semibold" style={{ color: 'var(--color-text)' }}>
                  …In truth, every mother and every new family deserves and truly benefits from steady, compassionate postpartum support!
                </p>
            </div>
            <div className="rounded-3xl overflow-hidden flex items-center justify-center" style={{ maxHeight: '600px', height: '100%' }}>
              <img src="/postpartum1.jpg" alt="Postpartum support" className="max-w-full max-h-full object-contain rounded-3xl" />
            </div>
          </div>
        </section>

        {/* Benefits of Having a Postpartum Doula Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl mb-8 text-center" style={{ color: 'var(--color-text)' }}>
              Benefits of Having a Postpartum Doula
            </h2>
            <p className="text-sm sm:text-base mb-8 text-center italic" style={{ color: 'var(--color-text)' }}>
              (Based on international research)
            </p>
            <div className="max-w-4xl mx-auto space-y-3">
              <ul className="space-y-2" style={{ color: 'var(--color-text)' }}>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>31% lower risk of postpartum depression and anxiety</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>40% better sleep for the mother in the first weeks</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Faster physical recovery after vaginal or cesarean birth</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>34% higher breastfeeding success and fewer feeding challenges</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>Calmer babies with more stable sleep and feeding patterns</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>20–25% fewer NICU readmissions related to feeding and early care</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>More confident partners and smoother family adjustment</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3" style={{ color: 'var(--color-primary)' }}>•</span>
                  <span>A more peaceful, supported, and positive postpartum experience</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl px-6 py-10 sm:px-12" style={{ backgroundColor: 'var(--color-olive)' }}>
              <h2 className="text-2xl sm:text-3xl mb-4 text-center" style={{ color: 'var(--color-text)' }}>
                Let us cradle your family as you rediscover your rhythm!
              </h2>
              <p className="text-sm sm:text-base mb-6 text-center" style={{ color: 'var(--color-text)' }}>
                Explore Postpartum Support packages and options
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

export default PostpartumPage;
