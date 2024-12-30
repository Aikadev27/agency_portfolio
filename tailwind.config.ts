import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {

      colors: {
        'dark_accent': '#EF6D58',
        'dark_gray': '#391400',
        'dark': '#391400',
        'light': '#FFFFFF',
        'light_accent': '#EF6D58',
        'light_gray': '#FFFFFF',
        'primary_btn_bg': 'var(--primary-btn-bg)',
        'secondary_btn_bg': 'var(--secondary-btn-bg)',
        'primary_btn_text': 'var(--primary-btn-text)',
        'secondary_btn_text': 'var(--secondary-btn-text)',
      },
    },
  },
  plugins: [],
} satisfies Config;
