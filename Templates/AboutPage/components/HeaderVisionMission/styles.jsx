import styled from "styled-components";

export const HVMWrapper = styled.div`
  margin-bottom: 48px;

  h1, h2, p {
    text-align: left;
  }

  p {
    margin-bottom: 32px;
  }

  @media screen and (min-width: 800px) {
    margin-bottom: 128px;
    z-index: 2;
    position: relative;
  }

  @media screen and (min-width: 1600px) {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
`;

export const MissionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media screen and (min-width: 800px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: stretch;

    max-width: 1280px;
    margin: 0 auto;
  }
`;

export const MissionText = styled.p``;

export const MissionBox = styled.div`
  padding: 15% 10%;
  display: flex;
  flex-direction: column;
  background: #07106D;
  background-image: linear-gradient(rgba(186,28,81,0.28) 10%, rgba(186,28,81,1) 70%, rgba(186,28,81,0.6) 100%);
  margin-bottom: 32px;
  max-width: 320px;
  width: 100%;

  p {
    margin: 16px 0 0 0;
    text-align: center;
  }

  @media screen and (min-width: 800px) {
    width: 32%;
    padding: 7% 3%;
    max-width: 512px;
  }
`;
