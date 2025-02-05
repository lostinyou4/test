module.exports = {
  content: [
    "./index.html",
    "./assets/**/*.{html,js}"
  ],
  theme: {
    colors: {
      'gray-400': 'rgb(189, 189, 189)',
      'black-900': '#1c1d1c'
    },
    fontFamily: {
    },
    extend: {
      gridTemplateColumns: {
        16: 'repeat(16, 1fr)', 
      },
      gap: {
        'my-gap': '20px'
      },
      fontWeight: {
        '100': '100',
        '200': '200',
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',  
        '900': '900',  
      },
      keyframes: {
        'fade-in-scale': {
          '0%': {
            opacity: '0',
            transform: 'scale(0.95)',
          },
          '100%': {
            opacity: '1',
            transform: 'scale(1)',
          },
        },
      },
      animation: {
        'fade-in-scale': 'fade-in-scale 0.3s ease-out',
      },
    },
  },
  plugins: [],
}
