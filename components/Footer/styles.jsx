import styled from "styled-components";

export const FooterMobileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background: #262424;
  margin: 0px -24px;
  > div:not(:last-child) {
    margin-bottom: 20px;
  }
  hr{
    margin-bottom: 20px;
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
  }
  a {
    color: #93e1d8;
    text-decoration: underline;
  }
`;
