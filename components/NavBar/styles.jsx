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
    a {
      color: #f6f6f6;
      font-size: 14px;
    }
    a:not(:last-child) {
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

export const MobileMenuContainer = styled.div`
  box-sizing: border-box;
  position: absolute;
  z-index: 9;
  top: 0;
  right: 0;
  width: 100vw;
  height: 100vh;
  display: ${(props) => props.clicked};
  flex-direction: column;
  align-items: center;
  padding: 64px 32px 32px;
  background-color: #5c184e;
  overflow: hidden;
  margin: 0 -24px;
  @media screen and (min-width: 500px) {
    margin: 0 -36px;
  }
  @media screen and (min-width: 600px) {
    margin: 0 -48px;
    /* width: 40vw; */
  }
  @media screen and (min-width: 700px) {
    margin: 0 -60px;
  }
  @media screen and (min-width: 800px) {
    margin: 0 -72px;
    /* width: 30vw; */
  }
  @media screen and (min-width: 900px) {
    margin: 0 -84px;
  }
  @media screen and (min-width: 1000px) {
    margin: 0 -96px;
    /* width: 20vw; */
  }
`;

export const PseudoButton = styled.button`
  margin: 0;
  padding: 0;
  appearance: none;
  border: none;
  background: none;
  margin-bottom: 24px;
  a {
    font-size: 18px;
    color: #f6f6f6;
  }
`;

export const Hamburger = styled.button`
  appearance: none;
  background: none;
  padding: 0;
  border: 0;

  svg {
    width: 24px;
  }
`;
export const CrossButton = styled.button`
  position: absolute;
  z-index: 10;
  top: 16px;
  right: 24px;
  width: 24px;
  appearance: none;
  background: none;
  padding: 0;
  border: 0;

  svg {
    width: 24px;
  }
  @media screen and (min-width: 500px) {
    right: 36px;
  }
  @media screen and (min-width: 600px) {
    right: 48px;
  }
  @media screen and (min-width: 700px) {
    right: 60px;
  }
  @media screen and (min-width: 800px) {
    right: 72px;
  }
  @media screen and (min-width: 900px) {
    right: 84px;
  }
  @media screen and (min-width: 1000px) {
    right: 96px;
  }
  @media screen and (min-width: 1100px) {
    right: 108px;
  }
  @media screen and (min-width: 1200px) {
    right: 128px;
  }
`;
