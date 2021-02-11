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
    overflow-x: hidden;
    margin: 0;
    background: #07106D;
    font-family: 'IBM Plex Sans', sans-serif;
  }

  input, textarea {
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
  button{
    font-size: 12px;
  }

  //headings responsive
  @media screen and (min-width: 500px){
    h1{
      font-size: 39.5px; //+3.5
    }
    h2{
      font-size: 27px; //+3
    }
    h3{
      font-size: 20.25px; //+2.25
    }
    button, p{
      font-size: 12.75px; //+0.75
    }
  }
  @media screen and (min-width: 600px){
    h1{
      font-size: 43px; //+3.5
    }
    h2{
      font-size: 30px; //+3
    }
    h3{
      font-size: 22.5px; //+2.25
    }
    button, p{
      font-size: 13.5px; //+0.75
    }
  }
  @media screen and (min-width: 700px){
    h1{
      font-size: 46.5px; //+3.5
    }
    h2{
      font-size: 33px; //+3
    }
    h3{
      font-size: 24.75px; //+2.25
    }
    button, p{
      font-size: 14.25px; //+0.75
    }
  }
  @media screen and (min-width: 800px){
    h1{
      font-size: 50px; //+3.5
    }
    h2{
      font-size: 36px; //+3
    }
    h3{
      font-size: 27px; //+2.25
    }
    button, p{
      font-size: 15px; //+0.75
    }
  }
  @media screen and (min-width: 900px){
    h1{
      font-size: 53.5px; //+3.5
    }
    h2{
      font-size: 39px; //+3
    }
    h3{
      font-size: 29.25px; //+2.25
    }
    button, p{
      font-size: 15.75px; //+0.75
    }
  }
  @media screen and (min-width: 1000px){
    h1{
      font-size: 57px; //+3.5
    }
    h2{
      font-size: 42px; //+3
    }
    h3{
      font-size: 31.5px; //+2.25
    }
    button, p{
      font-size: 16.5px; //+0.75
    }
  }
  @media screen and (min-width: 1100px){
    h1{
      font-size: 60.5px; //+3.5
    }
    h2{
      font-size: 45px; //+3
    }
    h3{
      font-size: 33.75px; //+2.25
    }
    button, p{
      font-size: 17.25px; //+0.75
    }
  }
  /* @media screen and (min-width: 1200px){
    h1{
      font-size: 64px; //+3.5
    }
    h2{
      font-size: 48px; //+3
    }
    h3{
      font-size: 36px; //+2.25
    }
    button, p{
      font-size: 18px; //+0.75
    }
  } */
  

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
