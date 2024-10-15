/* eslint-disable react/prop-types */
import styled from "styled-components"

function BasketCard({ title }) {
	return (
		<StyledBasketCard>
			<h3 className="basket-card-tilte">{title}</h3>
		</StyledBasketCard>
	)
}

const StyledBasketCard = styled.div`
	margin: 0 auto 1.5rem;
	padding: 1rem 2rem;
	background-color: white;
	box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);

	.basket-card-tilte {
		margin: 0;
		font-size: 2.4rem;
		font-weight: 700;
		line-height: 1.25;
	}
`

export default BasketCard
