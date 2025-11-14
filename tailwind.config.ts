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
        'navy-deep': '#0A1628',
        'navy-medium': '#1A2332',
        'charcoal': '#1E2530',
        'cyan-primary': '#00D9FF',
        'gold-accent': '#FFB800',
        'text-primary': '#E8E9ED',
        'text-secondary': '#A0A4B0',
        'text-muted': '#6B7280',
        'border-subtle': 'rgba(255, 255, 255, 0.1)',
        'border-medium': 'rgba(255, 255, 255, 0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'sans-serif'],
        heading: ['Space Grotesk', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Courier New', 'monospace'],
      },
      backgroundImage: {
        'cyan-glow': 'radial-gradient(circle, rgba(0, 217, 255, 0.2) 0%, transparent 70%)',
      },
      boxShadow: {
        'cyan-glow': '0 0 20px rgba(0, 217, 255, 0.2)',
        'cyan-glow-lg': '0 0 30px rgba(0, 217, 255, 0.2), 0 4px 12px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
};

export default config;
