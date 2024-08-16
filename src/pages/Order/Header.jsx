import styled from "styled-components"
import Logo from "../../components/UI/Logo"
import Profile from "./Profile"
import { theme } from "../../style/theme"

function Header() {
	return (
		<StyledHeader>
			<StyledH1>
				<Logo />
			</StyledH1>
			<Profile />
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 2rem 1.5rem;
	border-bottom: 1px solid ${theme.colors.greyLight};
`

const StyledH1 = styled.h1`
	margin: 0;
	font-size: 3.6rem;
`

export default Header
