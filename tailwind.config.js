module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        breathe: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.6)" },
        },
      },
      animation: {
        breathe: "breathe 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
