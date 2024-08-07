/* eslint-disable react/prop-types */
import { forwardRef } from "react"

const Button = forwardRef(function Button(props, ref) {
	return (
		<button
			ref={ref}
			type={props.htmlType ? props.htmlType : "button"}
			className={props.className}
			onClick={props.onClick}
		>
			{props.children}
		</button>
	)
})

export default Button
