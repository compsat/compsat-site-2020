import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(184.51deg, #5c184e 3.93%, #ee4266 98.67%);
  img {
    width: 100%;
    max-width: 600px;
  }
  .ehbg {
    display: none;
    position: absolute;
    top: 0;
    margin: 0 auto;
  }

  padding: 56px 24px;
  margin: -56px -24px 0;
  @media screen and (min-width: 500px) {
    margin: -56px -36px 0;
    padding: 56px 36px;
  }
  @media screen and (min-width: 600px) {
    margin: -56px -48px 0;
    padding: 56px 48px;
  }
  @media screen and (min-width: 700px) {
    margin: -56px -60px 0;
    padding: 56px 60px;
  }
  @media screen and (min-width: 800px) {
    margin: -56px -72px 0;
    padding: 56px 72px;
    flex-direction: row-reverse;
    background: none;
    .ehbg {
      margin: 0 -72px;
      display: inline-block;
      position: absolute;
      z-index: -1;
      svg{
        height: 100%;
        /* max-height: 750px; */
        width: 100vw;
      }
    }
    img {
      max-width: 500px;
    }
  }
  @media screen and (min-width: 900px) {
    margin: -56px -84px 0;
    padding: 56px 84px;
    .ehbg {
      margin: 0 -84px;
    }
  }
  @media screen and (min-width: 1000px) {
    margin: -64px 0 -96px;
    padding: 64px 96px 200px;
    .ehbg {
      margin: 0 -96px;
    }
  }
  @media screen and (min-width: 1100px) {
    margin:  -64px 0 -108px;
    padding: 64px 108px 200px;
    .ehbg {
      margin: 0 -108px;
    }
  }
  @media screen and (min-width: 1200px) {
    margin:  -64px 0 -128px;
    padding: 64px 128px 200px;
    .ehbg {
      margin: -10px -128px;
    }
  }
`;

export const HeroTextWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 24px 0 0;
  @media screen and (min-width: 900px) {
      align-items: flex-start;
    h1,
    p {
      text-align: left !important;
      max-width: 650px;
    }
  }
`;
