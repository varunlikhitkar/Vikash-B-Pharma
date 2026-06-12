import { lazy, Suspense, useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowDownRight, FileDown, Mail, PhoneCall, Sparkles } from 'lucide-react';
import { profile } from '../data/profile';

const ThreeScene = lazy(() => import('./ThreeScene'));

function HeroTiltCard() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useTransform(y, [-0.5, 0.5], [10, -10]);
  const rotateY = useTransform(x, [-0.5, 0.5], [-12, 12]);
  const springX = useSpring(rotateX, { stiffness: 120, damping: 18, mass: 0.8 });
  const springY = useSpring(rotateY, { stiffness: 120, damping: 18, mass: 0.8 });

  return (
    <motion.div
      onMouseMove={(event) => {
        const bounds = event.currentTarget.getBoundingClientRect();
        const offsetX = (event.clientX - bounds.left) / bounds.width - 0.5;
        const offsetY = (event.clientY - bounds.top) / bounds.height - 0.5;
        x.set(offsetX);
        y.set(offsetY);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ perspective: 1200, rotateX: springX, rotateY: springY }}
      className="relative mx-auto w-full max-w-md"
    >
      <div className="absolute inset-0 rounded-[2rem] bg-gradient-to-br from-amber-400/30 via-transparent to-violet-400/30 blur-3xl" />
      <motion.div
        initial={{ opacity: 0, y: 18 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/8 p-4 shadow-panel backdrop-blur-2xl"
      >
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-amber-300/70 to-transparent" />
        <div className="absolute -right-20 -top-24 h-56 w-56 rounded-full bg-amber-300/18 blur-3xl" />
        <div className="absolute -left-12 bottom-0 h-52 w-52 rounded-full bg-violet-500/18 blur-3xl" />
        <div className="relative overflow-hidden rounded-[1.5rem] border border-white/10 bg-[#0c1224] p-3">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.12),_transparent_42%)]" />
          <img
            src="/profile.png"
            alt="Vikash Pawar portrait"
            className="relative z-10 aspect-[4/5] w-full rounded-[1.25rem] object-cover object-top shadow-2xl"
          />
          <div className="absolute bottom-5 left-5 z-20 rounded-full border border-amber-300/20 bg-black/45 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100 backdrop-blur-xl">
            Luxury Profile
          </div>
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Title</p>
            <p className="mt-1 text-sm font-semibold text-white">{profile.role}</p>
          </div>
          <div className="rounded-2xl border border-white/10 bg-white/5 px-4 py-3">
            <p className="text-xs uppercase tracking-[0.28em] text-white/45">Focus</p>
            <p className="mt-1 text-sm font-semibold text-white">{profile.secondaryRole}</p>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default function Hero() {
  const [showScene, setShowScene] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(min-width: 1024px) and (prefers-reduced-motion: no-preference)');

    const update = () => setShowScene(mediaQuery.matches);
    update();

    mediaQuery.addEventListener('change', update);
    return () => mediaQuery.removeEventListener('change', update);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-10 sm:pt-16">
      {showScene ? (
        <Suspense fallback={null}>
          <ThreeScene />
        </Suspense>
      ) : null}
      <div className="absolute inset-0 -z-20 bg-hero-radial" />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(to_bottom,rgba(5,8,22,0.2),rgba(5,8,22,0.95)),radial-gradient(circle_at_top,_rgba(250,204,21,0.12),_transparent_30%)]" />

      <div className="mx-auto grid w-full max-w-7xl gap-14 px-4 pb-20 sm:px-6 lg:grid-cols-[1.08fr_0.92fr] lg:px-8 lg:pb-28">
        <div className="relative flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-amber-300/20 bg-white/5 px-4 py-2 text-xs font-semibold uppercase tracking-[0.32em] text-amber-100 backdrop-blur-xl"
          >
            <Sparkles size={14} />
            Premium Pharmacy Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
            className="font-display max-w-4xl text-5xl font-black leading-none tracking-tight text-white sm:text-6xl lg:text-7xl"
          >
            {profile.name}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.16 }}
            className="mt-6 max-w-2xl text-base leading-8 text-white/70 sm:text-lg"
          >
            A polished, modern personal portfolio for a motivated B.Pharm student with hospital pharmacy exposure, designed with cinematic depth, soft glow, and smooth motion.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.22 }}
            className="mt-7 flex flex-wrap gap-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-to-r from-amber-300 to-yellow-500 px-5 py-3 text-sm font-semibold text-black shadow-glow transition hover:-translate-y-0.5"
            >
              Contact Me
              <ArrowDownRight size={16} />
            </a>
            <a
              href="/Vikash_Pawar_Resume.pdf"
              download
              className="inline-flex items-center gap-2 rounded-full border border-white/12 bg-white/6 px-5 py-3 text-sm font-semibold text-white transition hover:border-amber-300/30 hover:bg-white/10"
            >
              Download Resume
              <FileDown size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.28 }}
            className="mt-8 flex flex-wrap gap-3"
          >
            {['B.Pharm Student', 'Hospital Pharmacist', 'Healthcare Focus', 'Professional Growth'].map((item) => (
              <span key={item} className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-white/80 backdrop-blur-xl">
                {item}
              </span>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.34 }}
            className="mt-8 grid gap-3 sm:grid-cols-3"
          >
            {[
              { icon: PhoneCall, label: 'Mobile', value: profile.mobile, href: `tel:${profile.mobile}` },
              { icon: Mail, label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
              { icon: ArrowDownRight, label: 'Location', value: 'Bhopal, India', href: '#contact' },
            ].map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="group rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-xl transition hover:-translate-y-1 hover:border-amber-300/20 hover:bg-white/8 flex flex-col items-start min-w-0 w-full"
              >
                <item.icon size={18} className="text-amber-200" />
                <p className="mt-3 text-xs uppercase tracking-[0.32em] text-white/45">{item.label}</p>
                <p className="mt-1 text-sm font-medium text-white/85 transition group-hover:text-white break-all whitespace-normal max-w-full">{item.value}</p>
              </a>
            ))}
          </motion.div>
        </div>

        <div className="relative flex items-center lg:justify-end">
          <HeroTiltCard />
        </div>
      </div>
    </section>
  );
}