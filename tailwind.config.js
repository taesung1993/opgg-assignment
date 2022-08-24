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
        opgg: '#1ea1f7',
        'bluey-green': '#2daf7f',
        'yellow-ochre': '#e19205',
        'warm-grey': '#979797',
        'ocean-blue': '#04609e',
        'dull-orange': '#ca9a2c',
        greyish: '#b6b6b6',
        'greyish-two': '#a7a7a7',
        'greyish-three': '#e3e3e3',
        'greyish-four': '#9c9c9c',
        border: '#d0d3d4',
        'shimmer-1': 'rgba(255, 255, 255, 0)',
        'shimmer-2': 'rgba(255, 255, 255, 0.2) 20%',
        'shimmer-3': 'rgba(255, 255, 255, 0.2) 60%'
      }
    },
    fontFamily: {
      apple: ['AppleSDGothicNeo', 'Noto Sans KR', 'sans-serif'],
      sans: ['Helvetica', 'Arial', 'sans-serif'],
      nanum: ['NanumBarunGothic', 'sans-serif']
    }
  },
  plugins: []
};
