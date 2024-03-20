import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");
const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        secondary: {
          DEFAULT: '#7C3AED',
          '50': '#f3e8ff',
          '100': '#e9d5ff',
          '200': '#d8b4fe',
          '300': '#c084fc',
          '400': '#a855f7',
          '500': '#9333ea',
          '600': '#7e22ce',
          '700': '#6b21a8',
          '800': '#581c87',
          '900': '#4c1d95',
        }
      }
    }
  },
  plugins: [],
}
export default withMT(config);
