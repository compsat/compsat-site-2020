import styled from "styled-components";

export const FooterMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background: #262424;
  margin: 0;
  > div:not(:last-child) {
    margin-bottom: 20px;
  }
  hr{
    margin-bottom: 20px;
  }
  
  @media screen and (min-width: 500px) {
    padding: 32px 36px;
  }
  @media screen and (min-width: 600px) {
    padding: 32px 48px;
  }
  @media screen and (min-width: 700px) {
    padding: 32px 60px;
  }
  @media screen and (min-width: 800px) {
    padding: 32px 72px;
  }
  @media screen and (min-width: 900px) {
    padding: 32px 84px;
  }
  @media screen and (min-width: 1000px) {
    padding: 32px 96px;
  }
  @media screen and (min-width: 1100px) {
    padding: 32px 108px;
  }
  @media screen and (min-width: 1200px) {
    padding: 32px 128px;
  }
`;

export const FooterHeadingWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  img {
    height: 26px;
  }
`;

export const FooterSocialsWrapper = styled.div`
  display: flex;
  flex-direction: row;
  img {
    width: 16px;
    height: auto;
  }
  img:not(:last-child) {
    margin-right: 16px;
  }
`;

export const FooterMenuWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0px;
  a {
    color: #f6f6f6;
  }
  a:not(:last-child) {
    margin-bottom: 16px;
  }
`;

export const FooterDivider = styled.hr`
  border: 1.5px solid #93e1d8;
  width: 100%;
`;

export const FooterOrgInfo = styled.div`
  display: flex;
  flex-direction: column;
  p {
    color: #93e1d8;
    margin-bottom: 8px;
    text-align: left;
  }
  a {
    color: #93e1d8;
    text-decoration: underline;
    margin-bottom: 20px;
  }
  .copyright{
    color: #E5E5E5;
    font-size: 9px;
  }
`;
