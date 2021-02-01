import styled from "styled-components";

export const WWDWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: linear-gradient(180deg, #07106d -0.11%, #ee4266 99.89%);
  width: 100vw;
  padding: 32px 24px;
  margin: 0 -24px;

  .wwdbg {
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
    .wwdbg {
      margin: 0 -72px;
      display: inline-block;
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
    .wwdbg {
      margin: 0 -84px;
    }
  }
  @media screen and (min-width: 1000px) {
    margin: 0 -96px;
    padding: 64px 96px 200px;
    .wwdbg {
      margin: 0 -96px;
    }
  }
  @media screen and (min-width: 1100px) {
    margin: 0 -108px;
    padding: 64px 108px 200px;
    .wwdbg {
      margin: 0 -108px;
    }
  }
  @media screen and (min-width: 1200px) {
    margin: 0 -128px;
    padding: 64px 128px 200px;
    .wwdbg {
      margin: 0 -128px;
    }
  }
`;

export const SemiSectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-around;
  }
`;
export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 8px;
  background: #f6f6f6;
  border-radius: 15px;
  &:not(:last-child) {
    margin-bottom: 32px;
  }

  h3 {
    color: #262424;
    margin-bottom: 12px;
  }
  p {
    color: #262424;
    width: 98%;
  }
  svg {
    margin-bottom: 16px;
    width: 80%;
    max-width: 256px;

  }
  @media screen and (min-width: 800px) {
    width: 45%;
    margin-bottom: 32px;
    button {
      margin-top: auto;
    }
  }
  @media screen and (min-width: 1100px) {
    width: 40%;
  }
`;
