import styled from 'styled-components'

export const MicrositeContainer = styled.div`
    background-color: #121C8C;
    width: 250px;
    height: 220px;
    border-radius: 9px;
    box-shadow: 0px 10px 12px rgba(75, 8, 31, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 27px;
    
`
export const IconBox = styled.div`
    background-color: #2633BC;
    width: 171.89px;
    height: 133.78px;
    border-radius: 9px;
    box-shadow: 0px 4px 8px rgba(75, 8, 31, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;

    @media screen and (min-width: 1080px) {
        width: 212px;
        height: 165px;
    }
`

export const Title = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: bold;
    color: #FFFFFF;
    margin-bottom: 18px;
`
export const ClientSite = styled.div `
    background-color: #121C8C;
    width: 250px;
    height: 263px;
    border-radius: 9px;
    box-shadow: 0px 10px 12px rgba(75, 8, 31, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-bottom: 28px;
    overflow: hidden;

    @media screen and (min-width: 700px) {
        margin: 16px;
    }

    @media screen and (min-width: 1080px) {
        width: 352px;
        height: 352px;
    }
`

export const DescriptionContainer = styled.div `
    background-color: #07106D;
    width: 250px;
    height: 51px;
    position: relative;
    margin-top: 24px;
    margin-bottom: -36px;
    padding-top: 8px;
    padding-left: 12px;
    padding-right: 12px;
    display: flex;
    flex-wrap: wrap;

    @media screen and (min-width: 1080px) {
        width: 352px;
        height: 80px;
        margin-top: 32px;
        padding: 12px 20px 0 20px;
    }
`
export const Description = styled.p `
    font-color: #F6F6F6;
    text-align: left;
    font-size: 12px;

    @media screen and (min-width: 1080px) {
        font-size: 16px;
    }
`