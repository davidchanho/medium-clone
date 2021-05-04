import "./reset.scss";
import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

.pointer {
  cursor: pointer;
}

.card,
.card-header,
.card-body,
.btn {
  border: none;
}

.bg-inherit {
  background-color: inherit;
}

.dropdown-toggle {
  background-color: inherit;
  padding: 0;
  &:focus,
  &:hover,
  &:active {
    background-color: inherit !important;
  }
}

p {
  margin: 0;
  padding: 0;
}

.bg-yellow {
  background-color: #ffc017;
}

`;

export default GlobalStyles;
