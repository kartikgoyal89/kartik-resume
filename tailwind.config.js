/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // colors: {
      //   primary: "#0A192F",
      //   secondary: "#F97316",
      //   tertiary: "#54D6BB",
      // },

      // colors: {
      //   primary: "#2D3748",
      //   secondary: "#E53E3E",
      //   tertiary: "#EDF2F7",
      // },
      colors: {
        primary: "#1C1E21",
        secondary: "#FFD700",
        tertiary: "#00A36C",
      },
    },
    screens: {
      sm: { max: "640px" },
      md: { max: "768px" },
      lg: { max: "1024px" },
      xl: { max: "1280px" },
      "2xl": { max: "1536px" },
    },
  },
  plugins: [],
};
