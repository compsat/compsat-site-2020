import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-bottom: 60px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 48px 0 48px;

    img {
        width: 80vw;
    }

    @media screen and (min-width: 500px) {
        img {
            width:60vw;
        }
    }

    @media screen and (min-width: 844px) {
        
        margin-bottom: 320px;
        img {
            width: 35vw;
        }

        :nth-child(odd){
            flex-direction: row;

            img {
                margin-right: 64px;
            }

        }

        :nth-child(even){
            flex-direction: row-reverse;

            img {
                margin-right: -64px;
            }
        }
    }
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 25px;

    @media screen and (min-width: 844px) {
        font-size: 20px;
        width: 605px;
    }
`

export const TitleWrapper = styled.div`
    border-color: #F6F6F6;
    border-radius: 4px;
    border-width: 1px;
    border-style: solid;
    padding: 10px 0px 10px 0px;
    margin-bottom: 16px;
    margin-top: 16px;
    width: 234px;

    @media screen and (min-width: 844px) {
        border: none;
        width: auto;
        h5 {
            font-size: 28px;
        }
    }

`

export const TextWrapper = styled.div `
    display: flex;
    flex-direction: column;
    text-align: center;
    align-items: center;
    

    @media screen and (min-width: 844px) {       
            :nth-child(even){
                margin-right: 64px;
                align-items: flex-end;
            }
    }
`