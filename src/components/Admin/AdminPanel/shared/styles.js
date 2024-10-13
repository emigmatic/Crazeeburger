import styled from "styled-components"
import { theme } from "../../../../style/theme"
import media from "../../../../style/breakpoints"
import InputText from "../../../UI/InputText"
import Button from "../../../UI/Button"

export const StyledForm = styled.form`
	display: grid;
	grid-template-columns: repeat(4, 1fr);
	grid-template-rows: repeat(4, 1fr);
	gap: 1rem 2rem;
`

export const StyledFormGroup = styled.div`
	position: relative;
	grid-area: 1 / 2 / 1 / 5;

	&::before {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.8rem;
		color: ${theme.colors.greySemiDark};
		pointer-events: none;
	}

	&.product-name {
		grid-area: 1 / 2 / 1 / 5;
	}

	&.image-source {
		grid-area: 2 / 2 / 2 / 5;
	}

	&.price {
		grid-area: 3 / 2 / 3 / 3;
	}

	label {
		display: none;
	}
`

export const StyledInput = styled(InputText)`
	display: block;
	width: 100%;
	padding: 1rem 1rem 1rem 4rem;
	background-color: ${theme.colors.background_white};
	border-radius: 5px;
	border: 0 none;
	font-size: 1.6rem;
	line-height: 1;

	${media.md`
		font-size: 1.8rem;
	`}
`

export const StyledFormFooter = styled.div`
	grid-area: 4 / 2 / 4 / 5;
	display: flex;
	align-items: center;
	gap: 2rem;
`

export const StyledButton = styled(Button)`
	flex: 0 0 50%;
	max-width: 50%;
	padding: 1rem 2rem;
	background-color: ${theme.colors.primary};
	border-color: ${theme.colors.primary};
	border-radius: 5px;
	color: white;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 1;

	&:hover {
		background-color: white;
		color: ${theme.colors.primary};
	}

	${media.md`
		font-size: 1.8rem;
	`}
`
