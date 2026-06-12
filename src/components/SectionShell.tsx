import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

type SectionShellProps = {
  id: string;
  eyebrow: string;
  title: string;
  description: string;
  children: ReactNode;
  className?: string;
};

export default function SectionShell({ id, eyebrow, title, description, children, className = '' }: SectionShellProps) {
  return (
    <section id={id} className={`relative scroll-mt-28 py-20 sm:py-24 ${className}`}>
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.7, ease: 'easeOut' }}
          className="mb-10 max-w-3xl"
        >
          <p className="mb-3 text-sm font-semibold uppercase tracking-[0.35em] text-amber-300/80">{eyebrow}</p>
          <h2 className="font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">{title}</h2>
          <p className="mt-4 text-sm leading-7 text-white/66 sm:text-base">{description}</p>
        </motion.div>
        {children}
      </div>
    </section>
  );
}