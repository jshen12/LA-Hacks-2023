/** @type {import('tailwindcss').Config} */
/**borderColor: theme => ({
  'primary': '#F28C28',
  'secondary': '#fcf9ed'
  }), 

    textColor: theme => 'colors',
    backgroundColor: theme => 'colors',
    borderColor: theme => 'colors',


     
  
  */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],

  colors: {
    primary: '#F28C28',
    secondary: '#fcf9ed',
  },

  theme: {

    borderColor: theme => ({
      'primary': '#F28C28',
      'secondary': '#fcf9ed'
      }),
    backgroundColor: theme => ({
      'primary': '#F28C28',
      'secondary': '#fcf9ed'
    }), 
    textColor: {
      'primary': '#F28C28',
      'secondary': '#fcf9ed',
      'custom_gray': '#4a5568'
    },
    extend: {},
  },
  plugins: [],
}

