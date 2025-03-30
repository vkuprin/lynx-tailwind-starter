/** @type {import('@tailwindcss/postcss').Config} */
export default {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  presets: [require('@lynx-js/tailwind-preset-canary')],
  theme: {
    extend: {},
  },
  plugins: [],
};
