import { motion } from 'framer-motion';
import { BarChart3, Cpu, MessageSquareMore, Users, Clock3 } from 'lucide-react';
import SectionShell from './SectionShell';
import { profile } from '../data/profile';

const skillIcons = [Cpu, BarChart3, MessageSquareMore, Users, Clock3];

export default function SkillsSection() {
  return (
    <SectionShell
      id="skills"
      eyebrow="Skills"
      title="Interactive skill cards with a luxury UI rhythm"
      description="A mix of chips and visual progress bars adds motion and depth while remaining lightweight and easy to edit."
    >
      <div className="grid gap-5 lg:grid-cols-2">
        {profile.skills.map((skill, index) => {
          const Icon = skillIcons[index % skillIcons.length];
          return (
            <motion.article
              key={skill.label}
              whileHover={{ y: -6, scale: 1.01 }}
              className="rounded-[1.5rem] border border-white/10 bg-white/6 p-5 shadow-panel backdrop-blur-xl"
            >
              <div className="flex items-center justify-between gap-4">
                <div className="flex items-center gap-3">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl border border-white/10 bg-black/20 text-amber-200">
                    <Icon size={18} />
                  </span>
                  <div>
                    <h3 className="text-base font-semibold text-white">{skill.label}</h3>
                    <p className="text-sm text-white/50">Visual strength indicator</p>
                  </div>
                </div>
                <span className="rounded-full border border-amber-300/20 bg-amber-300/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.26em] text-amber-100">
                  {skill.level}%
                </span>
              </div>
              <div className="mt-5 h-2 overflow-hidden rounded-full bg-white/10">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${skill.level}%` }}
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.9, ease: 'easeOut' }}
                  className="h-full rounded-full bg-gradient-to-r from-amber-300 via-yellow-400 to-violet-400"
                />
              </div>
            </motion.article>
          );
        })}
      </div>
    </SectionShell>
  );
}