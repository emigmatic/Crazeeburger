import styled from "styled-components"
import { theme } from "../style/theme"
import { fakeMenu2 } from "../fakeData/fakeMenu"
import Card from "./Card"
import { formatPrice } from "../utils/maths"

function Menu() {
	console.log(fakeMenu2)

	const cardList = fakeMenu2.map(({ id, title, imageSource, price }) => (
		<Card
			key={id}
			title={title}
			image={imageSource}
			price={formatPrice(price)}
		/>
	))

	return <StyledMenu>{cardList}</StyledMenu>
}

const StyledMenu = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	grid-template-rows: 1fr 1fr;
	gap: 4rem;
	padding: 50px 50px 150px;
	background-color: ${theme.colors.background_white};
	box-shadow: rgba(0, 0, 0, 0.2) 0 8px 20px 8px inset;
	overflow-y: auto;
`

export default Menu
