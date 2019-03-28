import React from 'react'
import styled from 'styled-components'
import Layout from '../components/Layout'
import { Button } from 'semantic-ui-react'

const XButton = styled(Button)`
	border: 1px solid gray;
`

export default () => (
	<Layout title='landing'>
		<XButton>Test</XButton>
	</Layout>
)
