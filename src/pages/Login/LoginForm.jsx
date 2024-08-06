import { useState } from "react"
import styled from "styled-components"
import InputText from "../../components/UI/InputText"
import Button from "../../components/UI/Button"
import media from "../../style/breakpoints"

function LoginForm() {
	const [username, setUsername] = useState("")

	const handleChange = (e) => {
		setUsername(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		console.log(`Hello ${username}`)
	}

	return (
		<>
			<StyledH2>Connectez-vous</StyledH2>
			<form onSubmit={handleSubmit}>
				<StyledInputText
					value={username}
					onChange={handleChange}
					placeholder="Entrez votre nom"
				/>
				<StyledButton htmlType="submit">
					Accéder à mon espace
				</StyledButton>
			</form>
		</>
	)
}

const StyledH2 = styled.h2`
	margin: 4.5rem auto 1.5rem;
	font-size: 3.2rem;
	line-height: 1.2;

	${media.md`
		font-size: 3.6rem;
	`}
`

const StyledInputText = styled(InputText)`
	display: block;
	width: 100%;
	padding: 1rem 1.5rem 1rem 4.5rem;
	background-color: #fff;
	border-radius: 5px;
	border: 0 none;
	font-size: 1.6rem;
	line-height: 1.5;
`

const StyledButton = styled(Button)`
	display: block;
	width: 100%;
	margin-top: 1.5rem;
	padding: 1rem 1.5rem;
	background-color: rgb(255, 160, 27);
	border: 0 none;
	border-radius: 5px;
	color: white;
	font-size: 1.6rem;
	font-weight: 700;
	line-height: 1.5;
	cursor: pointer;

	&:hover {
		background-color: white;
		color: rgb(255, 160, 27);
	}
`

export default LoginForm
