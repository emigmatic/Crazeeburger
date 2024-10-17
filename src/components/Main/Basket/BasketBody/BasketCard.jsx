/* eslint-disable react/prop-types */
import styled from "styled-components"
import { FaCaretUp, FaCaretDown, FaTrash } from "react-icons/fa"
import { theme } from "../../../../style/theme"
import Button from "../../../UI/Button"

function BasketCard({
	title,
	image,
	price,
	quantity,
	handleDelete,
	handleIncrement,
	handleDecrement,
}) {
	return (
		<StyledBasketCard>
			<StyledBasketCardDeleteBtn
				className="basket-card-delete"
				onClick={handleDelete}
			>
				<span>Supprimer du panier</span>
				<FaTrash size="1em" />
			</StyledBasketCardDeleteBtn>
			<div className="basket-card-image">
				<img src={image} alt={title} />
			</div>
			<div className="basket-card-infos">
				<h3 className="basket-card-tilte">{title}</h3>
				<p className="basket-card-price">{price}</p>
			</div>
			<div className="basket-card-quantity">
				<StyledBasketCardQtyBtn onClick={handleIncrement}>
					<span>Augmenter la quantité</span>
					<FaCaretUp size="1em" />
				</StyledBasketCardQtyBtn>
				<p className="basket-card-quantity-label">{quantity}</p>
				<StyledBasketCardQtyBtn onClick={handleDecrement}>
					<span>Diminuer la quantité</span>
					<FaCaretDown size="1em" />
				</StyledBasketCardQtyBtn>
			</div>
		</StyledBasketCard>
	)
}

const StyledBasketCard = styled.div`
	position: relative;
	display: flex;
	justify-content: space-between;
	align-items: center;
	gap: 1rem;
	margin: 0 auto 1.5rem;
	padding: 1rem;
	border-radius: 5px;
	background-color: white;
	box-shadow: -2px 2px 8px rgba(0, 0, 0, 0.15);
	overflow: hidden;

	&:hover {
		.basket-card-delete {
			transform: translateX(0);
		}
	}

	.basket-card-image {
		flex: 0 0 8rem;
		max-width: 8rem;

		img {
			max-width: 100%;
			width: 100%;
			height: 6rem;
			object-fit: contain;
			object-position: center;
		}
	}

	.basket-card-infos {
		flex: 1 1 auto;
	}

	.basket-card-tilte {
		margin: 0;
		font-size: 2.6rem;
		font-weight: 700;
		line-height: 1.25;
	}

	.basket-card-price {
		margin: 0.5rem 0 0;
		font-family: ${theme.fonts.family.typo1};
		color: ${theme.colors.primary};
	}

	.basket-card-quantity {
		flex: 0 0 auto;
		display: flex;
		flex-direction: column;
		font-family: ${theme.fonts.family.typo1};
	}

	.basket-card-quantity-label {
		margin: 0;
		text-align: center;

		&::before {
			content: "x ";
		}
	}
`

const StyledBasketCardDeleteBtn = styled(Button)`
	position: absolute;
	top: 0;
	left: 0;
	bottom: 0;
	transform: translateX(-101%);
	display: flex;
	justify-content: center;
	align-items: center;
	width: 9rem;
	padding: 0 1rem;
	border: 0 none;
	border-radius: 5px 0 0 5px;
	background-color: ${theme.colors.redSecondary};
	font-size: 2rem;
	color: white;
	transition: all 0.2s ease-out;

	span {
		display: none;
	}

	&:hover {
		background-color: ${theme.colors.greyLight};
		color: ${theme.colors.redSecondary};
	}
`

const StyledBasketCardQtyBtn = styled(Button)`
	display: flex;
	padding: 2px;
	border: 0 none;
	background-color: transparent;
	font-size: 2rem;
	color: ${theme.colors.primary};

	span {
		display: none;
	}
`

export default BasketCard
