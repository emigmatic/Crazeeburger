import styled from "styled-components"
import Button from "../UI/Button"
import { theme } from "../../style/theme"
import { useOrderContext } from "../../context/Context"
import tabs from "./tabsConfig"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

function AdminTabs() {
	const { isCollapsed, setIsCollapsed, currentTab, setCurrentTab } =
		useOrderContext()

	const selectTab = (tab) => {
		setCurrentTab(tab)
		isCollapsed && setIsCollapsed(false)
	}

	return (
		<StyledAdminTabs>
			<StyledTab
				className={`icon ${isCollapsed ? "is-active" : ""}`}
				onClick={() => setIsCollapsed(!isCollapsed)}
			>
				{isCollapsed ? <FaChevronUp /> : <FaChevronDown />}
				<span className="is-hidden">
					{isCollapsed ? "Afficher" : "Masquer"}
				</span>
			</StyledTab>
			{tabs.map((tab, index) => (
				<StyledTab
					key={index}
					className={`icon ${
						currentTab === tab.index ? "is-active" : ""
					}`}
					onClick={() => selectTab(tab.index)}
				>
					{tab.icon}
					<span>{tab.label}</span>
				</StyledTab>
			))}
		</StyledAdminTabs>
	)
}

const StyledAdminTabs = styled.div`
	display: flex;
	gap: 1px;
	position: absolute;
	top: 0;
	left: 0;
	transform: translateY(-100%);
	padding-left: 4rem;
`

const StyledTab = styled(Button)`
	padding: 1rem 2rem;
	border: 1px solid ${theme.colors.greyLight};
	border-radius: 5px 5px 0 0;
	background-color: white;
	color: ${theme.colors.greySemiDark};

	&:hover {
		span {
			text-decoration: underline;
		}
	}

	&.is-active {
		background: ${theme.colors.background_dark};
		border-color: ${theme.colors.background_dark};
		color: white;
	}
`

export default AdminTabs
