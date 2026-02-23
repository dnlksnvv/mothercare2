'use client';

import { useState } from 'react';
import Navigation from '@/components/Navigation';
import AIAssistant from '@/components/AIAssistant';
import Footer from '../../components/Footer';

type TeamMember = {
  name: string;
  role: string;
  bio: string;
  image: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Zhanna – The Ocean',
    role: 'Birth & Postpartum Doula · Dancing for Birth Instructor · Russian • English',
    bio: 'Zhanna is the ocean – calm at the surface, powerful at the core. A mother of three with personal experience of both cesarean and VBAC births, she understands how vulnerable and transformative this journey can be. In birth, she is rhythm and anchor, a presence that steadies the wave and helps women trust their strength and move through labour with confidence. In postpartum, she becomes the warm tide – protective, gentle, and watchful, safeguarding rest, supporting recovery, nurturing bonding, and creating emotional calm in the earliest days of motherhood. With her, mothers feel powerful, supported, and never alone.',
    image: '/team1.jpg',
  },
  {
    name: 'Tonya – The Light',
    role: 'Certified Birth & Postpartum Doula · Russian • English',
    bio: 'Tonya is a steady light – calm, clear, and reassuring. A mother of two daughters with experience supporting newborns with special needs, she brings both deep compassion and attentive awareness into every family she serves. In birth, she offers quiet structure, practical guidance, and a composed presence when decisions feel overwhelming. In postpartum, she becomes dependable support and thoughtful guidance, helping families establish rhythms and navigate additional needs with sensitivity so that everything feels more manageable, settled, and bright.',
    image: '/team2.jpg',
  },
  {
    name: 'Anya – The Earth',
    role: 'Certified Birth & Postpartum Doula · Russian • English',
    bio: 'Anya is the feeling of home – warm and deeply grounding. A mother of two sons and a specialist in early childhood education, she brings both maternal wisdom and professional insight into every family she supports. In birth, she is steady ground beneath your feet – a calm presence that centers the room and offers quiet reassurance when strength feels tested. In postpartum, she becomes shelter and stability, supporting newborn care, recovery, and emotional reassurance so mothers feel safe, confident, and deeply supported.',
    image: '/team3.jpg',
  },
  {
    name: 'Albina – The Moon',
    role: 'Certified Birth & Postpartum Doula · Russian • English',
    bio: 'Albina is the quiet depth beneath the surface. A mother of three and a specialist in hypnosis, she understands how deeply the subconscious mind influences a woman’s experience of birth and motherhood. In birth, she supports through grounding techniques, focused relaxation, and emotional reassurance, helping mother and baby move through the experience in calm connection. In postpartum, she holds space for emotional recovery while supporting baby’s gentle transition into the world, creating an atmosphere of safety and emotional balance for both.',
    image: '/team4.jpg',
  },
];

const TeamCard = ({ member }: { member: TeamMember }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="rounded-3xl overflow-hidden shadow-card flex flex-col"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="w-full aspect-[3/4] overflow-hidden">
        <img src={member.image} alt={member.name} className="w-full h-full object-cover" />
      </div>
      <div className="p-6 space-y-3 flex-1 flex flex-col">
        <h2 className="text-2xl" style={{ color: 'var(--color-text)' }}>
          {member.name}
        </h2>
        <p className="text-sm uppercase tracking-wide" style={{ color: 'var(--color-primary)' }}>
          {member.role}
        </p>
        {expanded && (
          <p className="text-sm leading-relaxed" style={{ color: 'var(--color-text)' }}>
            {member.bio}
          </p>
        )}
        <button
          type="button"
          onClick={() => setExpanded((prev) => !prev)}
          className="mt-2 text-sm font-semibold self-start underline underline-offset-4"
          style={{ color: 'var(--color-primary)' }}
        >
          {expanded ? 'Hide story' : 'Read full story'}
        </button>
      </div>
    </div>
  );
};

const TeamPage = () => {
  return (
    <div style={{ backgroundColor: 'var(--color-background)' }}>
      <Navigation />
      <AIAssistant />

      <main className="pt-24">
        <section className="section-padding">
          <div className="container-custom px-4 sm:px-6 lg:px-8 columns-1 md:columns-2 xl:columns-3 gap-8">
            {teamMembers.map((member) => (
              <div key={member.name} className="mb-8 break-inside-avoid">
                <TeamCard member={member} />
              </div>
            ))}
          </div>
        </section>

        <section className="section-padding pt-0">
          <div className="container-custom px-4 sm:px-6 lg:px-8">
            <div className="rounded-3xl px-6 py-10 sm:px-12" style={{ backgroundColor: 'var(--color-olive)' }}>
              <h2 className="text-2xl sm:text-3xl mb-4 text-center" style={{ color: 'var(--color-text)' }}>
                Begin your supported motherhood journey here!
              </h2>
              <div className="flex justify-center">
                <a href="/consultation" className="btn-primary inline-flex px-6 py-3 text-base">
                  Book a Free Consultation
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default TeamPage;

