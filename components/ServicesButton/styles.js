import styled from 'styled-components'

export const Service = styled.button`
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

    &:hover {
        background-color: #07106D;
        transition: all 5s;
    }
`

export const Title = styled.h3`
    color: #07106D;
    margin-top: 4px;
    padding: 0px;
`