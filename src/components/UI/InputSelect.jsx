/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const InputSelect = forwardRef(function InputSelect(
	{ options, value, name, className, ...props },
	ref
) {
	return (
		<select
			ref={ref}
			value={value}
			id={name}
			name={name}
			className={`form-control ${className}`}
			{...props}
		>
			{options.map(({ label, value }, index) => (
				<option key={index} value={value}>
					{label}
				</option>
			))}
		</select>
	)
})

export default InputSelect
