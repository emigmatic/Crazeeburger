import { useOrderContext } from "../../../context/Context"
import Card from "./Card"
import styled from "styled-components"
import { theme } from "../../../style/theme"
import media from "../../../style/breakpoints"
import { formatPrice } from "../../../utils/maths"
import { emptyProduct } from "../../../utils/emptyProduct"
import { focusOnRef } from "../../../utils/focusOnRef"
import { convertStrToBool } from "../../../utils/convertStrToBool"
import { deepClone, isEmpty } from "../../../utils/array"

function Menu() {
	const {
		data,
		setData,
		isAdminMode,
		productSelected,
		setProductSelected,
		setCurrentTab,
		setIsCollapsed,
		basketProducts,
		setBasketProducts,
		deleteBasketProduct,
		titleEditRef,
	} = useOrderContext()

	const defaultImage = "/images/coming-soon.png"

	const handleSelect = async (id) => {
		const selected =
			productSelected.id === id
				? emptyProduct
				: data.find((product) => product.id === id)
		await setProductSelected(selected)
		await setCurrentTab("edit")
		await setIsCollapsed(false)

		focusOnRef(titleEditRef)
	}

	const handleRemove = (e, id) => {
		e.stopPropagation()

		const menuCopy = deepClone(data)
		const menuUpdate = menuCopy.filter((product) => product.id !== id)
		setData(menuUpdate)

		if (productSelected.id === id) {
			setProductSelected(emptyProduct)
		}

		deleteBasketProduct(id)
	}

	const handleAddToBasket = (id) => {
		const productToAdd = data.find((product) => {
			return product.id === id
		})
		const basketProductsCopy = deepClone(basketProducts)
		const existingProduct = basketProductsCopy.findIndex((product) => {
			return product.id === id
		})
		if (existingProduct === -1) {
			productToAdd.quantity = 1
			basketProductsCopy.unshift(productToAdd)
		} else {
			basketProductsCopy[existingProduct].quantity++
		}
		setBasketProducts(basketProductsCopy)
	}

	const cardList = data.map(
		({ id, title, imageSource, price, isAvailable, isAdvertised }) => (
			<Card
				key={id}
				id={id}
				title={title}
				image={imageSource ? imageSource : defaultImage}
				price={formatPrice(price)}
				isAvailable={convertStrToBool(isAvailable)}
				isAdvertised={convertStrToBool(isAdvertised)}
				isEditable={isAdminMode}
				isSelected={isAdminMode && productSelected.id === id}
				handleRemove={(e) => handleRemove(e, id)}
				handleSelect={isAdminMode ? () => handleSelect(id) : undefined}
				handleAddToBasket={() => handleAddToBasket(id)}
			/>
		)
	)

	return isEmpty(data) ? (
		<StyledEmptyInfo>
			<p>Aucun produit pour le moment</p>
		</StyledEmptyInfo>
	) : (
		<StyledMenu>{cardList}</StyledMenu>
	)
}

const StyledMenu = styled.div`
	height: 100%;
	display: grid;
	grid-template-columns: repeat(auto-fill, minmax(240px, 1fr));
	grid-template-rows: 1fr 1fr;
	gap: 4rem;
	padding: 50px 2rem 150px;
	background-color: ${theme.colors.background_white};
	box-shadow: 0 6px 20px 2px rgba(0, 0, 0, 0.15) inset;
	overflow-y: auto;

	${media.md`
		padding: 50px 4rem 150px;
	`}
`

const StyledEmptyInfo = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	padding: 0 2rem;
	background-color: ${theme.colors.background_white};
	box-shadow: 0 6px 20px 2px rgba(0, 0, 0, 0.2) inset;

	p {
		font-family: ${theme.fonts.family.typo2};
		font-size: 3.2rem;
		text-align: center;
	}
`

export default Menu
