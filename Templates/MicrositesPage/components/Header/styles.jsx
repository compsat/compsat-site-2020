import styled from 'styled-components';

export const HeaderSpace = styled.div`
    position: relative;
    margin-top:-56px;
    margin-left: -24px;
`

export const SectionTitle = styled.h2`
    text-align: left;
    margin-bottom: 0px;

    @media screen and (min-width: 500px){
        font-size: 40px;
    }
`

export const Subtitle = styled.p`
    text-align: left;

    @media screen and (min-width: 500px) {
        font-size: 16px;

    }
`

export const TextContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;

    margin-top: -120px;
    margin-left: 32px;

    @media screen and (min-width: 420px){
        margin-top: -148px;
    }

    @media screen and (min-width: 500px) {
        margin-top: -180px;
    }

    @media screen and (min-width: 720px) {
        margin-top: -240px;
    }
`

export const ImgSpace = styled.div `
    margin-left: -16px;
    img {
        width: 100vw;
    }

    @media screen and (min-width: 500px) {
        margin-left: -36px;
        img {
            width: 95vw;
        }
    }
`