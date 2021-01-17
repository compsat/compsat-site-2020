import styled from "styled-components";

export const ContactPageWrapper = styled.div`
    background: linear-gradient(170deg, rgba(186,28,81,0) 0%, rgba(186,28,81,0.14) 20%, rgba(186,28,81,0.35) 35%, rgba(186,28,81,1) 55%, rgba(186,28,81,0.51) 100%);
    margin: 0 -128px;
    padding: 32px 128px 48px 128px;
    display: flex;
    flex-direction: column;

    @media screen and (min-width: 800px) {
      padding: 72px 128px;
    }

    @media screen and (min-width: 1200px) {
      flex-direction: row;
      justify-content: space-between;
      background: none;
    }
`;

export const ContactCurve = styled.svg`
  display: none;
  position: absolute;
  left: 0;
  top: 56px;
  height: 50vw;
  width: 100vw;
  fill: url(#contact-gradient) crimson;
  z-index: 1;

  @media screen and (min-width: 1200px) {
    display: initial;
  }
`;

export const ContactPath = styled.path`
  background: #fff;
  fill-opacity: 1;
`;
