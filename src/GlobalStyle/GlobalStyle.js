import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: rgb(238, 174, 202);
  background: linear-gradient(
    90deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(155, 195, 241, 1) 51%,
    rgba(172, 230, 238, 1) 100%
  );
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
