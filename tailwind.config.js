module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    container: {
      center: true,
    },
    screens: {
      xs: "480px",
      sm: "640px",
      md: "816px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    fontFamily: {
      body: "DM Sans",
    },
    fontWeight: {
      reguler: 400,
      medium: 500,
      bold: 700,
    },
    colors: {
      transparent: "transparent",
      current: "currentColor",
      black: "#0f2137",
      white: "#ffffff",
      grey: "#343d48",
      red: "#ea3a60",
    },
    lineHeight: {
      title: 1.5,
      text: 1.75,
    },
    extend: {},
  },
  plugins: [],
};
