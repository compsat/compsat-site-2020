import styled from "styled-components";

export const EventCategoryWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 32px;
  background: ${props => (withBackground ? `linear-gradient(180deg, #07106d -0.11%, #ee4266 99.89%)` : null)};

  width: 100vw;
  padding: 32px 24px;
  margin: 0 -24px;

  .ecbg {
    display: none;
  }

  @media screen and (min-width: 500px) {
    margin: 0 -36px;
    padding: 32px 36px;
  }
  @media screen and (min-width: 600px) {
    margin: 0 -48px;
    padding: 32px 48px;
  }
  @media screen and (min-width: 700px) {
    margin: 0 -60px;
    padding: 32px 60px;
  }
  @media screen and (min-width: 800px) {
    margin: 0 -72px;
    padding: 64px 72px 200px;
    background: none;
    .ecbg {
      margin: 0 -72px;
      display: ${props => (withBackground ? `inline-block` : null)};
      position: absolute;
      z-index: -1;
      svg{
        height: 100%;
        max-height: 750px;
        width: 100vw;
      }
    }
  }
  @media screen and (min-width: 900px) {
    margin: 0 -84px;
    padding: 64px 84px 200px;
    .ecbg {
      margin: 0 -84px;
    }
  }
  @media screen and (min-width: 1000px) {
    margin: 0 -96px;
    padding: 64px 96px 200px;
    .ecbg {
      margin: 0 -96px;
    }
  }
  @media screen and (min-width: 1100px) {
    margin: 0 -108px;
    padding: 64px 108px 200px;
    .ecbg {
      margin: 0 -108px;
    }
  }
  @media screen and (min-width: 1200px) {
    margin: 0 -128px;
    padding: 64px 128px 200px;
    .ecbg {
      margin: 0 -128px;
    }
  }
`;
