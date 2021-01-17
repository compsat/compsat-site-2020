import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  background: #F6F6F6;
  border-radius: 10px;

  @media screen and (min-width: 1200px) {
    width: 50%;
  }
`;

export const ErrorMessage = styled.div`
  background: #BA1C51;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  padding: 16px 10%;

  p {
    margin: 0 0 0 8px;
    text-align: left;
  }
`;

export const ConfirmationMessage = styled.div`
  background: #2AC87C;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  padding: 16px 10%;
  display: none;

  p {
    margin: 0 0 0 8px;
    text-align: left;
  }
`;

export const FormContent = styled.div`
  padding: 24px 10%;

  h3 {
    color: #07106D;
    text-align: left;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 800px) {
    padding: 5% 10%;
  }
`;

export const FormField = styled.label`
  color: #07106D;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  input {
    height: 32px;
    margin-top: 8px;
    border-radius: 5px;
    border: 1px solid #BDBABA;
    background: #F6F6F6;
  }

  textarea {
    height: 197px;
    margin-top: 8px;
    border-radius: 5px;
    border: 1px solid #BDBABA;
    background: #F6F6F6;
  }
`;

export const WarningMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  p {
    color: #BA1C51;
    margin: 0 0 0 4px;
    text-align: left;
  }
`;

export const ButtonRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
