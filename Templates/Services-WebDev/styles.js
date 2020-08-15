import styled from 'styled-components'

export const SectionTitleWrapper = styled.div`
    background-color: #F6F6F6;
    border-radius: 0px 10px 10px 10px;
    max-width: max-content;
    min-height: max-content;
    padding: 16px 24px 16px 24px;
    margin-bottom: 50px;
`
export const SectionTitle = styled.h1`
    color: #EE4266;
    font-size: 20px;
    margin-bottom: 0px;
`

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: max-content;
`

export const DesignContainerTop = styled.div`
    position: absolute;
    top: 0;
    z-index: -1;
`

export const DesignContainerBottom = styled.div`
    position: absolute;
    transform: translate(0, 73%);
    z-index: -1;
`