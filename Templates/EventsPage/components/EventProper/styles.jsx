import styled from "styled-components";

export const EventWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  /* padding: 32px 24px; */
  h3,
  p {
    text-align: left;
  }
  img {
    border-radius: 20px;
    width: 100%;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 800px) {
    flex-direction: row;
    img {
      min-width: 40%;
      margin: 0 0 6%;
    }
  }
`;
