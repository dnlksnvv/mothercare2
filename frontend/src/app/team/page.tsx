'use client';

import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import Footer from '../../components/Footer';

const teamMembers = [
  {
    name: 'Isabella Reyes',
    role: 'Founder · Lead Birth Doula',
    bio: 'A doula of 12 years, Isabella carries a calm presence and a love for blending mindful breathwork with evidence-based care. Her passion is helping families feel seen, heard, and empowered.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Mei Chen',
    role: 'Postpartum Specialist · Herbalist',
    bio: 'Mei curates personalized nourishment plans, traditional healing practices, and restorative rituals for the fourth trimester. She delights in creating soothing spaces for bonding and recovery.',
    image: 'https://images.unsplash.com/photo-1544723795-43253781bec0?auto=format&fit=crop&w=1200&q=80',
  },
  {
    name: 'Amara Thompson',
    role: 'Family Coach · Beyond Services Mentor',
    bio: 'With a background in education and perinatal mental health, Amara guides parents through transitions—welcoming siblings, redefining routines, and celebrating milestones with intention.',
    image: 'https://images.unsplash.com/photo-1544723795-3fb635a5b67a?auto=format&fit=crop&w=1200&q=80',
  },
];

const TeamPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <AIAssistant />

      <main className="pt-24">
        <section
          className="relative flex items-center"
          style={{
            minHeight: '320px',
            backgroundImage:
              "linear-gradient(rgba(228, 175, 163, 0.58), rgba(251, 249, 246, 0.9)), url('https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1600&q=80')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <div className="container-custom px-4 sm:px-6 lg:px-8 py-16">
            <h1 className="text-4xl sm:text-5xl" style={{ color: 'var(--color-text)' }}>
              Meet the Hearts Behind DoulaDoo
            </h1>
            <p className="mt-4 text-base max-w-3xl" style={{ color: 'var(--color-text)' }}>
              We are a circle of doulas, educators, and nurturers devoted to holding space for every mother’s story.
            </p>
          </div>
        </section>

        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 grid gap-10 md:grid-cols-2 xl:grid-cols-3">
            {teamMembers.map((member) => (
              <div
                key={member.name}
                className="rounded-3xl overflow-hidden shadow-card"
                style={{ backgroundColor: 'var(--color-secondary)' }}
              >
                <div className="h-72 w-full" style={{ overflow: 'hidden' }}>
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-6 space-y-3" style={{ backgroundColor: 'var(--color-background)' }}>
                  <h2 className="text-2xl" style={{ color: 'var(--color-text)' }}>
                    {member.name}
                  </h2>
                  <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--color-primary)' }}>
                    {member.role}
                  </p>
                  <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl px-6 py-10 sm:px-12" style={{ backgroundColor: 'var(--color-olive)' }}>
              <h2 className="text-2xl sm:text-3xl mb-4" style={{ color: 'var(--color-text)' }}>
                Let’s begin your story together.
              </h2>
              <p className="text-base leading-relaxed mb-6" style={{ color: 'var(--color-text)' }}>
                Meet with our team to craft a circle of support tailored to your hopes, your rhythm, and your family.
              </p>
              <a href="mailto:love@douladoo.com" className="btn-secondary inline-flex px-6 py-3 text-base">
                Write to Us
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;

