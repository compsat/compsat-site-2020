import styled from "styled-components";

export const WWDWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background: linear-gradient(180deg, #07106d -0.11%, #ee4266 99.89%);
  width: 100vw;
  margin: 0 -24px;
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
    padding: 32px 72px;
  }
  @media screen and (min-width: 900px) {
    margin: 0 -84px;
    padding: 32px 84px;
  }
  @media screen and (min-width: 1000px) {
    margin: 0 -96px;
    padding: 32px 96px;
  }
  @media screen and (min-width: 1100px) {
    margin: 0 -108px;
    padding: 32px 108px;
  }
  @media screen and (min-width: 1200px) {
    margin: 0 -128px;
    padding: 32px 128px;
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
  padding: 16px 0;
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
  }
  @media screen and (min-width: 800px) {
    width: 256px;
    margin-bottom: 32px;
  }
  @media screen and (min-width: 900px) {
    width: 320px;
  }
  @media screen and (min-width: 1100px) {
    width: 384px;
  }
  @media screen and (min-width: 1300px) {
    width: 460px;
  }
`;
