const colors = require('tailwindcss/colors')
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'content': "url('/public/imgs/content1.jpg')",
        'happy-customer': "url('/public/imgs/kopi4.jpg')",
      }),
      // colors
      colors: {
        'orange1': '#ab410f',
        'orange9': '#78350F',
      },
      container: {
        fontFamily: {
          Poppins: ["Poppins, sans-serif"]
        },
        center: true,
        padding: "1rem",
        screen: {
          lg: "1124px",
          xl: "1124px",
          "2xl": "1124px",
        },
      },
    },
    variants: {
      extend: {},
    },
    plugins: [],
  }
}