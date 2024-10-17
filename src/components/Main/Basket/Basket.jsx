import { useOrderContext } from "../../../context/Context"
import styled from "styled-components"
import BasketHeader from "./BasketHeader/BasketHeader"
import BasketBody from "./BasketBody/BasketBody"
import BasketFooter from "./BasketFooter/BasketFooter"
import { theme } from "../../../style/theme"
import { formatPrice } from "../../../utils/maths"
import { find } from "../../../utils/array"

function Basket() {
	const { data, basketProducts } = useOrderContext()

	const calculateAmount = (basketProducts, menuProducts) => {
		return basketProducts.reduce((total, product) => {
			const productMenu = find(product.id, menuProducts)
			if (isNaN(productMenu.price)) return total
			total += productMenu.price * product.quantity
			return total
		}, 0)
	}

	const amount = calculateAmount(basketProducts, data)

	return (
		<StyledBasket>
			<BasketHeader totalPrice={formatPrice(amount)} />
			<BasketBody />
			<BasketFooter />
		</StyledBasket>
	)
}

const StyledBasket = styled.div`
	flex: 0 1 32rem;
	max-width: 100%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	background-color: ${theme.colors.background_white};
`

export default Basket
