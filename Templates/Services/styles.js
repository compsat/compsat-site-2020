import styled from 'styled-components'

export const ServicesLandingContainer = styled.div`
    margin-left: -24px;
    padding: 0 24px 0 24px;
    width: 100vw;
    display: flex;
    flex-direction: column;
  /*  background-color: #030950; */
    position: relative;
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    margin-top: -8px;
    
`
export const Headline_Img = styled.div`
    margin-bottom: 0px;

    img {
        width: 80%;
    }

    @media screen and (min-width: 425px) {
        margin: -56px 0 -160px 4px;
      }
    
    @media screen and (min-width: 500px) {
        margin: -240px 0 -160px -40px;
    }

    @media screen and (min-width: 1000px) {
        margin: -300px -280px -160px -40px;
        img {
            width: 66%;
        }
    }

`
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

`

export const Background_Top = styled.div`
    position: relative;
    margin: -56px 0 -160px 20px;
    z-index: -1;

    img {
        width:110%;
    }

    @media screen and (min-width: 425px) {
        margin: -56px 0 -160px 28px;

      }

    @media screen and (min-width: 500px) {
        margin: -56px 0 -160px -40spx;
    }



`
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

    
`

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
        
      }
`

export const SectionTitleWrapper = styled.div`
    background-color: #F6F6F6; 
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
    min-height: max-content;
    padding: 16px 24px 16px 24px;
    margin-bottom: 50px;
    margin-top: 20px;
`
export const SectionTitle = styled.h1`
    color: #EE4266;
    font-size: 20px;
    margin-bottom: 0px;
`

export const Wrapper = styled.div`
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
        margin-left: -128px;
        text-align: center;
    }

`

export const devWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
`

export const DesignContainerTop = styled.div`
    position: relative;
    margin-top: -56px;
    margin-bottom: -720px;
    z-index: -1;
    img{ overflow: hidden; }
    

`

export const DesignContainerBottom = styled.div`
    position: relative;
    margin: -780px 0 -8px 0;
    z-index: -1;
    img{ overflow: hidden; }

    @media screen and (min-width: 844px) {
        display: none;
    }

`

export const Bottom = styled.div`
    position: sticky;
    margin-top: -720px;
    margin-bottom: -10px;
    z-index: -1;
`