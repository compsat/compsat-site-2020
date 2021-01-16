import styled from "styled-components";

export const HeroWrapper = styled.div`
  width: 100vw;
  height: auto;
  margin: -56px 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background: linear-gradient(184.51deg, #5c184e 3.93%, #ee4266 98.67%);
  img {
    width: 100%;
    max-width: 600px;
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
  }
  @media screen and (min-width: 900px) {
    margin: -56px -84px 0;
    padding: 56px 84px;

    flex-direction: row-reverse;
    background: linear-gradient(184.51deg, #EE4266 3.93%, #5C184E 98.67%);
    img {
      max-width: 500px;
    }
  }
  @media screen and (min-width: 1000px) {
    margin: -56px -96px;
    padding: 56px 96px;
  }
  @media screen and (min-width: 1100px) {
    margin: -56px -108px;
    padding: 56px 108px;
  }
  @media screen and (min-width: 1200px) {
    margin: -56px -128px;
    padding: 160px 128px;
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
