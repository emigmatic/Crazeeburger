import { Routes, Route } from "react-router-dom"
import { GlobalStyle } from "./style/Style"
import LoginPage from "./pages/Login/LoginPage"
import OrderPage from "./pages/Order/OrderPage"
import ErrorPage from "./pages/Error/ErrorPage"

function App() {
	return (
		<>
			<GlobalStyle />
			<Routes>
				<Route path="/" element={<LoginPage />} />
				<Route path="/order/:username" element={<OrderPage />} />
				<Route path="*" element={<ErrorPage />} />
			</Routes>
		</>
	)
}

export default App
