module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        montserrat: ['Montserrat'],
      },
      screens: {
        xs: '450px',
        mobile: '500px',
        // => @media (min-width: 640px) { ... }

        laptop: '1024px',
        // => @media (min-width: 1024px) { ... }

        desktop: '1280px',
        // => @media (min-width: 1280px) { ... }
      },
      colors: {
        black: {
          faded: '#111',
          dark: '#000000',
        },
        // black: '#000000',
        cgray: {
          light: '#757575',
        },
      },
      animation: {
        slideUp: 'slideUp 900ms linear',
        slideUpLight: 'slideUp 300ms linear',
        slideRight: 'slideRight 800ms linear',
        slideDown: 'slideDown 300ms linear',
        zoomIn: 'zoomIn 300ms ease-in',
        moveLT: 'moveLT 3000ms ease-in',
      },
      keyframes: {
        slideUp: {
          '0%': {
            transform: 'translateY(70%)',
            opacity: '0%',
          },
          '25%': {
            transform: 'translateY(50%)',
            opacity: '25%',
          },
          '55%': {
            transform: 'translateY(30%)',
            opacity: '50%',
          },
          '75%': {
            transform: 'translateY(15%)',
            opacity: '75%',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '100%',
          },
        },
        slideRight: {
          '0%': {
            transform: 'translateX(100%)',
            opacity: '0%',
          },
          '25%': {
            transform: 'translateX(75%)',
            opacity: '10%',
          },
          '55%': {
            transform: 'translateX(50%)',
            opacity: '50%',
          },
          '75%': {
            transform: 'translateX(25%)',
            opacity: '60%',
          },
          '100%': {
            transform: 'translateX(0%)',
            opacity: '100%',
          },
        },
        slideDown: {
          '0%': {
            transform: 'translateY(-100%)',
            opacity: '0%',
          },
          '25%': {
            transform: 'translateY(-75%)',
            opacity: '25%',
          },
          '55%': {
            transform: 'translateY(-50%)',
            opacity: '50%',
          },
          '75%': {
            transform: 'translateY(-25%)',
            opacity: '75%',
          },
          '100%': {
            transform: 'translateY(0%)',
            opacity: '100%',
          },
        },
        zoomIn: {
          '0%': {
            fontSize: '0.1rem',
            opacity: '0%',
          },
          '25%': {
            fontSize: '0.15rem',
            opacity: '25%',
          },
          '55%': {
            fontSize: '0.30rem',
            opacity: '50%',
          },
          '75%': {
            fontSize: '0.40rem',
            opacity: '75%',
          },
          '100%': {
            fontSize: '0.75rem',
            opacity: '100%',
          },
        },
        moveLT: {
          '0%': {
            transform: 'translate(-50px,-50px)',
          },
          '100%': {
            transform: 'translate(0px,0px)',
          },
        },
      },
    },
  },
  plugins: [],
}
