import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 72px;
    margin-bottom: 12px;

    @media screen and (min-width: 720px) {
        margin-top: 160px;
        flex-direction: row;
        flex-wrap: wrap;
    }

    @media screen and (min-width: 1000px) {
        margin-top: 220px;
    }

    @media screen and (min-width: 1300px) {
        margin-top: 360px;
    }
`