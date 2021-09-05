import styled from "styled-components";

export const CoreValuesWrapper = styled.div`
  margin-bottom: 32px;
  h2 {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 800px) {
    margin-bottom: 336px;
    z-index: 2;
    position: relative;

    h2 {
      margin-bottom: 32px;
    }
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

export const CoreValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 0 32px 0;

  img {
    max-width: 192px;
    width: 100%;
    filter: grayscale(1) invert(1);
  }

  p {
    margin: 0 auto;
  }

  @media screen and (min-width: 800px) {
    img {
      filter: unset;
    }

    p {
      width: 25vw;
      max-width: 296px;
    }
  }
`;

export const CoreValueLeft = styled(CoreValue)`
  img {
    margin: 0 32px 16px 0;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;

    img {
      margin: 0 32px 0 0;
    }

    p {
      margin-right: 24px;
      text-align: right;
    }
  }
`;

export const CoreValueRight = styled(CoreValue)`
  img {
    margin: 0 0 16px 32px;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    img {
      margin: 0;
    }

    p {
      margin-left: 24px;
      text-align: left;
    }
  }
`;

export const TopValue = styled.p`
  align-self: flex-end;
`;
