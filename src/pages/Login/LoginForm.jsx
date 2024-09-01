import { useState } from "react"
import { useNavigate } from "react-router-dom"
import styled from "styled-components"
import InputText from "../../components/UI/InputText"
import Button from "../../components/UI/Button"
import { theme } from "../../style/theme"
import media from "../../style/breakpoints"
import { FaChevronRight } from "react-icons/fa"

function LoginForm() {
	const [username, setUsername] = useState("")

	const navigate = useNavigate()

	const handleChange = (e) => {
		setUsername(e.target.value)
	}

	const handleSubmit = (e) => {
		e.preventDefault()
		navigate(`/order/${username}`)
	}

	return (
		<>
			<StyledH2>Connectez-vous</StyledH2>
			<form onSubmit={handleSubmit}>
				<StyledFormGroup className="form-group fa fa-user-circle">
					<label htmlFor="username">Nom :</label>
					<StyledInputText
						placeholder="Entrez votre nom"
						required
						name="username"
						value={username}
						onChange={handleChange}
					/>
				</StyledFormGroup>
				<StyledButton htmlType="submit" className="icon">
					<span>Accéder à mon espace</span>
					<FaChevronRight size="1em" />
				</StyledButton>
			</form>
		</>
	)
}

const StyledH2 = styled.h2`
	margin: 4.5rem auto 1.5rem;
	font-family: ${theme.fonts.family.typo2};
	font-size: 3.2rem;
	line-height: 1.2;

	${media.md`
		font-size: 3.6rem;
	`}
`

const StyledFormGroup = styled.div`
	position: relative;
	width: 100%;

	&::before {
		position: absolute;
		left: 1rem;
		top: 50%;
		transform: translateY(-50%);
		font-size: 1.8rem;
		color: ${theme.colors.greySemiDark};
	}

	label {
		display: none;
	}
`

const StyledInputText = styled(InputText)`
	display: block;
	width: 100%;
	padding: 1rem 1rem 1rem 4rem;
	background-color: #fff;
	border-radius: 5px;
	border: 0 none;
	font-size: 1.6rem;
	line-height: 1.5;

	${media.md`
		font-size: 1.8rem;
	`}
`

const StyledButton = styled(Button)`
	width: 100%;
	margin-top: 1.5rem;
	background-color: ${theme.colors.primary};
	border-color: ${theme.colors.primary};
	border-radius: 5px;
	color: white;
	font-size: 1.6rem;
	font-weight: 700;

	&:hover {
		background-color: white;
		color: ${theme.colors.primary};
	}

	${media.md`
		font-size: 1.8rem;
	`}
`

export default LoginForm
