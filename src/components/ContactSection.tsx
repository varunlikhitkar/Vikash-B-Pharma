import { Mail, MapPin, PhoneCall, BadgeCheck, FileDown } from 'lucide-react';
import SectionShell from './SectionShell';
import { profile } from '../data/profile';
import { motion } from 'framer-motion';

export default function ContactSection() {
  const cards = [
    { icon: PhoneCall, label: 'Phone', value: profile.mobile, href: `tel:${profile.mobile}` },
    { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
    { icon: MapPin, label: 'Address', value: profile.address, href: '#' },
  ];

  return (
    <SectionShell
      id="contact"
      eyebrow="Personal Details / Contact"
      title="Clear, clickable contact information"
      description="The contact area combines utility and presentation, with direct phone/email actions and a strong resume download call-to-action."
    >
      <div className="grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
          {cards.map((card) => (
            <motion.a
              key={card.label}
              href={card.href}
              whileHover={{ y: -4 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 shadow-panel backdrop-blur-xl transition hover:border-amber-300/20 hover:bg-white/8 sm:p-6 flex flex-col items-start min-w-0"
            >
              <card.icon size={18} className="text-amber-200" />
              <p className="mt-4 text-xs uppercase tracking-[0.3em] text-white/45">{card.label}</p>
              <p className="mt-2 text-sm leading-7 text-white/82 break-words whitespace-normal max-w-full">{card.value}</p>
            </motion.a>
          ))}
        </div>

        <motion.div whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-amber-300/18 bg-gradient-to-br from-amber-300/12 via-white/6 to-violet-500/12 p-6 shadow-panel backdrop-blur-xl sm:p-8">
          <div className="flex items-center gap-3 text-amber-100">
            <BadgeCheck size={18} />
            <span className="text-sm font-semibold uppercase tracking-[0.3em]">Action</span>
          </div>
          <h3 className="mt-4 text-2xl font-semibold text-white">Ready for professional opportunities</h3>
          <p className="mt-4 text-sm leading-7 text-white/70">
            Connect directly by phone or email, or download the resume to review the profile in a concise format.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a href="/Vikash_Pawar_Resume.pdf" download className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-semibold text-black transition hover:-translate-y-0.5">
              Download Resume
              <FileDown size={16} />
            </a>
            <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-black/15 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/25 hover:bg-white/10">
              Contact Me
              <Mail size={16} />
            </a>
          </div>
        </motion.div>
      </div>
    </SectionShell>
  );
}