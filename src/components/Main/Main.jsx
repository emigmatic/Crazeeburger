import styled from "styled-components"
import Basket from "./Basket/Basket"
import Menu from "./Menu/Menu"
import Admin from "../Admin/Admin"
import { useOrderContext } from "../../context/Context"

function Main() {
	const { isAdminMode } = useOrderContext()

	return (
		<StyledMain>
			<Basket />
			<StyledMainContent>
				<Menu />
				{isAdminMode && <Admin />}
			</StyledMainContent>
		</StyledMain>
	)
}

const StyledMain = styled.main`
	flex: 1;
	overflow: hidden;
`

const StyledMainContent = styled.div`
	position: relative;
	height: 100%;
`

export default Main
