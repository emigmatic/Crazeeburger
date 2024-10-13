import { useOrderContext } from "../../../../context/Context"
import { useState } from "react"
import { FaCheck } from "react-icons/fa"
import { emptyProduct } from "../../../../utils/emptyProduct"
import styled from "styled-components"
import { theme } from "../../../../style/theme"
import Form from "../shared/Form"
import { StyledFormFooter, StyledButton } from "../shared/styles"

function AddForm() {
	const { data, setData, newProduct, setNewProduct } = useOrderContext()

	const [isSuccess, setIsSuccess] = useState(false)

	const handleChange = (e) => {
		//setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
		const { name, value } = e.target
		setNewProduct((prevState) => {
			return { ...prevState, [name]: value }
		})
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const product = { ...newProduct, id: crypto.randomUUID() }
		const menu = [product, ...data]
		setData(menu)
		setNewProduct(emptyProduct)
		setIsSuccess(true)
		setTimeout(() => {
			setIsSuccess(false)
		}, 2000)
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

export const StyledSuccessInfo = styled.p`
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
