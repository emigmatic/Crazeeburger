import { Link, useParams } from "react-router-dom"

function OrderPage() {
	const { username } = useParams()

	return (
		<>
			<h1>Hello {username}</h1>
			<Link to="/">Retour à l´accueil</Link>
		</>
	)
}

export default OrderPage
