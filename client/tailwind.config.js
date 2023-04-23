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

  theme: {

    borderColor: theme => ({
      'primary': '#369026',
      'secondary': '#fcf9ed'
      }),
    backgroundColor: theme => ({
      'primary': '#369026',
      'secondary': '#fcf9ed'
    }), 
    textColor: {
      'primary': '#369026',
      'secondary': '#fcf9ed',
      'custom_gray': '#4a5568'
    },
    extend: {},
  },
  plugins: [],
}

