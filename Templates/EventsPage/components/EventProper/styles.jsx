import styled from "styled-components";

export const EventWrapper = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
    margin-bottom: 32px;

  align-items: flex-start;
  /* padding: 32px 24px; */
  div h3,
  div p {
    text-align: left;
  }
  img {
    border-radius: 20px;
    width: 100%;
    margin-bottom: 16px;
  }
  @media screen and (min-width: 800px) {
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    margin-bottom: 64px;
    img {
      margin: 0 64px 0 0;
    }
  }
`;
