import styled from "styled-components"
import { theme } from "../../../style/theme"
import { useOrderContext } from "../../../context/Context"
import { tabs } from "../tabsConfig"

function AdminPanel() {
	const { currentTab } = useOrderContext()

	const getCurrentPanel = (tabs, currentTab) => {
		const { panel } = tabs.find((tab) => tab.index === currentTab)
		return panel
	}

	const currentPanel = getCurrentPanel(tabs, currentTab)

	return <StyledAdminPanel>{currentPanel && currentPanel}</StyledAdminPanel>
}

const StyledAdminPanel = styled.div`
	padding: 3rem 4rem;
	background-color: white;
	border: 1px solid ${theme.colors.greyLight};
	box-shadow: 0px -5px 12px -2px rgba(0, 0, 0, 0.1);
`

export default AdminPanel
