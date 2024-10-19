import styled from "styled-components"
import { theme } from "../../../../style/theme"
import media from "../../../../style/breakpoints"
import InputText from "../../../UI/InputText"
import Button from "../../../UI/Button"
import InputSelect from "../../../UI/InputSelect"

export const StyledForm = styled.form`
	${media.md`
		display: grid;
		grid-template-columns: repeat(4, 1fr);
		grid-template-rows: repeat(4, 1fr);
		gap: 1rem 2rem;
	`}
`

export const StyledFormGroup = styled.div`
	position: relative;
	width: 100%;
	margin-top: 1rem;

	&::before {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.8rem;
		color: ${theme.colors.greySemiDark};
		pointer-events: none;
	}

	label {
		display: none;
	}

	${media.md`
		grid-area: 1 / 2 / 1 / 5;
		margin: 0;

		&.product-name {
			grid-area: 1 / 2 / 1 / 5;
		}

		&.image-source {
			grid-area: 2 / 2 / 2 / 5;
		}

		&.price {
			grid-area: 3 / 2 / 3 / 3;
		}

		&.avaibility {
			grid-area: 3 / 3 / 3 / 4;
		}

		&.advertising {
			grid-area: 3 / 4 / 3 / 5;
		}
	`}
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

export const StyledSelect = styled(InputSelect)`
	display: block;
	width: 100%;
	padding: 1rem 2rem 1rem 4rem;
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
	margin: 1rem 0 0;

	${media.md`
		margin: 0;
	`}
`

export const StyledButton = styled(Button)`
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
		flex: 0 0 50%;
		max-width: 50%;
		font-size: 1.8rem;
	`}
`
