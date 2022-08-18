/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      maxWidth: {
        opgg: '1000px'
      },
      height: {
        header: '6.0625rem'
      },
      colors: {
        opgg: '#1ea1f7'
      }
    },
    fontFamily: {
      apple: ['AppleSDGothicNeo', 'Noto Sans KR', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif']
    }
  },
  plugins: []
};
