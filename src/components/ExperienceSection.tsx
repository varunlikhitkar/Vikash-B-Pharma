import { BriefcaseBusiness, Syringe } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { profile } from '../data/profile';

export default function ExperienceSection() {
  return (
    <SectionShell
      id="experience"
      eyebrow="Experience"
      title="A polished hospital pharmacy experience card"
      description="The layout emphasizes responsibility, support, and trust, with compact bullets that stay readable on mobile and desktop."
    >
      <motion.div whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl sm:p-8">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-amber-200/80">
              <BriefcaseBusiness size={16} />
              Work Experience
            </p>
            <h3 className="mt-4 text-2xl font-semibold text-white">{profile.experience.title}</h3>
            <p className="mt-2 text-white/70">{profile.experience.note}</p>
          </div>
          <div className="rounded-full border border-amber-300/20 bg-amber-300/10 px-4 py-2 text-sm font-medium text-amber-100">
            Hospital Pharmacy
          </div>
        </div>

        <div className="mt-7 grid gap-4 sm:grid-cols-2">
          {profile.experience.bullets.map((bullet) => (
            <div key={bullet} className="flex gap-3 rounded-2xl border border-white/8 bg-black/15 px-4 py-4 text-sm leading-7 text-white/75">
              <Syringe size={18} className="mt-1 shrink-0 text-amber-200" />
              <span>{bullet}</span>
            </div>
          ))}
        </div>
      </motion.div>
    </SectionShell>
  );
}