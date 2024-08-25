/* eslint-disable react/prop-types */
import styled from "styled-components"
import Button from "../components/UI/Button"
import { theme } from "../style/theme"

function Card({ title, image, price }) {
	return (
		<StyledCard>
			<div className="card-image">
				<img src={image} alt={title} />
			</div>
			<div className="card-infos">
				<h3 className="card-title">{title}</h3>
				<div className="card-desc">
					<p className="card-price">{price}</p>
					<StyledButton>Ajouter</StyledButton>
				</div>
			</div>
		</StyledCard>
	)
}

const StyledCard = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: space-between;
	width: 100%;
	padding: 3rem 2rem;
	border-radius: 15px;
	background-color: white;
	box-shadow: 0 4px 16px rgba(0, 0, 0, 0.2);

	.card-image {
		max-width: 180px;
		margin: 0 auto;

		img {
			width: 100%;
			max-width: 100%;
			height: 14rem;
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
`

const StyledButton = styled(Button)`
	display: block;
	padding: 1rem 2rem;
	border: 1px solid ${theme.colors.primary};
	background-color: ${theme.colors.primary};
	border-radius: 5px;
	color: white;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 1.4;
	cursor: pointer;

	&:hover {
		background-color: white;
		color: ${theme.colors.primary};
	}
`

export default Card
