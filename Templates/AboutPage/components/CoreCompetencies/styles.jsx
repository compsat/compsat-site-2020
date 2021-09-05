import styled from "styled-components";

export const CoreCompWrapper = styled.div`
  margin: 0 auto 64px auto;
  max-width: 1400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 800px) {
    margin: 0 auto 112px auto;
    z-index: 2;
    position: relative;
  }
`;

export const CoreCompBox = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 256px;

  img {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 800px) {
    max-width: unset;

    p {
      align-self: center;
      width: 66%;
    }

    img {
      width: 30%;
      max-width: 372px;
    }
  }
`;

export const CoreCompBox1 = styled(CoreCompBox)`
  @media screen and (min-width: 800px) {
    flex-direction: row;

    p {
      text-align: left;
    }

    img {
      margin-right: 4%;
    }
  }
`;

export const CoreCompBox2 = styled(CoreCompBox)`
  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;

    p {
      text-align: right;
    }

    img {
      margin-left: 4%;
    }
  }
`;