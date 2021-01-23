import styled from 'styled-components'

export const Wrapper = styled.div`
    margin-bottom: 60px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0 48px 0 48px;

    @media screen and (min-width: 844px) {
        :nth-child(odd){
            flex-direction: row;
        }

        :nth-child(even){
            flex-direction: row-reverse;
        }
        
    }
`

export const Description = styled.p`
    font-size: 14px;
    line-height: 25px;

    @media screen and (min-width: 844px) {
        font-size: 24px;
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
    @media screen and (min-width: 844px) {
        display: flex;
        flex-direction: column;
        justify-content: center;

        
    }
`