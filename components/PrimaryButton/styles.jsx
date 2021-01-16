import styled from "styled-components";

export const PrimaryButtonWrapper = styled.button`
  background: #ee4266;
  border-radius: 10px;
  padding: 12px 16px;
  border: none;
  /* font-size: 12px; */
  line-height: 120%;
  color: #f6f6f6;
  width: max-content;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  svg{
    margin-left:8px;
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
