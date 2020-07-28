import styled from 'styled-components'

export const NavMobileWrapper = styled.div`
    height: 56px;
    width: 100%;
    margin: 0; 
    padding: 16px 0;
    box-sizing: border-box;
    
    display: flex;
    align-items: center;
    justify-content: space-between;

    position: sticky;
    z-index: 999;
    background: none;
    .img{
        height: max-content;
    }
`