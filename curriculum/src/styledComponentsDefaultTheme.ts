const CustomTheme = {
  colors: {
    green: "#55C6B3",
    blue: "#4169E1",
    grey: "#213547",
    white: "#fff",
    whiteTranslucid: "rgba(255,255,255,.9)",
    black: "#222"
  },
  fonts: {
    families: {
      font1: "Gerogia, sans-serif"
    },
    sizes: {
      body: "1rem",
      mainTitle: "calc(2rem + 3vw)",
      size1: "1.953rem",
      size2: "1.563rem",
      size3: "1.25rem"
    }
  },
  spaces: {
    xs: "0.25rem",
    sm: "0.5rem",
    md: "1rem",
    lg: "2rem",
    xl: "4rem"
  },
  borders: {
    radius: "0.3rem"
  },
  shadows: {
    text: "3px 3px 0 rgba(0, 0, 0)",
    box: "2px 2px 8px rgba(0, 0, 0, 0.6)",
    inset: "inset 2px 2px 4px rgba(0, 0, 0, 0.6)"
  }
};

export default CustomTheme
export type CustomThemeType = typeof CustomTheme
