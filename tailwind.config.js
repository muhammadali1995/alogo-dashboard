module.exports = {
  content: ["./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        custom: {
          100: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-100), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-100), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-100))`;
          },
          200: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-200), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-200), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-200))`;
          },
          300: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-300), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-300), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-300))`;
          },
          400: ({ opacityVariable, opacityValue }) => {
            if (opacityValue !== undefined) {
              return `rgba(var(--color-custom-400), ${opacityValue})`;
            }
            if (opacityVariable !== undefined) {
              return `rgba(var(--color-custom-400), var(${opacityVariable}, 1))`;
            }
            return `rgb(var(--color-custom-400))`;
          },
        },
        'dark': '#0F2837',
        'gray': '#CFD4D7',
        'green': '#9BC368'
      },
      boxShadow: {
        'sidebar': 'inset 0px 4px 4px rgba(0, 0, 0, 0.25)',
        'date': '0px 0px 40px -4px rgba(15, 40, 55, 0.1)',
        'card': '0px 4px 40px rgba(15, 40, 55, 0.1)',
        'card-button': ' 0px 0px 24px -8px #6E1946'
      },
      borderWidth: {
        0.2: '0.2px'
      },
      fontSize: {
        18: '18px',
        10: '10px'
      },
      width: {
        'fill': '-webkit-fill-available'
      }
    },
  },
}