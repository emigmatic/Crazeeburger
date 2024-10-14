/* eslint-disable react/prop-types */
import { useOrderContext } from "../../../../context/Context"
import { textInputsConfig, selectInputsConfig } from "./inputsConfig"
import ImagePreview from "./ImagePreview"
import {
	StyledForm,
	StyledFormGroup,
	StyledInput,
	StyledSelect,
} from "./styles"

function Form({ product, onSubmit, onChange, children }) {
	const { titleEditRef } = useOrderContext()

	const textInputs = textInputsConfig.map((input, index) => {
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

	const selectInputs = selectInputsConfig.map((input, index) => {
		return (
			<StyledFormGroup key={index} className={input.cssClass}>
				<label htmlFor={input.name}>{input.label} :</label>
				<StyledSelect
					name={input.name}
					options={input.options}
					value={product[input.name] ? product[input.name] : ""}
					onChange={onChange}
				/>
			</StyledFormGroup>
		)
	})

	return (
		<StyledForm onSubmit={onSubmit}>
			<ImagePreview path={product.imageSource} title={product.title} />
			{textInputs}
			{selectInputs}
			{children}
		</StyledForm>
	)
}

export default Form
