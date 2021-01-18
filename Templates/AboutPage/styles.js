import styled from "styled-components";

export const AboutPageWrapper = styled.div`
    background-image: linear-gradient(rgba(186,28,81,0) 0%, rgba(186,28,81,0.29) 18%, rgba(186,28,81,1) 30%, rgba(186,28,81,0.29) 48%, rgba(186,28,81,0) 50%);
    margin: 0 -128px;
    padding: 24px 128px 40px 128px;

    @media screen and (min-width: 800px) {
      padding: 72px 128px 98px 128px;
    }

    @media screen and (min-width: 900px) {
      background-image: none;
    }
`;

export const ContactCurve = styled.svg`
  display: none;
  position: absolute;
  left: 0;
  top: 60vw;
  height: 180vw;
  width: 100vw;
  fill: url(#contact-gradient) crimson;
  z-index: 1;

  @media screen and (min-width: 900px) {
    display: initial;
  }

  @media screen and (min-width: 1150px) {
    top: 30vw;
  }
`;

export const ContactPath = styled.path`
  background: #fff;
  fill-opacity: 1;
`;
