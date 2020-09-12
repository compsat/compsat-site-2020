import styled from "styled-components";

export const HVMWrapper = styled.div`
  h1, h2, p {
    text-align: left;
  }

  p {
    margin-bottom: 32px;
  }
`;

export const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const MissionText = styled.p`
  width: 100%;
`;

export const MissionBox = styled.div`
  padding: 15% 10%;
  display: flex;
  flex-direction: column;
  background: #07106D;
  background-image: linear-gradient(rgba(186,28,81,0.28) 10%, rgba(186,28,81,1) 70%, rgba(186,28,81,0.6) 100%);
  margin-bottom: 32px;

  p {
    margin: 16px 0 0 0;
    text-align: center;
  }
`;
