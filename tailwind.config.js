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
      },
    },
  },
}