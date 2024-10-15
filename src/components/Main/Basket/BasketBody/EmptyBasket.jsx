import styled from "styled-components"
import { theme } from "../../../../style/theme"

export default function EmptyBasket() {
	return <StyledEmptyBasket>Votre panier est vide</StyledEmptyBasket>
}

const StyledEmptyBasket = styled.p`
	width: 100%;
	font-family: ${theme.fonts.family.typo2};
	font-size: 3.6rem;
	text-align: center;
`
