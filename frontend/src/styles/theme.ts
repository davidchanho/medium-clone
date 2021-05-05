import * as breakpoints from "./breakpoints";
import * as colors from "./colors";

export const theme = () => ({
  breakpoints: {
    mobile: breakpoints.mobile,
    tablet: breakpoints.tablet,
    desktop: breakpoints.desktop,
  },
  colors: {
    primaryButton: colors.white["100"],
    primaryButtonOutline: colors.grey["100"],
    primaryButtonText: colors.grey["100"],

    secondaryText: colors.grey["100"],
    secondaryTextHover: colors.black["200"],

    numberedText: colors.grey["200"],

    successButton: colors.green["100"],
    successButtonHover: colors.green["200"],
    successButtonText: colors.white["100"],

    successText: colors.green["100"],

    darkBackground: colors.black["200"],
    darkText: colors.black["100"],

    white: colors.white["100"],
  },
});
