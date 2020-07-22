import { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";
import Meta from "./Meta";
import Footer from "./Footer";

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
    background: #07106D;
    font-family: 'IBM Plex Sans', sans-serif;
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6{
    font-family: 'Rubik', sans-serif;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 12px;
  }

  p{
    color: inherit;
    font-weight: 500;
    font-size: 12px;
    line-height: 16px;
  }

  .main{
    min-height: 100vw;
  }
`;

const Page = ({ children }) => (
  <React.Fragment>
    <GlobalStyles />
    <Meta />
    <NavBar />
    <div className="main">{children}</div>
    <Footer />
  </React.Fragment>
);

export default Page;
