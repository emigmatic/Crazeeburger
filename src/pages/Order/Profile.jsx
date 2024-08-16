import { Link, useParams } from "react-router-dom"
import styled from "styled-components"
import { theme } from "../../style/theme"
import { FaUserCircle } from "react-icons/fa"

function Profile() {
	const { username } = useParams()

	return (
		<StyledProfile>
			<div className="user-info">
				<p className="user-logged">
					Welcome <span>{username}</span> !
				</p>
				<p className="user-logout">
					{<Link to="/">Se déconnecter</Link>}
				</p>
			</div>
			<div className="user-picture">
				<FaUserCircle
					size="2.25em"
					color={`${theme.colors.greyBlue}`}
				/>
			</div>
		</StyledProfile>
	)
}

const StyledProfile = styled.div`
	display: flex;
	align-items: center;

	p {
		margin: 0;
		color: ${theme.colors.greyBlue};
	}

	.user-info {
		text-align: right;
	}

	.user-logged {
		span {
			font-weight: 600;
			color: ${theme.colors.primary};
		}
	}

	.user-logout {
		margin-top: 0.2rem;
		font-size: 0.75em;

		a {
			color: ${theme.colors.greyBlue};
			text-decoration: underline;

			&:hover {
				color: ${theme.colors.primary};
				text-decoration: none;
			}
		}
	}

	.user-picture {
		display: flex;
		margin-left: 1rem;
	}
`

export default Profile
