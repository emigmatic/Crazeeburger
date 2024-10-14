import { useOrderContext } from "../../../../context/Context"
import { FaMousePointer } from "react-icons/fa"
import styled from "styled-components"
import { theme } from "../../../../style/theme"
import media from "../../../../style/breakpoints"
import Form from "../shared/Form"
import { StyledFormFooter } from "../shared/styles"
import { deepClone } from "../../../../utils/deepClone"

function EditForm() {
	const { data, setData, productSelected, setProductSelected } =
		useOrderContext()

	const handleChange = (e) => {
		const { name, value } = e.target
		const productBeingUpdated = {
			...productSelected,
			[name]: value,
		}

		setProductSelected(productBeingUpdated)
		handleEdit(productBeingUpdated)
	}

	const handleEdit = (product) => {
		const menuCopy = deepClone(data)
		const productToUpdate = menuCopy.findIndex(
			(item) => item.id === product.id
		)
		menuCopy[productToUpdate] = product
		setData(menuCopy)
	}

	return productSelected.id !== 0 ? (
		<div className="edit">
			<Form
				product={productSelected}
				onSubmit={handleEdit}
				onChange={handleChange}
			>
				<StyledFormFooter>
					<StyledUsageInfo>
						Cliquer sur un produit pour le modifier{" "}
						<b>en temps réel</b>.
					</StyledUsageInfo>
				</StyledFormFooter>
			</Form>
		</div>
	) : (
		<StyledSelectionInfo>
			<p>Cliquer sur un produit du menu pour le modifier</p>
			<FaMousePointer />
		</StyledSelectionInfo>
	)
}

const StyledSelectionInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 2rem;

	p {
		font-family: ${theme.fonts.family.typo2};
		font-size: 2.4rem;
	}
`

const StyledUsageInfo = styled.p`
	margin: 1.5rem 0 0;
	font-size: 1.6rem;
	color: ${theme.colors.loginLine};
	line-height: 1.25;

	${media.md`
		font-size: 1.8rem;
	`}
`

export default EditForm
