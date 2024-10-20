import { useOrderContext } from "../../../../context/Context"
import { useSuccessMsg } from "../../../../hooks/useSuccessMsg"
import { FaCheck } from "react-icons/fa"
import { emptyProduct } from "../../../../utils/emptyProduct"
import styled from "styled-components"
import { theme } from "../../../../style/theme"
import Form from "../shared/Form"
import { StyledFormFooter, StyledButton } from "../shared/styles"
import { deepClone } from "../../../../utils/array"

function AddForm() {
	const { data, setData, newProduct, setNewProduct } = useOrderContext()

	const { isSuccess, displaySuccessMsg } = useSuccessMsg()

	const handleChange = (e) => {
		const { name, value } = e.target
		setNewProduct((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const productToAdd = { ...newProduct, id: crypto.randomUUID() }
		const menuCopy = deepClone(data)
		const menuUpdated = [productToAdd, ...menuCopy]
		setData(menuUpdated)
		setNewProduct(emptyProduct)
		displaySuccessMsg()
	}

	return (
		<div className="add">
			<Form
				product={newProduct}
				onSubmit={handleSubmit}
				onChange={handleChange}
			>
				<StyledFormFooter>
					<StyledButton htmlType="submit">
						<span>Add new product</span>
					</StyledButton>
					{isSuccess && (
						<StyledSuccessInfo>
							<FaCheck />
							<span>Ajouté avec succès !</span>
						</StyledSuccessInfo>
					)}
				</StyledFormFooter>
			</Form>
		</div>
	)
}

const StyledSuccessInfo = styled.p`
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	flex: 1 0 auto;
	margin: 1rem 0;
	font-weight: 700;
	color: ${theme.colors.success};
	line-height: 1.2;
`

export default AddForm
