import styled from "styled-components"
import { theme } from "../../style/theme"
import Basket from "../../components/Basket"
import Menu from "../../components/Menu"

function Main() {
	return (
		<StyledMain>
			<Menu />
		</StyledMain>
	)
}

const StyledMain = styled.main`
	flex: 1;
	overflow-y: auto;
`

export default Main
