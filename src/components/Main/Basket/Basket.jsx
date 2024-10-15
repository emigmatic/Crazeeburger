import styled from "styled-components"
import BasketHeader from "./BasketHeader/BasketHeader"
import BasketBody from "./BasketBody/BasketBody"
import BasketFooter from "./BasketFooter/BasketFooter"
import { theme } from "../../../style/theme"
import { formatPrice } from "../../../utils/maths"

function Basket() {
	return (
		<StyledBasket>
			<BasketHeader totalPrice={formatPrice(0.001)} />
			<BasketBody />
			<BasketFooter />
		</StyledBasket>
	)
}

const StyledBasket = styled.div`
	flex: 0 1 30rem;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${theme.colors.background_white};
`

export default Basket
