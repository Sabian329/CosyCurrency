import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`


*,
*::before,
*::after {
  box-sizing: border-box;
}

body {
  background: rgb(61,236,255);
  background: linear-gradient(90deg, rgba(61,236,255,1) 0%, rgba(56,155,204,1) 100%);
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
