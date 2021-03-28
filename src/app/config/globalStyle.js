const theme = {
  colors: {
    deepRed: "#83050b",
    offWhite: "#f4f4f4",
    offWhiteTwo: "#efefef",
    grey: "#9b9797",
    darkShade: {
      dark: "rgba(31, 32, 65, 100)",
      medium: "rgba(31, 32, 65, 0.75)",
      light: "rgba(31, 32, 65, 0.50)",
      
    }
  },
  typography: {
    font: {
      fontFamily: "Arial, Helvetica, sans-serif"
    },
    h1: {
      fontSize: "35px"
    },

    p: {
      fontSize: "1rem",
    },
  },
  bsBreakpoint : {
    sm:"576",
    md:"768",
    lg:"992",
    xl:"1200"
  }
};


/**
 * Global breakpoints
 */

export const device = {
  sm:`(min-width:${theme.bsBreakpoint.sm}px)`,
  md:`(min-width:${theme.bsBreakpoint.md}px)`,
  lg:`(min-width:${theme.bsBreakpoint.lg}px)`,
  xl:`(min-width:${theme.bsBreakpoint.xl}px)`
}

export default theme


