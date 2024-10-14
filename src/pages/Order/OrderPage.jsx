import OrderContextProvider from "../../context/OrderContext"
import Header from "../../components/Header/Header"
import Main from "../../components/Main/Main"
import { styled } from "styled-components"
import { theme } from "../../style/theme"
import ToastAdmin from "../../components/Toast/ToastAdmin"
import "react-toastify/dist/ReactToastify.css"

function OrderPage() {
	return (
		<OrderContextProvider>
			<StyledOrderPage>
				<StyledContainer>
					<Header />
					<Main />
					<ToastAdmin />
				</StyledContainer>
			</StyledOrderPage>
		</OrderContextProvider>
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
	overflow: hidden;
`

export default OrderPage
