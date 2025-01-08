import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./layouts/**/*.{js,ts,jsx,tsx,mdx}", // Nếu MainLayout nằm trong thư mục layouts
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
        'primary_section_bg': '#28293E',
        'secondary_section_bg': '#fdf0e9',
        'secondary_section_border': '#F3D1BF',
        'clr_responsive_panel': '#04052e',
        'clr_primary_purple': '#B550F6',

      },
    },
  },
  plugins: [],
} satisfies Config;
