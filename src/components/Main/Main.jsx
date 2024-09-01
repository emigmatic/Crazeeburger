import styled from "styled-components"
import Basket from "../Basket"
import Menu from "../Menu"
import Admin from "../Admin/Admin"
import { useOrderContext } from "../../context/Context"

function Main() {
	const { isModeAdmin } = useOrderContext()

	return (
		<StyledMain>
			<Basket />
			<StyledMainContent>
				<Menu />
				{isModeAdmin && <Admin />}
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
