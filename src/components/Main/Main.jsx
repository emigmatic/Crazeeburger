import styled from "styled-components"
import Basket from "../Basket"
import Menu from "../Menu"

function Main() {
	return (
		<StyledMain>
			<Basket />
			<Menu />
		</StyledMain>
	)
}

const StyledMain = styled.main`
	flex: 1;
	overflow: hidden;
`

export default Main
