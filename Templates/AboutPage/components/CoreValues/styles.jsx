import styled from "styled-components";

export const CoreValuesWrapper = styled.div`
  margin-bottom: 32px;
  h2 {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 800px) {
    margin-bottom: 336px;
  }
`;

export const CoreValueContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const CoreValueLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;

  img {
    margin: 0 32px 16px 0;
  }

  p {
    margin: 0 auto;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;

    img {
      margin: 0 32px 0 0;
    }

    p {
      margin-right: 24px;
      width: 25vw;
      max-width: 296px;
      text-align: right;
    }
  }
`;

export const CoreValueRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;

  img {
    margin: 0 0 16px 32px;
  }

  p {
    margin: 0 auto;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    img {
      margin: 0;
    }

    p {
      margin-left: 24px;
      width: 25vw;
      max-width: 296px;
      text-align: left;
    }
  }
`;

export const TopValue = styled.p`
  align-self: flex-end;
`;
