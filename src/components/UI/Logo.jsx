import { styled } from "styled-components"
import LogoBurger from "../../assets/images/logo.png"

function Logo() {
	return (
		<LogoWrapper>
			<span>Crazee</span>
			<img src={LogoBurger} alt="logo burger" />
			<span>Burger</span>
		</LogoWrapper>
	)
}

const LogoWrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	margin: 0 auto;
	font-size: 1em;
	font-weight: 700;
	color: rgb(255, 160, 27);
	line-height: 1;

	img {
		height: 1.5em;
		width: auto;
		max-width: 100%;
		margin: 0 0.1em;
	}
`

export default Logo
