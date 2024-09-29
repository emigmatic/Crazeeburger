/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const InputText = forwardRef(function InputText(
	{ type, name, className, ...props },
	ref
) {
	return (
		<input
			ref={ref}
			type={type ? type : "text"}
			id={name}
			name={name}
			className={`form-control ${className}`}
			{...props}
		/>
	)
})

export default InputText
