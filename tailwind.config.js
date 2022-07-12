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
        cream: '30 38% 92%',
        cyan: {
          900: '158 36% 37%',
        },
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