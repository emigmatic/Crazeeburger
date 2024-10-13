/* eslint-disable react/prop-types */
import styled from "styled-components"
import { theme } from "../../../../style/theme"

function ImagePreview({ path, title }) {
	return (
		<StyledImagePreview>
			{path === "" ? <p>Aucune image</p> : <img src={path} alt={title} />}
		</StyledImagePreview>
	)
}

const StyledImagePreview = styled.div`
	grid-area: 1/1/4/2;
	display: flex;
	justify-content: center;
	align-items: center;

	img {
		max-width: 100%;
		width: 16rem;
		height: 12rem;
		object-fit: contain;
		object-position: center;
	}

	p {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100%;
		height: 100%;
		padding: 1rem;
		border: 1px solid ${theme.colors.greyLight};
		border-radius: 5px;
		color: ${theme.colors.greyDark};
	}
`

export default ImagePreview
