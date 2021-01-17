import styled from "styled-components";

export const SecondaryButtonWrapper = styled.button`
  background: none;
  padding: 12px 16px;
  border: 2px solid #ee4266;
  border-radius: 10px;
  line-height: 120%;
  color: #ee4266;
  width: max-content;
  @media screen and (max-width: 500px) {
    font-size: 11px;
  }
  @media screen and (min-width: 600px) {
    padding: 13px 20px;
  }
  @media screen and (min-width: 800px) {
    padding: 14px 24px;
  }
  @media screen and (min-width: 1000px) {
    padding: 15px 28px;
  }
  @media screen and (min-width: 1200px) {
    padding: 16px 32px;
  }
`;
