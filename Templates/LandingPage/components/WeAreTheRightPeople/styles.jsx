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
    grid-template-columns: auto auto;
    grid-template-rows: auto auto auto;
    grid-column-gap: 14px;
    grid-template-areas:
      "image heading"
      "image paragraph"
      "image button";
    img {
      grid-area: image;
      align-self: center;
      justify-self: start;
    }
    h2 {
      grid-area: heading;
      /* justify-self: end; */
      text-align: left;
    }
    p {
      grid-area: paragraph;
      /* justify-self: end; */
      text-align: left;
    }
    *:last-child {
      grid-area: button;
      /* justify-self: end; */
    }
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
