import type { Config } from 'tailwindcss';

export default {
  content: ['./app/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'main': '#1E1E1E',
        'secondary': '#2E2E2E',
        'primary-text': '#FFFFFF',
        'secondary-text': '#B0B0B0',
        'accent': '#4DA1FF',
      },
    },
  },
  plugins: [],
} satisfies Config;
