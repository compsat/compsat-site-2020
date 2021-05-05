import styled from "styled-components"

export const Header_Img = styled.div`
    margin-top: -56px;
    margin-left: 60px;
    
    img {
        width: 100vw;
    }
    
    @media screen and (min-width: 500px) {
        margin-left: 180px;
        img {
            width: 70vw;
        }
    }
    
    @media screen and (min-width: 800px) {
        margin-left: 284px;
        
        img {
            width: 65vw;
        }
    }
    
    @media screen and (min-width: 1080px) {
        margin-top: -64px;
        margin-left:630px;
        img {
            width: 50vw;
        }
    }
`

export const Header_text = styled.div `
    margin-top: -160px;
    margin-right: 136px;

    @media screen and (min-width: 500px) {
        margin-top: -200px;
    }

    @media screen and (min-width: 700px) {
        margin-top: -240px;
    }

    @media screen and (min-width: 800px) {
        margin-top: -300px;
    }

    @media screen and (min-width: 1080px) {
        margin-top: -470px;
    }
`

export const Title = styled.h2 `
    text-align: left;
    font-family: 'Rubik', sans-serif;
    font-weight: bold;

    @media screen and (min-width: 800px){
        font-size: 48px;
    }

    @media screen and (min-width: 1080px) {
        font-size: 52px;
    }
`

export const Subtitle = styled.p `
    text-align: left;
    margin-top: -8px;

    @media screen and (min-width: 500px) {
        padding-right: 80px;
    }

    @media screen and (min-width: 700px) {
        padding-right: 160px;
    }

    @media screen and (min-width: 800px) {
        font-size: 16px;
    }

    @media screen and (min-width: 1000px) {
        padding-right: 480px;
        font-size: 20px;
    }
`

export const CardContainer = styled.div `
    display: flex;
    text-align: center;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    

    margin-top: 48px;
    margin-bottom: 64px;

    @media screen and (min-width: 400px) {
        margin-top: 120px;
    }

    @media screen and (min-width: 700px) {
        margin-top: 200px;
    }

    @media screen and (min-width: 1080px) {
        margin-top: 360px;
    }
`

export const DescriptionContainer = styled.div `

`