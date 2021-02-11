import styled from "styled-components";

export const EventWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 32px 24px;
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
    justify-content: space-between;
    width: 100%;
    img {
      width: 45%;
      /* margin: 0 6% 0 0; */
    }
    div {
      width: 50%;
    }
  }
`;
