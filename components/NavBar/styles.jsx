import styled from "styled-components";

export const NavMobileWrapper = styled.div`
  height: 56px;
  width: 100%;
  margin: 0;
  padding: 16px 24px;
  box-sizing: border-box;

  display: flex;
  align-items: center;
  justify-content: space-between;

  position: sticky;
  z-index: 999;
  background: none;
  .img {
    height: max-content;
  }

  @media screen and (min-width: 500px) {
    padding: 16px 36px;
  }
  @media screen and (min-width: 600px) {
    padding: 16px 48px;
  }
  @media screen and (min-width: 700px) {
    padding: 16px 60px;
  }
  @media screen and (min-width: 800px) {
    padding: 16px 72px;
  }
  @media screen and (min-width: 900px) {
    padding: 16px 84px;
  }
  @media screen and (min-width: 1000px) {
    padding: 16px 96px;
  }
  @media screen and (min-width: 1100px) {
    padding: 16px 108px;
  }
  @media screen and (min-width: 1200px) {
    padding: 16px 128px;
  }
`;
