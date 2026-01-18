module.exports = {
  theme: {
    extend: {
      animation: {
        'scaleIn': 'scaleIn 0.3s ease-out',
        'bounce': 'bounce 1s infinite',
      },
      keyframes: {
        scaleIn: {
          '0%': { transform: 'scale(0.9)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}