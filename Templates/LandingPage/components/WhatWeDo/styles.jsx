import styled from "styled-components";

export const WWDWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 32px 24px;
  background: linear-gradient(180deg, #07106d -0.11%, #ee4266 99.89%);
  width: 100vw;
  margin: 0 -24px;
`;

export const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px 0;
  background: #f6f6f6;
  border-radius: 15px;
  &:not(:last-child){
    margin-bottom: 32px;
  }

  h3 {
    color: #262424;
    margin-bottom: 12px;
  }
  p {
    color: #262424;
    width: 98%;
  }
  svg {
    margin-bottom: 16px;
  }
`;
