import styled from "styled-components"
import { theme } from "../../../../style/theme"

function BasketFooter() {
	return (
		<StyledBasketFooter>
			<p>Codé avec ❤️ et React.JS</p>
		</StyledBasketFooter>
	)
}

const StyledBasketFooter = styled.div`
	max-width: 100%;
	padding: 1.5rem 2rem;
	background-color: ${theme.colors.background_dark};
	font-family: ${theme.fonts.family.typo2};
	font-size: 2.4rem;
	font-weight: 700;
	color: white;
	text-align: center;

	p {
		margin: 0;
	}
`

export default BasketFooter
