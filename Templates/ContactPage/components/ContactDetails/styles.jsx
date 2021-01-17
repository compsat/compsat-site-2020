import styled from "styled-components";

export const ContactDetailsWrapper = styled.div`
  margin-bottom: 32px;
  h1 {
    text-align: left;
  }

  @media screen and (min-width: 1200px) {
    width: 48%;
  }
`;

export const ContactInfo = styled.div`
  margin-bottom: 24px;
  p {
    text-align: left;
    margin: 8px 0 0 25px;
  }
`;

export const Platform = styled.div`
  display: flex;
  align-items: center;
  p {
    font-weight: bold;
    margin: 0 8px;
  }
`;
