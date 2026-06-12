import { profile } from '../data/profile';

export default function Footer() {
  return (
    <footer className="border-t border-white/10 bg-black/20 py-8">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-2 px-4 text-center text-sm text-white/55 sm:px-6 lg:px-8">
        <p className="font-semibold text-white/80">{profile.name}</p>
        <p>{profile.role} · Elegant, responsive, and performance-conscious portfolio</p>
      </div>
    </footer>
  );
}