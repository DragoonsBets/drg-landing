import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import Typography from '../components/Typography'
import DButton from '../components/Buttons'
import Player from '../components/Player'

const LandingWrapper = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
`

const Hero = styled.div`
	@media (min-width: 900px) {
		display: flex;
		align-items: center;
		width: 100%;
	}
	> div {
		flex: 1;
	}
	> div:nth-child(1) {
		@media (min-width: 900px) {
			margin: 0 30px 0 0;
		}
		margin: 0 0 30px 0;
	}
	> div div {
		width: 100%;
		height: 400px;
		background-color: lightgrey;
	}
`

const VideoWrapper = styled.div`
	margin: 50px 0;
`

const Mission = styled.div`
	text-align: center;
`

const Features = styled.div`
	display: flex;
	text-align: center;
	justify-content: center;
	flex-wrap: wrap;
	margin: 60px 0 0 0;
	> div {
		display: flex;
		flex-direction: column;
		align-items: center;
		margin: 0 0 50px 0;
		width: 100%;
		@media (min-width: 660px) {
			width: 300px;
		}
	}
	> div:nth-child(1) {
		@media (min-width: 660px) {
			margin: 0 20px 50px 0;
		}
	}
	> div:nth-child(2) {
		@media (min-width: 978px) {
			margin: 0 20px 50px 0;
		}
	}
	> div > div:nth-child(1) {
		width: 300px;
		background-color: lightgray;
		height: 200px;
	}
`

export default class Landing extends React.Component {
	render() {
		const videoJsOptions = {
			techOrder: ['youtube'],
			autoplay: false,
			controls: true,
			width: '1300',
			height: '500',
			sources: [
				{
					src: 'https://www.youtube.com/watch?v=jSJr3dXZfcg',
					type: 'video/youtube'
				}
			]
		}
		return (
			<Layout
				title='Landing title'
				description='A description about the landing page'>
				<LandingWrapper>
					<Hero>
						<div>
							{/* <img src='/static/dragon.png' alt='' /> */}
							<div />
						</div>
						<div>
							<Typography h={2} weight='bold' size='jumbo'>
								LET THE GAMES BEGIN!
							</Typography>
							<Typography h={3} weight='thin' size='title'>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
								enim ad minim veniam, quis nostrud exercitation ullamco laboris.
							</Typography>
							<DButton large='true'>Action Button!</DButton>
						</div>
					</Hero>
					<VideoWrapper>
						<Player {...videoJsOptions} />
					</VideoWrapper>
					<Mission>
						<Typography h={2} weight='bold' size='jumbo'>
							CATCHY TEXT HERE
						</Typography>
						<Typography h={3} weight='thin' size='title'>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
							eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
							enim ad minim veniam, quis nostrud exercitation ullamco laboris
							nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
							reprehenderit in voluptate velit esse cillum dolore eu fugiat
							nulla pariatur. Excepteur sint occaecat cupidatat non proident,
							sunt in culpa qui officia deserunt mollit anim id est laborum.
						</Typography>
					</Mission>
					<Features>
						<div>
							<div />
							<Typography h={4} weight='bold' size='headline'>
								Desafía a otros gamers
							</Typography>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<DButton small='true'>Leer más</DButton>
						</div>
						<div>
							<div />
							<Typography h={4} weight='bold' size='headline'>
								Gana votando
							</Typography>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<DButton small='true'>Leer más</DButton>
						</div>
						<div>
							<div />
							<Typography h={4} weight='bold' size='headline'>
								Apoya a tu comunidad
							</Typography>
							<p>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
								eiusmod tempor incididunt ut labore et dolore magna aliqua.
							</p>
							<DButton small='true'>Leer más</DButton>
						</div>
					</Features>
				</LandingWrapper>
			</Layout>
		)
	}
}
