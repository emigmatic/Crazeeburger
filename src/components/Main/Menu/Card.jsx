/* eslint-disable react/prop-types */
import styled from "styled-components"
import Button from "../../UI/Button"
import { theme } from "../../../style/theme"
import { FaTimes } from "react-icons/fa"
import classNames from "classnames"

function Card({
	title,
	image,
	price,
	isAvailable,
	isAdvertised,
	isEditable,
	isSelected,
	handleRemove,
	handleSelect,
	handleAddToBasket,
}) {
	const soldOutImage = "/images/out-of-stock.png"

	return (
		<StyledCard
			onClick={handleSelect}
			className={classNames({
				"is-hoverable": isEditable,
				"is-selected": isSelected,
			})}
		>
			{isEditable && (
				<StyledDeleteBtn className="card-delete" onClick={handleRemove}>
					<FaTimes />
				</StyledDeleteBtn>
			)}
			<div className="card-image">
				<img src={image} alt={title} />
			</div>
			<div className="card-infos">
				<h3 className="card-title">{title}</h3>
				<div className="card-desc">
					<p className="card-price">{price}</p>
					<StyledAddBtn
						disabled={isEditable || !isAvailable}
						onClick={handleAddToBasket}
					>
						Ajouter
					</StyledAddBtn>
				</div>
			</div>
			{!isAvailable && (
				<div className="sold-out">
					<img src={soldOutImage} alt="En rupture" />
				</div>
			)}
			{isAdvertised && (
				<StyledRibbon>
					<span>Nouveau</span>
				</StyledRibbon>
			)}
		</StyledCard>
	)
}

const StyledCard = styled.div`
	--radius: 15px;

	position: relative;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	max-width: 28rem;
	margin: 0 auto;
	padding: 3rem 2rem;
	border-radius: var(--radius);
	background-color: white;
	box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
	transition: all 0.15s ease-out;

	&.is-hoverable {
		&:hover {
			transform: scale(1.05);
			box-shadow: 0 0 8px ${theme.colors.primary};
			cursor: pointer;
		}

		&.is-selected {
			background-color: ${theme.colors.primary};

			.card-price {
				color: white;
			}
		}
	}

	.card-image {
		max-width: 20rem;
		margin: 0 auto;

		img {
			width: 100%;
			max-width: 100%;
			height: 15rem;
			object-fit: contain;
		}
	}

	.card-infos {
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		flex: 1 0 auto;
	}

	.card-title {
		margin: 1.5rem 0;
		font-family: ${theme.fonts.family.typo2};
		font-size: 3.6rem;
		line-height: 1.15;
	}

	.card-desc {
		display: flex;
		justify-content: space-between;
		align-items: center;
		gap: 1rem;
	}

	.card-price {
		margin: 0;
		font-size: 1.8rem;
		color: ${theme.colors.primary};
		line-height: 1;
	}

	.sold-out {
		display: flex;
		justify-content: center;
		align-items: flex-start;
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: 1;
		padding: 6rem 2rem 3rem;
		border-radius: var(--radius);
		background-color: rgba(255, 255, 255, 0.75);

		img {
			width: 22rem;
			max-width: 100%;
			object-fit: contain;
			object-position: center;
		}
	}
`

const StyledAddBtn = styled(Button)`
	display: block;
	padding: 1rem 2rem;
	border: 1px solid ${theme.colors.primary};
	background-color: ${theme.colors.primary};
	border-radius: 5px;
	color: white;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 1.4;

	&:hover {
		background-color: white;
		color: ${theme.colors.primary};
	}

	&:disabled {
		visibility: hidden;
	}
`

const StyledDeleteBtn = styled(Button)`
	position: absolute;
	top: 1rem;
	right: 1rem;
	z-index: 2;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 0.5rem;
	border-color: ${theme.colors.red};
	border-radius: 50px;
	background-color: ${theme.colors.red};
	font-size: 2rem;
	color: white;

	&:hover {
		background-color: white;
		color: ${theme.colors.red};
	}
`

const StyledRibbon = styled.div`
	position: absolute;
	top: -1rem;
	left: -1rem;
	z-index: 2;
	width: 150px;
	height: 150px;
	overflow: hidden;
	pointer-events: none;

	&::before,
	&::after {
		content: "";
		position: absolute;
		z-index: -1;
		border: 5px solid #961015;
		border-top-color: transparent;
		border-left-color: transparent;
	}

	&::before {
		top: 0;
		right: 0;
	}

	&::after {
		bottom: 0;
		left: 0;
	}

	span {
		position: absolute;
		top: 30px;
		right: -25px;
		transform: rotate(-45deg);
		display: block;
		width: 225px;
		padding: 1.5rem 2rem;
		background-color: ${theme.colors.redSecondary};
		box-shadow: 0 5px 10px rgba(0, 0, 0, 0.1);
		font-size: 1.8rem;
		font-weight: 700;
		color: white;
		line-height: 1;
		text-align: center;
		text-transform: uppercase;
	}
`

export default Card
