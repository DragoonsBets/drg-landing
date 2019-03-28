import React from 'react'
import styled from 'styled-components'
import { Button } from 'semantic-ui-react'

const DButtonWrapper = styled(Button)`
	display: flex;
	font-weight: bold;
	color: white;
	font-size: ${props =>
		props.large ? '18px' : props.small ? '16px' : 'inherit'};
	padding: ${props =>
		props.large ? '12px 16px' : props.small ? '7px 14px' : '8px'};
	border-radius: 4px;
	min-width: ${props => (props.large ? '88px' : props.small ? '80px' : '0')};
	background-image: linear-gradient(to right, #982d4e, #512b65);
	:hover {
		background-image: linear-gradient(to right, #982d4e, #512b65);
		color: white;
	}
	:focus {
		color: white;
	}
	span:nth-child(1) {
		font-size: ${props =>
			props.large ? '12px' : props.small ? '10px' : 'inherit'};
		margin: ${props =>
			props.large ? '0 6px 0 0' : props.small ? '0 5px 0 0' : '0'};
		display: ${props => (props.star ? 'inline' : 'none')};
	}
	span:nth-child(2) {
		font-size: ${props =>
			props.large ? '30px' : props.small ? '25px' : 'inherit'};
		margin: ${props =>
			props.large ? '0 0 0 6px' : props.small ? '0 0 0 5px' : '0'};
		display: ${props => (props.arrow ? 'inline' : 'none')};
	}
`

function DButton(props) {
	return (
		<DButtonWrapper
			large={props.large}
			small={props.small}
			star={props.star}
			arrow={props.arrow}>
			<span>★</span>
			{props.children}
			<span>ˑ</span>
		</DButtonWrapper>
	)
}

export default DButton
