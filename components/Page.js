import { createGlobalStyle } from 'styled-components'
import NavBar from "./NavBar";
import Meta from './Meta'

const GlobalStyles = createGlobalStyle`
  html  {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: inherit;
  }

  body {
    margin: 0;
    padding: 0 24px;
    background: #07106D
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  span
      {
      margin: 0;
      padding: 0;
  }

  a {
    text-decoration: none;
    color: inherit
  }
`

const Page = ({ children }) => (
	<React.Fragment>
		<GlobalStyles />
		<Meta />
		<NavBar />
		<div className='main'>{children}</div>
	</React.Fragment>
)

export default Page
