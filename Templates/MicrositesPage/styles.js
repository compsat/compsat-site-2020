import styled from 'styled-components'

export const Container = styled.div`
    display: flex;
    align-items: stretch;
    justify-content: center;
    flex-direction: column;
    margin-top: 72px;
    margin-bottom: 12px;

    @media screen and (min-width: 720px) {
        margin-top: 160px;
        flex-direction: row;
        flex-wrap: wrap;
    }
`