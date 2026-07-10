import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // New 2026 brand palette
        'navy': '#1B2A4A',
        'navy-deep': '#14213B',
        'navy-soft': '#22345A',
        'cream': '#F8F4EE',
        'cream-dim': '#E9E2D6',
        'gold': '#C9A84C',
        'gold-soft': '#D8BD6A',
        'ink': '#1C2438',
      },
      fontFamily: {
        // Display — Gloock (headlines, hero tagline, stat numerals)
        heading: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        display: ['var(--font-display)', 'Georgia', 'Times New Roman', 'serif'],
        // Body — Lora (paragraphs, positioning, quotes)
        sans: ['var(--font-body)', 'Georgia', 'serif'],
        body: ['var(--font-body)', 'Georgia', 'serif'],
        // Utility — Instrument Sans (eyebrows, labels, nav, buttons, tags)
        util: ['var(--font-util)', 'system-ui', '-apple-system', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '2px',
        sm: '2px',
        md: '3px',
        lg: '3px',
        xl: '3px',
      },
      backgroundImage: {
        'hero-gradient':
          'radial-gradient(120% 90% at 82% 8%, #24365e 0%, rgba(36,54,94,0) 55%), linear-gradient(180deg, #1B2A4A 0%, #14213B 100%)',
        'cta-gradient':
          'radial-gradient(100% 120% at 15% 100%, #24365e 0%, rgba(36,54,94,0) 60%), linear-gradient(180deg, #1B2A4A 0%, #1B2A4A 100%)',
      },
    },
  },
  plugins: [],
};

export default config;
