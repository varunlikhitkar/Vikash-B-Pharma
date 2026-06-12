import { PenLine } from 'lucide-react';
import { motion } from 'framer-motion';
import SectionShell from './SectionShell';
import { profile } from '../data/profile';

export default function DeclarationSection() {
  return (
    <SectionShell
      id="declaration"
      eyebrow="Declaration"
      title="A professional declaration card"
      description="The declaration closes the portfolio with a formal, polished presentation that mirrors a high-end resume layout."
    >
      <motion.div whileHover={{ y: -4 }} className="rounded-[1.75rem] border border-white/10 bg-white/6 p-6 shadow-panel backdrop-blur-xl sm:p-8">
        <div className="flex items-center gap-3 text-amber-200">
          <PenLine size={18} />
          <span className="text-sm font-semibold uppercase tracking-[0.3em]">Declaration</span>
        </div>
        <p className="mt-5 max-w-4xl text-sm leading-8 text-white/75 sm:text-base">{profile.declaration}</p>

        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Date</p>
            <div className="mt-3 h-px w-full bg-white/15" />
          </div>
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-white/45">Signature</p>
            <div className="mt-3 h-px w-full bg-white/15" />
            <p className="mt-3 text-sm text-white/75">{profile.signature}</p>
          </div>
        </div>
      </motion.div>
    </SectionShell>
  );
}