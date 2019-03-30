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
	text-align: center;
`

const VideoWrapper = styled.div`
	margin: 50px 0;
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
					<Typography h={2} weight='bold' size='mega'>
						LET THE GAMES BEGIN!
					</Typography>
					<Typography h={3} weight='thin' size='title'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi
						facilis exercitationem sed.
					</Typography>
					<DButton large='true'>Action Button!</DButton>
					<VideoWrapper>
						<Player {...videoJsOptions} />
					</VideoWrapper>
				</LandingWrapper>
			</Layout>
		)
	}
}
