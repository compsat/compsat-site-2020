import { createGlobalStyle } from "styled-components";
import NavBar from "./NavBar";
import Meta from "./Meta";
import Footer from "./Footer";

const GlobalStyles = createGlobalStyle`
  html  {
    box-sizing: border-box;
  }

  *, *:before, *:after {
    box-sizing: border-box;
  }

  body {
    margin: 0;
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
    font-family: 'Rubik', serif;
    font-weight: bold;
    color: #F6F6F6;
    line-height: 150%;
    text-align: center;
  }

  h1{
    font-size: 36px;
    margin-bottom: 16px;
  }
  h2{
    font-size: 24px;
    margin-bottom: 12px;
  }
  h3{
    font-size: 18px;
    margin-bottom: 12px;
  }

  a {
    text-decoration: none;
    color: inherit;
    font-weight: 500;
    font-size: 12px;
  }

  p{
    color: #F6F6F6;
    font-weight: 500;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
    margin-bottom: 16px;
  }

  .main{
    min-height: 100vw;
    width: 100vw;
    padding: 0 24px;
    @media screen and (min-width: 500px){
      padding: 0 36px;
    }
    @media screen and (min-width: 600px){
      padding: 0 48px;
    }
    @media screen and (min-width: 700px){
      padding: 0 60px;
    }
    @media screen and (min-width: 800px){
      padding: 0 72px;
    }
    @media screen and (min-width: 900px){
      padding: 0 84px;
    }
    @media screen and (min-width: 1000px){
      padding: 0 96px;
    }
    @media screen and (min-width: 1100px){
      padding: 0 108px;
    }
    @media screen and (min-width: 1200px){
      padding: 0 128px;
    }
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
