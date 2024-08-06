import { styled } from "styled-components"
import Logo from "../../components/UI/Logo"
import LoginForm from "./LoginForm"
import Bg from "../../assets/images/burger-background.jpg"
import media from "../../style/breakpoints"

function LoginPage() {
	return (
		<LoginPageWrapper>
			<StyledH1>
				<Logo />
			</StyledH1>
			<LoginPageContent>
				<IntroTxt>Bienvenue chez nous !</IntroTxt>
				<LoginForm />
			</LoginPageContent>
		</LoginPageWrapper>
	)
}

const LoginPageWrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	min-height: 100vh;
	padding: 4.5rem 15px;
	background-color: rgba(0, 0, 0, 0.6);
	background-image: url(${Bg});
	background-blend-mode: darken;
	background-position: center;
	background-size: cover;
`

const LoginPageContent = styled.div`
	width: 100%;
	max-width: 44rem;
	margin: 0 auto;
	padding: 0 1.5rem;
	color: white;
	text-align: center;

	${media.md`
		padding: 0 3rem;
	`}
`

const StyledH1 = styled.h1`
	margin: 0;
	font-size: 4.5em;

	${media.md`
		font-size: 9em;
	`}
`

const IntroTxt = styled.p`
	margin: 4.5rem auto;
	padding-bottom: 3rem;
	border-bottom: 2px solid rgb(245, 106, 44);
	font-size: 4rem;
	font-weight: 700;
	line-height: 1.15;

	${media.md`
		font-size: 4.8rem;
	`}
`

export default LoginPage
