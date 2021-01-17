import styled from "styled-components";

export const EventsPageWrapper = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
`;

export const EventsCategoryWrapper = styled.div`
  width: 100vw;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
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
