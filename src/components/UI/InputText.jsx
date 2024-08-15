/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const InputText = forwardRef(function InputText(
	{ name, className, ...props },
	ref
) {
	return (
		<input
			ref={ref}
			type="text"
			id={name}
			className={`form-control ${className}`}
			{...props}
		/>
	)
})

export default InputText
