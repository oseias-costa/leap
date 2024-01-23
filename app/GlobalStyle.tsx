import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
  margin: 0;
  padding: 0;
  border: none;
  list-style: none;
  text-decoration: none;
  box-sizing: border-box;
  scroll-behavior: smooth;
}

:root {
  --color-blue: #002A40;
  --color-white: #F0F0F0;
  --color-gray: #1E1E1E;
}

h1, h2, h3, h4, p {
  font-family: var(--font-mollen);
}

h1 {
  font-size: 32px;
  color: var(--color-white)
}
`;
