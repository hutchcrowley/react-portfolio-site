import styled from 'styled-components'

export const HeaderContainer = styled.div`
	display: flex;
	justify-content: space-between;
	padding-bottom: 1.5rem;
	padding-top: 2rem;
	margin-right: 5rem;
	border-bottom: 2px solid black;

	@media (max-width: 640px) {
		display: ${({ isHome }) => (!isHome ? 'none' : 'flex')};
		flex-direction: column;
	}
`

export const Header = styled.div`
	display: flex;
    padding-top: 2rem;


	@media (max-width: 640px) {
		flex-direction: column;
		align-items: center;
	}
`

export const Image = styled.img`
	width: 300px;
	margin-left: -1.5rem;
	margin-right: 2.5rem;
	border-radius: 4px;
	margin-top: -2rem;
`

export const ViewResumeLink = styled.a`
	display: flex;
	text-decoration: none;
	padding: 0.75rem 1.5rem;
	font-weight: bold;
	align-items: center;
	justify-items: center;
	margin-top: 1rem;
	border: 2px solid #2ecc40;
	background-color: rgba(46, 204, 64, 0.3);
	transition: background-color 250ms ease;

	&:hover {
		background-color: #2ecc40;
	}

	svg {
		fill: #000;
		margin-left: 8px;
	}
`
