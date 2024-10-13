/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const InputText = forwardRef(function InputText(
	{ value, type, name, className, ...props },
	ref
) {
	return (
		<input
			ref={ref}
			value={value}
			type={type ? type : "text"}
			id={name}
			name={name}
			className={`form-control ${className}`}
			{...props}
		/>
	)
})

export default InputText
