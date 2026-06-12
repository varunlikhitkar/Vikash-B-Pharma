import { Globe2 } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { profile } from '../data/profile';

export default function LanguagesSection() {
  return (
    <SectionShell
      id="languages"
      eyebrow="Languages"
      title="Elegant language pills with a quiet premium finish"
      description="Simple, stylish cards keep the language list readable while preserving the portfolio's cinematic tone."
    >
      <div className="flex flex-wrap gap-4">
        {profile.languages.map((language, index) => (
          <motion.div
            key={language}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
            className="inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/6 px-5 py-3 text-sm font-medium text-white/85 backdrop-blur-xl"
          >
            <Globe2 size={16} className="text-amber-200" />
            {language}
          </motion.div>
        ))}
      </div>
    </SectionShell>
  );
}