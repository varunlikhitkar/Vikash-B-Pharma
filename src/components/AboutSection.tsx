import { BadgeCheck, CircleSlash2, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { profile } from '../data/profile';

export default function AboutSection() {
  return (
    <SectionShell
      id="about"
      eyebrow="About / Objective"
      title="A focused objective with a premium presentation"
      description="The career objective is framed as a polished statement card, paired with subtle hierarchy and modern visual accents for a refined resume-to-portfolio transition."
    >
      <div className="grid gap-6 lg:grid-cols-[1.05fr_0.95fr]">
        <motion.div whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl sm:p-8">
          <div className="flex items-center gap-3 text-amber-200">
            <BadgeCheck size={18} />
            <span className="text-sm font-semibold uppercase tracking-[0.3em]">Career Objective</span>
          </div>
          <p className="mt-5 text-base leading-8 text-white/75 sm:text-lg">{profile.objective}</p>
        </motion.div>

        <div className="grid gap-4 sm:grid-cols-2">
          {[
            { icon: Sparkles, title: 'Professional', copy: 'Elegant presentation with a future-ready healthcare tone.' },
            { icon: CircleSlash2, title: 'Focused', copy: 'Built around pharmacy knowledge, support, and patient care.' },
          ].map((item) => (
            <motion.div
              key={item.title}
              whileHover={{ y: -4, scale: 1.01 }}
              className="rounded-[1.5rem] border border-white/10 bg-gradient-to-br from-white/8 to-white/5 p-5 backdrop-blur-xl"
            >
              <item.icon className="text-amber-200" size={20} />
              <h3 className="mt-4 text-lg font-semibold text-white">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-white/65">{item.copy}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionShell>
  );
}