import styled from "styled-components";

export const ContactFormWrapper = styled.div`
  background: #F6F6F6;
  padding: 10%;
  border-radius: 10px;

  h3 {
    color: #07106D;
    text-align: left;
    margin-bottom: 16px;
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

export const ButtonRight = styled.div`
  display: flex;
  justify-content: flex-end;
`;
