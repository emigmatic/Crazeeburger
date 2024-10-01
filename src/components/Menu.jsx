import { useOrderContext } from "../context/Context"
import styled from "styled-components"
import { theme } from "../style/theme"
import Card from "./Card"
import { formatPrice } from "../utils/maths"

function Menu() {
	const { data, setData, isAdminMode } = useOrderContext()

	const defaultImage = "/images/coming-soon.png"

	const handleRemove = (id) => {
		const menu = [...data]
		const menuUpdate = menu.filter((product) => product.id !== id)
		setData(menuUpdate)
	}

	const cardList = data.map(({ id, title, imageSource, price }) => (
		<Card
			key={id}
			id={id}
			title={title}
			image={imageSource ? imageSource : defaultImage}
			price={formatPrice(price)}
			hasDeleteBtn={isAdminMode}
			handleRemove={() => handleRemove(id)}
		/>
	))

	return data.length > 0 ? (
		<StyledMenu>{cardList}</StyledMenu>
	) : (
		<StyledEmptyInfo>Aucun produit pour le moment</StyledEmptyInfo>
	)
}

const StyledMenu = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	grid-template-rows: 1fr 1fr;
	gap: 4rem;
	padding: 50px 50px 150px;
	background-color: ${theme.colors.background_white};
	box-shadow: 0 6px 20px 2px rgba(0, 0, 0, 0.2) inset;
	overflow-y: auto;
`

const StyledEmptyInfo = styled.h3`
	margin: 4.5rem auto 3rem;
	padding: 0 2rem;
	font-family: ${theme.fonts.family.typo2};
	font-size: 3.2rem;
	text-align: center;
`

export default Menu
