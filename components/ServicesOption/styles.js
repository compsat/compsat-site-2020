import styled from 'styled-components'

export const OptionContainer = styled.button`
    width: 254px;
    height: 210px;
    border-radius: 10px;
    background-color: #F6F6F6;
    margin-bottom: 16px;
    padding-top: 25px;
    padding-bottom: 25px;
    box-shadow: 10px 10px 10px rgba(0, 0, 0, 0.25);

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    :hover {
        background-color: #07106D;
    }
`

export const Title = styled.h3`
    font-family: Rubik;
    font-weight: bold;
    font-size: 17px;
    color: #07106D;
    margin-top: 3px;
    padding: 0px;
`