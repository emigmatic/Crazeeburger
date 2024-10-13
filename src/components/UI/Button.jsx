/* eslint-disable react/prop-types */
import { forwardRef } from "react"
import styled from "styled-components"

const Button = forwardRef(function Button(props, ref) {
	return (
		<StyledButton
			ref={ref}
			type={props.htmlType ? props.htmlType : "button"}
			disabled={props.disabled}
			className={props.className}
			onClick={props.onClick}
		>
			{props.children}
		</StyledButton>
	)
})

const StyledButton = styled.button`
	display: inline-block;
	padding: 1.25rem 2rem;
	border: 1px solid;
	font-size: 1.6rem;
	line-height: 1.15;
	appearance: none;
	cursor: pointer;

	&.icon {
		display: flex;
		justify-content: center;
		align-items: center;
		gap: 1rem;
	}
`

export default Button
