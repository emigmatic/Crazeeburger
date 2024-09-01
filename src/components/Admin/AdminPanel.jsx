import styled from "styled-components"
import { theme } from "../../style/theme"
import { useOrderContext } from "../../context/Context"

function AdminPanel() {
	const { currentTab } = useOrderContext()

	return <StyledAdminPanel>{currentTab}</StyledAdminPanel>
}

const StyledAdminPanel = styled.div`
	height: 25rem;
	background-color: white;
	border: 1px solid ${theme.colors.greyLight};
	box-shadow: 0px -5px 12px -2px rgba(0, 0, 0, 0.1);
`

export default AdminPanel
