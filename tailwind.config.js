module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx}",
    "./src/components/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    colors: {
      transparent: "transparent",
      current: "currentColor",
      light: "#ffffff",
      dark: "#202124",
      primary: "#538FF7",
      secondary: "#80868B",
      success: "#3FBC5D",
      warning: "#F6BD41",
      error: "#EC5E4F"
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1440px",
    },
    fontFamily: {
      body: ["Product Sans", "sans-serif"],
      heading: ["Roboto Serif", "serif"],
      code: ["Fira Code", "monospace"],
    },
    extend: {
      spacing: {
        128: "32rem",
        144: "36rem",
      },
      borderRadius: {
        "4xl": "2rem",
      },
    },
  },
  plugins: [],
};
