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
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        evie: ["var(--font-evie-sans)", "sans-serif"],
        evieCondensed: ["var(--font-evie-sans-condensed)", "sans-serif"],
      },
      fontWeight: {
        normal: '400',
        medium: '600',
        bold: '800',
      },
      height: {
        'scroller': '160px',
        'scroller-sm': '120px',
      },
      width: {
        '1/8': '12.5%',
        '1/9': '11.1111111%',
        '1/10': '10%',
        'scroller': '2765px',
        'scroller-sm': '2073px',
      },
      animation: {
        'scroll-horizontal': 'scroll-horizontal 60s linear infinite',
        'scroll-horizontal-sm': 'scroll-horizontal 120s linear infinite',
      },
      keyframes: {
        'scroll-horizontal': {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
