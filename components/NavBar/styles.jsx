import styled from "styled-components";

export const NavWrapper = styled.div`
  margin: 0;
  padding: 0 24px;
  @media screen and (min-width: 500px) {
    padding: 0 36px;
  }
  @media screen and (min-width: 600px) {
    padding: 0 48px;
  }
  @media screen and (min-width: 700px) {
    padding: 0 60px;
  }
  @media screen and (min-width: 800px) {
    padding: 0 72px;
  }
  @media screen and (min-width: 900px) {
    padding: 0 84px;
  }
  @media screen and (min-width: 1000px) {
    padding: 0 96px;
  }
  @media screen and (min-width: 1100px) {
    padding: 0 108px;
  }
  @media screen and (min-width: 1200px) {
    padding: 0 128px;
  }
`;

export const NavMobileWrapper = styled.div`
  height: 56px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
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
  @media screen and (min-width: 1000px) {
    display: none;
  }
`;

export const NavDesktopWrapper = styled.div`
  display: none;
  height: 88px;
  width: 100%;
  margin: 0;
  padding: 16px 0;
  box-sizing: border-box;

  /* display: flex; */
  align-items: center;
  flex-direction: row;
  justify-content: space-between;

  position: sticky;
  z-index: 999;
  background: none;
  .links {
    width: max-content;
    a{
      color: #F6F6F6;
      font-size: 14px;
    }
    a:not(:last-child){
      margin-right: 48px;
    }
  }
  .img {
    height: max-content;
  }

  @media screen and (min-width: 1000px) {
    display: flex;
  }
`;
