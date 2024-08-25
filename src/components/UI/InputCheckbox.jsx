/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const InputCheckbox = forwardRef(function InputCheckbox(
	{ name, className, checked, onChange },
	ref
) {
	return (
		<input
			ref={ref}
			type="checkbox"
			id={name}
			className={`form-check-input ${className}`}
			checked={checked}
			onChange={onChange}
		/>
	)
})

export default InputCheckbox
