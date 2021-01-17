import styled from "styled-components";

export const WATRPeopleWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-self: center;
  align-items: center;
  width: 100%;
  padding: 32px 0;
  @media screen and (min-width: 800px) {
    display: grid;
    grid-template-columns: 0.6fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    grid-column-gap: 14px;
    grid-template-areas:
      "image heading"
      "image paragraph"
      "image button";
    img {
      grid-area: image;
      align-self: center;
      justify-self: start;
      width: 100%;
    }
    h2 {
      grid-area: heading;
      /* justify-self: end; */
      text-align: left;
      margin-bottom: 0;
    }
    p {
      grid-area: paragraph;
      /* justify-self: end; */
      text-align: left;
      margin-bottom: 0;
    }
    *:last-child {
      grid-area: button;
      /* justify-self: end; */
    }
  }
  @media screen and (min-width: 1000px) {
    grid-column-gap: 36px;
  }
`;

export const WATRPeopleButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  width: 100%;
  @media screen and (min-width: 800px) {
    justify-content: flex-start;
    *:first-child {
      margin-right: 32px;
    }
  }
`;
