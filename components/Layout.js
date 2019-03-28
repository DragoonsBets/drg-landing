import Head from 'next/head'

export default ({ children, title = 'This is the default title' }) => (
	<React.Fragment>
		<Head>
			<title>{title}</title>
			<meta charSet='utf-8' />
			<meta name='viewport' content='initial-scale=1.0, width=device-width' />
			<link
				rel='stylesheet'
				href='//cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.2.11/semantic.min.css'
			/>
		</Head>
		{/* <header>
			<nav>
			    some navigation
			</nav>
		</header> */}
		{children}
		{/* <footer>
            some footer
        </footer> */}
	</React.Fragment>
)
