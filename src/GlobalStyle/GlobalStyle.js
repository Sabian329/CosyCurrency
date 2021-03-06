import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
 background-color:#abc4ff;

  color: #ffff;
  margin: 0;
  padding: 0;
  font-family: "Montserrat", sans-serif;
}

section {
  h1 {
    text-align: center;
    color: #ffff;
    padding: 1rem;
  }
}
.ReactCollapse--collapse {
  transition: height 500ms;
}

`;
