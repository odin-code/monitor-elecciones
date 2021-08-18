module.exports = {
  mode: "jit",
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class", // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          100: "#E6F0FD",
          200: "#CCE2FC",
          300: "#99C5FA",
          400: "#66A9F7",
          500: "#338CF5",
          600: "#0070F4",
          700: "#0064DA",
          800: "#0059C2",
          900: "#004391",
        },
        gray: {
          850: "#161F33",
          1000: "#0B1012",
        },
        teal: {
          100: "#E6FFFA",
          200: "#B2F5EA",
          300: "#81E6D9",
          400: "#4FD1C5",
          500: "#3ABAB4",
          600: "#319795",
          700: "#2C7A7B",
          800: "#285E61",
          900: "#234E52",
        },
        cyan: {
          100: "#AAFFEC",
          200: "#79FFE1",
          300: "#50E3C2",
          400: "#29BC9B",
        },
        violet: {
          100: "#E3D7FC",
          200: "#8A63D2",
          300: "#7928CA",
          400: "#4C2889",
        },
      },
      fontSize: {
        xxl: "1.38rem",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
