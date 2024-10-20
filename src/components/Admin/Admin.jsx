import styled from "styled-components"
import AdminPanel from "./AdminPanel/AdminPanel"
import AdminTabs from "./AdminTabs/AdminTabs"
import { useOrderContext } from "../../context/Context"

function Admin() {
	const { isCollapsed } = useOrderContext()

	return (
		<StyledAdmin>
			<AdminTabs></AdminTabs>
			{!isCollapsed && <AdminPanel />}
		</StyledAdmin>
	)
}

const StyledAdmin = styled.div`
	position: absolute;
	bottom: 0;
	left: 0;
	right: 0;
	z-index: 10;
`

export default Admin
