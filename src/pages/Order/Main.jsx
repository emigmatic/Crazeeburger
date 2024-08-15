import styled from "styled-components"
import { theme } from "../../style/theme"

function Main() {
	return <StyledMain>Hi</StyledMain>
}

const StyledMain = styled.main`
	flex: 1 0 auto;
	background-color: ${theme.colors.background_white};
	box-shadow: rgba(0, 0, 0, 0.2) 0 8px 20px 8px inset;
`

export default Main
