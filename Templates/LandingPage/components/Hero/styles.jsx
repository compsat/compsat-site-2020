import styled from "styled-components";

export const HeroWrapper = styled.div`
  overflow: hidden;
  width: 100%;
  height: auto;
  margin: -56px 0 64px;
  display: flex;
  flex-direction: column;
  align-items: center;
  img {
    width: 100%;
    max-width: 600px;
  }
  @media screen and (min-width: 500px) {
    margin: -112px 0 64px;
  }
  @media screen and (min-width: 700px) {
    margin: -168px 0 64px;
  }
  @media screen and (min-width: 900px) {
    margin: 0 0 64px;
    /* flex-direction: row-reverse; */
    img {
      position: absolute;
      right: -10%;
      top: 0;
      width: 50%;
      z-index: -1;
    }
    display: grid;
    grid-template-columns: 1.25fr 0.6fr;
    grid-template-rows: auto;
    grid-template-areas: ". image" "text image";
  }
  @media screen and (min-width: 1300px) {
    img {
      right: -5%;
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
  @media screen and (max-width: 500px) {
    h1 {
      font-size: 24px;
    }
  }
  @media screen and (min-width: 900px) {
    grid-area: text;
    justify-self: start;
    align-items: flex-start;
    h1,
    p {
      text-align: left !important;
      max-width: 700px;
    }
  }
`;
