/* eslint-disable react/prop-types */
import { useOrderContext } from "../../../../context/Context"
import inputsConfig from "./inputsConfig"
import ImagePreview from "./ImagePreview"
import { StyledForm, StyledFormGroup, StyledInput } from "./styles"

function Form({ product, onSubmit, onChange, children }) {
	const { titleEditRef } = useOrderContext()

	const inputs = inputsConfig.map((input, index) => {
		return (
			<StyledFormGroup key={index} className={input.cssClass}>
				<label htmlFor={input.name}>{input.label} :</label>
				<StyledInput
					ref={input.name === "title" ? titleEditRef : null}
					type={input.type}
					placeholder={input.placeholder}
					required={input.required}
					name={input.name}
					value={product[input.name] ? product[input.name] : ""}
					onChange={onChange}
				/>
			</StyledFormGroup>
		)
	})

	return (
		<StyledForm onSubmit={onSubmit}>
			<ImagePreview path={product.imageSource} title={product.title} />
			{inputs}
			{children}
		</StyledForm>
	)
}

export default Form
