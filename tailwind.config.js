/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      boxShadow: {
        dreambill: '0px 4px 16px 0px rgba(8, 92, 96, 0.14)'
      },
      colors: {
        dreambill: '#085C60'
      }
    }
  },
  plugins: []
};
