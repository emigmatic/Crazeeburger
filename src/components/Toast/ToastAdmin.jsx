import { ToastContainer } from "react-toastify"
import styled from "styled-components"
import { theme } from "../../style/theme"

function ToastAdmin() {
	return <StyledToastAdmin />
}

const StyledToastAdmin = styled(ToastContainer).attrs({
	className: "toast-container",
	toastClassName: "toast",
	progressClassName: "progress",
})`
	/* .toast-container */
	max-width: 30rem;

	.progress {
		background-color: ${theme.colors.blue};
	}
`

export default ToastAdmin
