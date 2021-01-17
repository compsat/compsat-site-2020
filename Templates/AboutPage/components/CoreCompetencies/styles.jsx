import styled from "styled-components";

export const CoreCompWrapper = styled.div`
  margin: 0 auto 64px auto;
  max-width: 1400px;

  @media screen and (min-width: 800px) {
    margin: 0 auto 112px auto;
  }
`;

export const CoreCompBox1 = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row;

    p {
      align-self: center;
      text-align: left;
      width: 66%;
    }

    img {
      margin-right: 4%;
      width: 30%;
      max-width: 372px;
    }
  }
`;

export const CoreCompBox2 = styled.div`
  display: flex;
  flex-direction: column;

  img {
    margin-bottom: 16px;
  }

  @media screen and (min-width: 800px) {
    flex-direction: row-reverse;

    p {
      align-self: center;
      text-align: right;
      width: 66%;
    }

    img {
      margin-left: 4%;
      width: 30%;
      max-width: 372px;
    }
  }
`;
