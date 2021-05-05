import { createGlobalStyle } from "styled-components";
import * as fonts from "./fonts";
import "./reset.css";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: ${fonts.primaryFont};
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.pointer {
  cursor: pointer;
}

`;

export default GlobalStyles;
