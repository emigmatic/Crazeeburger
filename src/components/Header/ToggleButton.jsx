/* eslint-disable react/prop-types */
import styled from "styled-components"
import InputCheckbox from "../UI/InputCheckbox"
import { theme } from "../../style/theme"

function ToggleButton({ isChecked, onToggle }) {
	return (
		<StyledToggleButton checked={isChecked}>
			<InputCheckbox
				name="adminCheckbox"
				className="toggle"
				checked={isChecked}
				onChange={onToggle}
			/>
			<label htmlFor="adminCheckbox">
				{isChecked ? "Désactiver" : "Activer"} admin
			</label>
		</StyledToggleButton>
	)
}

const StyledToggleButton = styled.div`
	--height: 40px;
	--border-width: 2px;
	--circle-width: 30px;

	display: flex;
	margin: 0 2rem;

	input[type="checkbox"] {
		display: none;

		& + label {
			position: relative;
			display: inline-block;
			width: 16rem;
			height: var(--height);
			margin: 0;
			border: var(--border-width) solid ${theme.colors.background_dark};
			border-radius: 30px;
			color: ${(props) =>
				props.checked ? theme.colors.dark : theme.colors.primary};
			font-size: 1.2rem;
			font-weight: 700;
			text-transform: uppercase;
			line-height: var(--height);
			white-space: nowrap;
			text-overflow: ellipsis;
			overflow: hidden;
			cursor: pointer;
			transition: all 0.3s ease;

			&::before {
				content: "";
				position: absolute;
				top: 50%;
				transform: translateY(-50%);
				width: var(--circle-width);
				height: var(--circle-width);
				background-color: ${theme.colors.primary};
				border-radius: 50%;
				transition: all 0.3s ease;
			}
		}

		&:not(:checked) + label {
			padding: 0 1rem 0 var(--height);
			background-color: ${theme.colors.incognito};
			border-color: ${theme.colors.incognito};

			&::before {
				left: calc(var(--border-width) + 1px);
			}
		}

		&:checked + label {
			padding: 0 var(--height) 0 1rem;
			border-color: ${theme.colors.primary};

			&::before {
				left: calc(
					100% - (var(--border-width) + 1px) - var(--circle-width)
				);
			}
		}
	}
`

export default ToggleButton
