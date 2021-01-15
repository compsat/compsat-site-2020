import styled from "styled-components";

export const FeedbackWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 32px 24px;
  background: #5c184e;
  margin: 0 -24px;
  width: 100vw;
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
    display: grid;
    grid-template-columns: auto auto;
    grid-template-rows: auto auto;
    grid-template-areas:
      "heading button"
      "paragraph button";

    h2 {
      grid-area: heading;
      text-align: start;
    }
    p {
      grid-area: paragraph;
      text-align: start;
    }
    *:last-child {
      grid-area: button;
      justify-self: end;
      align-self: center;
    }
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
