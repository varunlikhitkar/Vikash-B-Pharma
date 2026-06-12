/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      boxShadow: {
        glow: '0 0 50px rgba(245, 158, 11, 0.18)',
        panel: '0 20px 80px rgba(0, 0, 0, 0.45)',
      },
      backgroundImage: {
        'hero-radial': 'radial-gradient(circle at top, rgba(250, 204, 21, 0.15), transparent 34%), radial-gradient(circle at right, rgba(168, 85, 247, 0.16), transparent 24%)',
      },
      fontFamily: {
        display: ['"Inter Tight"', 'ui-sans-serif', 'system-ui'],
        body: ['"Inter"', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
};