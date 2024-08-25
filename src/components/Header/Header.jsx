import { useState } from "react"
import Logo from "../UI/Logo"
import ToggleButton from "./ToggleButton"
import Profile from "./Profile"
import { toast } from "react-toastify"
import styled from "styled-components"
import { theme } from "../../style/theme"

function Header() {
	const [isModeAdmin, setIsModeAdmin] = useState(false)

	const displayToastNotification = () => {
		if (!isModeAdmin) {
			toast.info("Mode admin activé", {
				theme: "dark",
				position: "bottom-right",
				autoClose: 3000,
				hideProgressBar: false,
				closeOnClick: true,
				pauseOnHover: true,
				draggable: true,
				progress: undefined,
			})
		}
		setIsModeAdmin(() => !isModeAdmin)
	}

	return (
		<StyledHeader>
			<StyledH1>
				<Logo />
			</StyledH1>
			<StyledHeaderContent>
				<ToggleButton
					isChecked={isModeAdmin}
					onToggle={displayToastNotification}
				/>
				<Profile />
			</StyledHeaderContent>
		</StyledHeader>
	)
}

const StyledHeader = styled.header`
	display: flex;
	justify-content: space-between;
	padding: 2rem 1.5rem;
	border-bottom: 1px solid ${theme.colors.greyLight};
`

const StyledH1 = styled.h1`
	margin: 0;
	font-size: 3.6rem;
`

const StyledHeaderContent = styled.div`
	display: flex;
	align-items: center;
`

export default Header
