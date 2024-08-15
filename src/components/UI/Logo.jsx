import { styled } from "styled-components"
import { theme } from "../../style/theme"
import logoImg from "../../assets/images/logo.png"

const Logo = () => {
	return (
		<StyledLogo>
			<span>Crazee</span> <span>Burger</span>
		</StyledLogo>
	)
}

const StyledLogo = styled.div`
	display: flex;
	align-items: center;
	font-size: 1em;
	font-weight: 700;
	line-height: 1;
	color: ${theme.colors.primary};

	span + span {
		display: flex;
		align-items: center;

		&::before {
			content: "";
			display: block;
			background: transparent url(${logoImg}) center no-repeat;
			background-size: contain;
			height: 1.5em;
			width: 2.4em;
		}
	}
`

export default Logo
