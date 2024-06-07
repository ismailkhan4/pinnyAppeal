/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./app/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
    colors: {
      primary: '#EF7D00',
      secondary: '#3B9781',
      white: '#FFFFFF',
      black: '#000000',
      gray: '#8C9099',
      light: '#FFFFFF66'
    },
    fontFamily: {
      pthin: ['Poppins-Thin', 'sans-serif'],
      pextralight: ['Poppins-ExtraLight', 'sans-serif'],
      plight: ['Poppins-Light', 'sans-serif'],
      pregular: ['Poppins-Regular', 'sans-serif'],
      pmedium: ['Poppins-Medium', 'sans-serif'],
      psemibold: ['Poppins-SemiBold', 'sans-serif'],
      pbold: ['Poppins-Bold', 'sans-serif'],
      pextrabold: ['Poppins-ExtraBold', 'sans-serif'],
      pblack: ['Poppins-Black', 'sans-serif'],
    }
  },
  plugins: [],
}

