import styled from 'styled-components'

export const ServicesLandingContainer = styled.div`
    margin: 0;
    padding: 0;
 
`
export const Header = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    transform: translateY(-30px);
`
export const Headline_Img = styled.div`
    margin-bottom: 0px;

`
export const Headline = styled.h2`
    text-align: center;
    font-size: 36px;
    line-height: 43px;
    position: relative;
    top: -20px;
`
export const Background = styled.div`
    background-color: #030950;
    width: 100vw;
    height: 100vh;
    position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
`
export const Background_Top = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    z-index: -1;
`
export const Background_Bottom = styled.div`
    width: 100%;
    height: 100%;
    background: #030950;
    min-width: 100vw;
    min-height: 100vh;
    position: absolute;
    bottom: 0;
    left:0;
    transform: translateY(350px);
    z-index: -1;
`

export const OptionsContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: center;
    align-items: center;
    margin-bottom: 50px;
`