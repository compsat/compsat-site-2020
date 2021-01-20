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

`
export const Headline = styled.h2`
    text-align: center;
    font-size: 36px;
    line-height: 43px;
    position: relative;
    margin-top: -16px;
    margin-bottom: 56px;
`

export const Background_Top = styled.div`
    position: relative;
    margin: -56px 0 -160px -4px;
    z-index: -1;
    img {
        width:300px;
    }

    @media screen and (min-width: 425px) {
        margin: -56px 0 -160px 112px;

        img {
            
        }
      }

`
export const Background_Bottom = styled.div`
    min-width: 100vw;
    min-height: 100vh;
    position: relative;
    margin-top: -700px;
    margin-bottom: -60px;
    z-index: -1;
`

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    margin-bottom: 48px;
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
`

export const DesignContainerBottom = styled.div`
    position: relative;
    margin: -780px 0 -8px 0;
    z-index: -1;
`

export const Bottom = styled.div`
    position: sticky;
    margin-top: -720px;
    margin-bottom: -10px;
    z-index: -1;
`