/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const InputText = forwardRef(function InputText(
	{ placeholder, icon, className, value, onChange },
	ref
) {
	return (
		<input
			ref={ref}
			type="text"
			placeholder={placeholder}
			value={value}
			onChange={onChange}
			className={className}
			required
		/>
	)
})

export default InputText
