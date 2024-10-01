import { useOrderContext } from "../../../../context/Context"
import { useState } from "react"
import styled from "styled-components"
import { theme } from "../../../../style/theme"
import media from "../../../../style/breakpoints"
import InputText from "../../../UI/InputText"
import Button from "../../../UI/Button"
import ImagePreview from "../ImagePreview"
import inputsConfig from "../inputsConfig"
import { FaCheck } from "react-icons/fa"
import { emptyProduct } from "../../../../utils/emptyProduct"

function AddForm() {
	const { data, setData, newProduct, setNewProduct } = useOrderContext()

	const [isSuccess, setIsSuccess] = useState(false)

	const handleChange = (e) => {
		setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
	}

	const handleSubmit = (e) => {
		e.preventDefault()

		const product = { ...newProduct, id: crypto.randomUUID() }
		const menu = [product, ...data]
		setData(menu)
		setIsSuccess(true)
		setTimeout(() => {
			setIsSuccess(false)
		}, 2000)
		setNewProduct(emptyProduct)
	}

	return (
		<div className="add">
			<StyledForm onSubmit={handleSubmit}>
				<ImagePreview
					path={newProduct.imageSource}
					title={newProduct.title}
				/>
				{inputsConfig.map((input, index) => {
					return (
						<StyledFormGroup key={index} className={input.cssClass}>
							<label htmlFor={input.name}>{input.label} :</label>
							<StyledInput
								type={input.type}
								placeholder={input.placeholder}
								required={input.required}
								name={input.name}
								value={newProduct[input.name]}
								onChange={handleChange}
							/>
						</StyledFormGroup>
					)
				})}
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
			</StyledForm>
		</div>
	)
}

const StyledForm = styled.form`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, auto);
	gap: 1rem 2rem;
`

const StyledFormGroup = styled.div`
	position: relative;
	grid-area: 1 / 2 / 1 / 5;

	&::before {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.8rem;
		color: ${theme.colors.greySemiDark};
		pointer-events: none;
	}

	&.product-name {
		grid-area: 1 / 2 / 1 / 5;
	}

	&.image-source {
		grid-area: 2 / 2 / 2 / 5;
	}

	&.price {
		grid-area: 3 / 2 / 3 / 3;
	}

	label {
		display: none;
	}
`

const StyledInput = styled(InputText)`
	display: block;
	width: 100%;
	padding: 1rem 1rem 1rem 4rem;
	background-color: ${theme.colors.background_white};
	border-radius: 5px;
	border: 0 none;
	font-size: 1.6rem;
	line-height: 1.5;

	${media.md`
		font-size: 1.8rem;
	`}
`

const StyledFormFooter = styled.div`
	grid-area: 4 / 2 / 4 / 5;
	display: flex;
	align-items: center;
	gap: 2rem;
`

const StyledButton = styled(Button)`
	flex: 0 0 50%;
	max-width: 50%;
	background-color: ${theme.colors.primary};
	border-color: ${theme.colors.primary};
	border-radius: 5px;
	color: white;
	font-size: 1.6rem;
	font-weight: 700;

	&:hover {
		background-color: white;
		color: ${theme.colors.primary};
	}

	${media.md`
		font-size: 1.8rem;
	`}
`

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
