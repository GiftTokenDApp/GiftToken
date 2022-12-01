/** @type {import('tailwindcss').Config} */ 
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        whiteBg: '#F5F5F5',
        lightBlack: '#2A3142',
        darkerGray: '#3E465B',
        darkGray: '#4E5873',
        blueGray: '#5F6B8C',
        lightTurquoise: '#A0D8E0',
        lighterTurquoise: '#B6DDE3',
        lightPurple: '#CFC0E9',
        lighterPurple: '#DED3F2',
        winePurple: '#6336B2',
        lightGrey: '#F3F2F5',
        darkGrey: '#D5D2D9',
        darkerGrey: '#BCBABF',
        blackGrey: '#636266',
        darkRed: '#C54C62',
        flesh: '#F2DADE',
        gtDarkBlue: '#003049',
        gtRed: '#D62828',
        gtOrange: '#F77F00',
        gtYellow: '#FCBF49',
        gtCamel: '#EAE2B7',
        gtCardBg: '#2C3333',
        gtCardLightBLue: '#a5c9ca',
        backdropBlack: '#0000006c',
      },
      fontFamily: {
        poppinsLight: ["PoppinsLight", "sans-serif"],
        poppinsRegular: ["PoppinsRegular", "sans-serif"],
        poppinsSemiBold: ["PoppinsSemiBold", "sans-serif"],
        poppinsBold: ["PoppinsBold", "sans-serif"],
      },
      boxShadow: {
        'shadowBox': '0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23)',
        'shadowBoxHover': '0 10px 10px rgba(0, 0, 0, 0.25), 0 5px 5px rgba(0, 0, 0, 0.22)',
        'countdownBarShadowBox': '0 1px 5px #000, 0 1px 0 #444',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      fontSize: {
        'h1': ['30px', {
          lineHeight: '45px',
        }],
        'h1-md': ['48px', {
          lineHeight: '72px',
        }],
        'h2': ['24px', {
          lineHeight: '36px',
        }],
        'h2-md': ['32px', {
          lineHeight: '48px',
        }],
        'h3': ['18px', {
          lineHeight: '27px',
        }],
        'h3-md': ['20px', {
          lineHeight: '30px',
        }],
      }
    },
  },
  plugins: [],
}