import { GraduationCap, Landmark } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { profile } from '../data/profile';

export default function EducationSection() {
  return (
    <SectionShell
      id="education"
      eyebrow="Education"
      title="Academic foundation with a clean timeline feel"
      description="The education section is presented as a premium timeline card so the institution and degree remain easy to scan on every screen size."
    >
      <div className="relative border-l border-white/10 pl-6 sm:pl-8">
        {profile.education.map((item) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.6 }}
            className="relative rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl sm:p-8"
          >
            <div className="absolute -left-[2.2rem] top-8 grid h-11 w-11 place-items-center rounded-full border border-amber-300/20 bg-[#0f1328] text-amber-200 shadow-glow">
              <GraduationCap size={18} />
            </div>
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div>
                <p className="flex items-center gap-2 text-sm uppercase tracking-[0.3em] text-amber-200/80">
                  <Landmark size={16} />
                  Education
                </p>
                <h3 className="mt-4 text-2xl font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-base text-white/75">{item.institution}</p>
              </div>
            </div>
            <p className="mt-5 max-w-3xl text-sm leading-7 text-white/65 sm:text-base">{item.note}</p>
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}