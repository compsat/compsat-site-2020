import styled from "styled-components";

export const ServicesLandingContainer = styled.div`
  margin-left: -24px;

  width: 100vw;
  display: flex;
  flex-direction: column;
  position: relative;
`;
export const Header = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-top: -8px;
  margin: 0 16px 0 16px;

  @media screen and (min-width: 1000px) {
    flex-direction: row-reverse;
    justify-content: space-evenly;
    margin-right: 148px;
  }
`;
export const Headline_Img = styled.div`
  margin-bottom: 0px;

  img {
    width: 90%;
  }

  @media screen and (min-width: 425px) {
    margin: -56px 0 -160px 4px;
  }

  @media screen and (min-width: 500px) {
    margin: -240px 0 -160px -40px;
  }

  @media screen and (min-width: 1000px) {
    margin: -300px 64px -160px -180px;
    img {
      width: 100%;
    }
  }
`;
export const Headline = styled.h2`
  text-align: center;
  font-size: 36px;
  line-height: 43px;
  position: relative;
  margin-top: -16px;
  margin-bottom: 56px;

  @media screen and (min-width: 425px) {
    margin: 132px 0 -160px 0px;
  }

  @media screen and (min-width: 1000px) {
    padding-left: 72px;
    padding-right: 1px;
    margin: -160px 8px -0px 92px;
    font-size: 64px;
    text-align: left;
    line-height: 64px;
  }
`;

export const Headline_container = styled.div`
  @media screen and (min-width: 1000px) {
    padding-right: 300px;
    width: 990px;
    margin-top: 100px;
  }
`;

export const Background_Top = styled.div`
  position: relative;
  margin: -56px 0 -160px 20px;
  z-index: -1;

  img {
    width: 110%;
    margin-top: -2em;
  }

  @media screen and (min-width: 425px) {
    margin: -56px 0 -160px 28px;
  }

  @media screen and (min-width: 500px) {
    margin: -56px 0 -160px -40px;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1024px) {
    margin: -56px 0 -160px 436px;

    img {
      width: 100%;
    }
  }

  @media screen and (min-width: 1500px) {
    margin: -56px 0 -160px 416px;

    img {
      width: 108%;
    }
  }
`;
export const Background_Bottom = styled.div`
  min-width: 100vw;
  min-height: 100vh;
  position: relative;
  margin-top: -700px;
  margin-bottom: -60px;
  z-index: -1;
  img {
    overflow: hidden;
  }
`;

export const OptionsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  align-items: center;
  margin-bottom: 48px;

  @media screen and (min-width: 425px) {
    margin: 240px 0 48px 0px;
  }

  @media screen and (min-width: 844px) {
    flex-direction: row;
    margin-left: 0px;
    margin: 180px 0 120px 0px;
    justify-content: space-between;
    width: 80vw;
  }

  @media screen and (min-width: 1500px) {
    width: 80vw;
  }
`;

export const SectionTitleWrapper = styled.div`
  background-color: #f6f6f6;
  border-radius: 0px 10px 10px 10px;
  max-width: max-content;
  min-height: max-content;
  padding: 16px 24px 16px 24px;
  margin-bottom: 50px;
  margin-top: 20px;

  @media screen and (min-width: 844px) {
    display: none;
  }
`;
export const SectionTitle = styled.h1`
  color: #ee4266;
  font-size: 20px;
  margin-bottom: 0px;
`;

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: max-content;
  width: auto;
  padding-left: 0;

  @media screen and (min-width: 520px) {
    margin-left: -24px;
  }

  @media screen and (min-width: 634px) {
    margin-left: -48px;
  }

  @media screen and (min-width: 844px) {
    margin-top: 0;
    margin-left: -84px;
    text-align: center;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 0;
    margin-left: -208px;
    text-align: center;

    .mobile {
      margin: 1000px;
    }
  }
`;

export const MobileWrapper = styled.div`
  display: block;

  @media screen and (min-width: 520px) {
    margin-left: -24px;
  }

  @media screen and (min-width: 634px) {
    margin-left: -48px;
  }

  @media screen and (min-width: 844px) {
    margin-top: 0;
    margin-left: -84px;
    text-align: center;
    display: none;
  }

  @media screen and (min-width: 1000px) {
    margin-top: 0;
    margin-left: -208px;
    text-align: center;
    display: none;
  }
`;
export const DesktopWrapper = styled.div`
  display: none;
  @media screen and (min-width: 844px) {
    display: flex;
    margin: 0 0 0 80px;
  }
`;

export const devWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
`;

export const DesignContainerTop = styled.div`
  position: relative;
  margin-top: -56px;
  margin-bottom: -720px;
  z-index: -1;
  img {
    overflow: hidden;
  }

  @media screen and (min-width: 844px) {
    display: none;
  }
`;

export const DesignContainerBottom = styled.div`
  position: relative;
  margin: -780px 0 -8px 0;
  z-index: -1;
  img {
    overflow: hidden;
  }

  @media screen and (min-width: 844px) {
    display: none;
  }
`;

export const Bottom = styled.div`
  position: sticky;
  margin-top: -720px;
  margin-bottom: -10px;
  z-index: -1;
  @media screen and (min-width: 844px) {
    display: none;
  }
`;

export const Sys_BG = styled.div`
  display: none;
  @media screen and (min-width: 844px) {
    display: block;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: -2;

    img {
      width: 100vw;
    }
  }
`;

export const WD_bg1 = styled.div`
  display: none;
  @media screen and (min-width: 844px) {
    display: block;
    width: 100vw;
    position: absolute;
    top: 0;
    z-index: -2;

    img {
      width: 100vw;
    }
  }
`;

export const WD_bg2 = styled.div`
  display: none;
  @media screen and (min-width: 844px) {
    display: block;
    width: 100vw;
    position: absolute;
    bottom: 0;
    z-index: -2;
    overflow: hidden;
    height: 120vh;

    img {
      width: 100vw;
    }
  }
`;

export const ContentContainer = styled.div`
  @media screen and (min-width: 768px) {
    margin-right: 24px;
  }

  @media screen and (min-width: 800px) {
    margin-right: 48px;
  }

  @media screen and (min-width: 1440px) {
    margin-right: 0px;
  }
`;
