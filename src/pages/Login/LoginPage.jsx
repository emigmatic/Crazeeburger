import { styled } from "styled-components"
import Logo from "../../components/UI/Logo"
import LoginForm from "./LoginForm"
import Bg from "../../assets/images/burger-background.jpg"
import media from "../../style/breakpoints"
import { theme } from "../../style/theme"

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
	padding: 3rem 1rem;
	background-color: rgba(0, 0, 0, 0.6);
	background-image: url(${Bg});
	background-blend-mode: darken;
	background-position: center;
	background-size: cover;

	${media.md`
		padding: 4.5rem 2rem;
	`}
`

const LoginPageContent = styled.div`
	width: 100%;
	max-width: 44rem;
	margin: 0 auto;
	padding: 0 2rem;
	color: white;
	text-align: center;

	${media.md`
		padding: 0 4rem;
	`}
`

const StyledH1 = styled.h1`
	margin: 0 auto;
	font-size: 3em;
	line-height: 1;

	${media.md`
		font-size: 6em;
	`}
`

const IntroTxt = styled.p`
	margin: 4.5rem auto;
	padding-bottom: 3rem;
	border-bottom: 2px solid ${theme.colors.loginLine};
	font-family: ${theme.fonts.family.typo2};
	font-size: 4rem;
	font-weight: 700;
	line-height: 1.15;

	${media.md`
		font-size: 4.8rem;
	`}
`

export default LoginPage
