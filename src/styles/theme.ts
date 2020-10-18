const SCREEN = {
  MOBILE: "576px",
  TABLET: "577px",
  LAPTOP: "768px",
  DESKTOP: "992px",
  WIDESCREEN: "1200px",
};

export const theme = {
  screens: {
    mobile: SCREEN.MOBILE,
    tablet: SCREEN.TABLET,
    laptop: SCREEN.LAPTOP,
    desktop: SCREEN.DESKTOP,
    widescreen: SCREEN.WIDESCREEN,
  },
  breakpoints: {
    mobile: `only screen and (max-width: ${SCREEN.MOBILE})`,
    tablet: `only screen and (min-width: ${SCREEN.TABLET})`,
    laptop: `only screen and (min-width: ${SCREEN.LAPTOP})`,
    desktop: `only screen and (min-width: ${SCREEN.DESKTOP})`,
    widescreen: `only screen and (min-width: ${SCREEN.WIDESCREEN})`,
  },
  spacings: (
    top: number,
    right?: number,
    bottom?: number,
    left?: number
  ): string => {
    if (right !== undefined && bottom !== undefined && left !== undefined) {
      return `${top * 10}px ${right * 10}px ${bottom * 10}px ${left * 10}px`;
    }

    if (right !== undefined && bottom !== undefined) {
      return `${top * 10}px ${right * 10}px ${bottom * 10}px`;
    }

    if (right !== undefined) {
      return `${top * 10}px ${right * 10}px`;
    }

    return `${top * 10}px`;
  },
  colors: {
    container: "#F5F5F5",

    progressBackground: "#3B3B3B",
    progressBar: "#FFFFFF",

    white: "#FFFFFF",
    black: "#000000",
    pink: "#E07C7C",
    purple: "#585292",

    textDark: "#2E2E2E",
    textDisable: "#A9A9A9",
    textPlaceholder: "#BCBCBC",
    textProgress: "#EBE9E8",

    menuIcon: "#9796A8",
  },
};
