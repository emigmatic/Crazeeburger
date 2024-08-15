import { createGlobalStyle, styled, keyframes } from "styled-components"
import { theme } from "../style/theme"
import media from "./breakpoints"

const StyledGlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;

    &::before,
    &::after {
      box-sizing: border-box;
    }
  }

  html {
    font-family: 'Amatic SC', Helvetica, sans-serif;
    font-size: 62.5%;
    line-height: 1.4;
  }
  body {
    margin: 0;
    padding: 0;
    font-size: 1.6em;
  }
  ::placeholder {
    color: ${theme.colors.greyMedium};
    opacity: 1;
  }
`

function GlobalStyle() {
	return <StyledGlobalStyle />
}

export { GlobalStyle }
