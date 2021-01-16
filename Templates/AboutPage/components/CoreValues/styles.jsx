import styled from "styled-components";

export const CoreValuesWrapper = styled.div`
  margin-bottom: 32px;
  h2 {
    margin-bottom: 16px;
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

    @media screen and (min-width: 800px) {
      margin: 0 32px 0 0;
    }
  }

  p {
    margin: 0 auto;

    @media screen and (min-width: 800px) {
      margin-right: 24px;
      width: 25vw;
      max-width: 296px;
      text-align: right;
    }
  }

  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;
  }
`;

export const CoreValueRight = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;

  img {
    margin: 0 0 16px 32px;

    @media screen and (min-width: 800px) {
      margin: 0;
    }
  }

  p {
    margin: 0 auto;

    @media screen and (min-width: 800px) {
      margin-left: 24px;
      width: 25vw;
      max-width: 296px;
      text-align: left;
    }
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;
  }
`;

export const TopValue = styled.p`
  align-self: flex-end;
`;
