import { useOrderContext } from "../../../../context/Context"
import styled from "styled-components"
import { theme } from "../../../../style/theme"
import EmptyBasket from "./EmptyBasket"
import { isEmpty } from "../../../../utils/array"
import BasketProducts from "./BasketProducts"

function BasketBody() {
	const { basketProducts } = useOrderContext()

	return (
		<StyledBasketBody>
			{isEmpty(basketProducts) ? <EmptyBasket /> : <BasketProducts />}
		</StyledBasketBody>
	)
}

const StyledBasketBody = styled.div`
	flex: 1 1 auto;
	max-width: 100%;
	padding: 1.5rem 2rem;
	font-family: ${theme.fonts.family.typo2};
	overflow-y: auto;
`

export default BasketBody
