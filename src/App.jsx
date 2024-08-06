import styled from "styled-components"
import { GlobalStyle } from "./style/Style"
import LoginPage from "./pages/Login/LoginPage"

function App() {
	return (
		<>
			<GlobalStyle />
			<PageLogin></PageLogin>
		</>
	)
}

const PageLogin = styled(LoginPage)`
	max-width: 980px;
	margin: 0 auto;
`

export default App
