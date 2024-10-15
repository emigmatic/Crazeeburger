/* eslint-disable react/prop-types */
import styled from "styled-components"
import { theme } from "../../../../style/theme"

function BasketHeader({ totalPrice }) {
	return (
		<StyledBasketHeader>
			<h2 className="total">Total</h2>
			<p className="amount">
				<span>{totalPrice}</span>
			</p>
		</StyledBasketHeader>
	)
}

const StyledBasketHeader = styled.div`
	display: flex;
	justify-content: space-between;
	max-width: 100%;
	padding: 1.5rem 2rem;
	background-color: ${theme.colors.background_dark};
	font-family: ${theme.fonts.family.typo2};
	font-size: 3.6rem;
	color: ${theme.colors.primary};

	.total {
		margin: 0;
		font-size: inherit;
		font-weight: 400;
	}

	.amount {
		margin: 0;
		font-weight: 700;
	}
`

export default BasketHeader
