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
    	font-family: ${theme.fonts.family.typo1};
    	font-size: 62.5%;
    	line-height: 1.4;
		hyphens: auto;
	}
	body {
    	margin: 0;
    	padding: 0;
    	font-size: 1.6em;
	}
	input {
		font-family: ${theme.fonts.family.typo1};
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
