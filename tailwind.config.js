module.exports = {
  content: [
    './components/**/*.{html,js}',
    './pages/**/*.{html,js}',
    './index.html',
  ],
  media: false,
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        black: '#000',
        white: '#fff',
        cream: 'hsl(30, 38%, 92%)',
        darkcyan: 'hsl(158, 36%, 37%)',
        verydarkcyan: 'hsl(158, 36%, 17%)',
        verydarkblue: 'hsl(212, 21%, 14%)',
        darkgrayblue: 'hsl(228, 12%, 48%)',
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        serif: ['Fraunces', 'serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}