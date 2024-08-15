import { styled } from "styled-components"
import { theme } from "../../style/theme"
import Header from "./Header"
import Main from "./Main"

function OrderPage() {
	return (
		<StyledOrderPage>
			<StyledContainer>
				<Header></Header>
				<Main></Main>
			</StyledContainer>
		</StyledOrderPage>
	)
}

const StyledOrderPage = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	height: 100vh;
	padding: 3rem 0;
	background-color: ${theme.colors.primary_burger};
`

const StyledContainer = styled.div`
	display: flex;
	flex-direction: column;
	width: 100%;
	max-width: 120rem;
	height: 100%;
	border-radius: 15px;
	background-color: white;
`

export default OrderPage
