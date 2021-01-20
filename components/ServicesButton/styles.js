import styled from 'styled-components'

export const Service = styled.button`
    width: 254px;
    height: 210px;
    border: none;
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
        transition: all 0.3s;
    }

    @media screen and (min-width: 844px) {
        margin-right: 32px;
        background-color: transparent;
        box-shadow: none;
        padding: 0;
        height: auto;
        width: auto;

  
        &:hover {
            background-color: transparent;
            color: #93E1D8;
            border-radius: 2px;
            border-bottom: 4px solid #93E1D8;
            transition: all 0.3s ease-in;
        }

        img {
            display: none;
        }
    }
`

export const Title = styled.h3`
    color: #07106D;
    margin-top: 4px;
    padding: 0px;

    @media screen and (min-width: 844px) {
        color: #EE4266;

        &:hover {
            font-color: 93E1D8;
            transition: all 0.3s ease-in;
        }
    }
`