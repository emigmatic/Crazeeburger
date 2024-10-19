import { useOrderContext } from "../../../context/Context"
import Button from "../../UI/Button"
import styled from "styled-components"
import media from "../../../style/breakpoints"
import { theme } from "../../../style/theme"
import { tabs } from "../tabsConfig"
import { FaChevronDown, FaChevronUp } from "react-icons/fa"

function AdminTabs() {
	const { isCollapsed, setIsCollapsed, currentTab, setCurrentTab } =
		useOrderContext()

	const selectTab = async (tab) => {
		setCurrentTab(tab)
		isCollapsed && setIsCollapsed(false)
	}

	return (
		<StyledAdminTabs>
			<StyledTab
				className={`collapse icon ${isCollapsed ? "is-active" : ""}`}
				onClick={() => setIsCollapsed(!isCollapsed)}
			>
				{isCollapsed ? <FaChevronUp /> : <FaChevronDown />}
				<span>{isCollapsed ? "Afficher" : "Masquer"}</span>
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
	bottom: 100%;
	left: 0;
	padding-left: 4rem;
`

const StyledTab = styled(Button)`
	padding: 1rem 2rem;
	border: 1px solid ${theme.colors.greyLight};
	border-radius: 5px 5px 0 0;
	background-color: white;
	box-shadow: 0px -5px 12px -2px rgba(0, 0, 0, 0.1);
	color: ${theme.colors.greySemiDark};

	&.collapse {
		span {
			display: none;
		}
	}

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
	span {
		display: none;
	}

	${media.md`
		span { display: block; }
	`}
`

export default AdminTabs
