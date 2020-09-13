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
`;

export const CoreValueLeft = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 0 32px 0;

  img {
    margin: 0 32px 16px 0;
  }

  p {
    margin: 0;
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
    margin: 0;
  }
`;
