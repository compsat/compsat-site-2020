import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  background: #f6f6f6;
  border-radius: 10px;
  z-index: 2;

  @media screen and (min-width: 1200px) {
    width: 50%;
    margin-left: 8%;
  }
`;

export const ErrorMessage = styled.div`
  background: #ba1c51;
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
  background: #2ac87c;
  border-radius: 10px 10px 0 0;
  display: flex;
  align-items: center;
  padding: 16px 10%;

  p {
    margin: 0 0 0 8px;
    text-align: left;
  }
`;

export const FormContent = styled.div`
  padding: 24px 10%;

  h3 {
    color: #07106d;
    text-align: left;
    margin-bottom: 16px;
  }

  @media screen and (min-width: 800px) {
    padding: 5% 10%;
  }
`;

export const FormField = styled.label`
  color: #07106d;
  font-size: 12px;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;

  input {
    height: 32px;
    margin-top: 8px;
    border-radius: 5px;
    border: 1px solid #bdbaba;
    background: #f6f6f6;
    font-family: "IBM Plex Sans", sans-serif;
  }

  textarea {
    height: 197px;
    margin-top: 8px;
    border-radius: 5px;
    border: 1px solid #bdbaba;
    background: #f6f6f6;
    font-family: "IBM Plex Sans", sans-serif;
  }
`;

export const WarningMessage = styled.div`
  display: flex;
  align-items: center;
  margin-top: 8px;

  p {
    font-size: 12px;
    color: #ba1c51;
    margin: 0 0 0 4px;
    text-align: left;
  }
`;

export const ButtonRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
