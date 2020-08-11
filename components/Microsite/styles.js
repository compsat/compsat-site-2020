import styled from 'styled-components'

const App = () => (
  <div>
    <GlobalStyles />
    App Content Here
  </div>
)

export const MicrositeContainer = styled.div`
    background-color: #121C8C;
    width: 250px;
    height: 220px;
    border-radius: 9px;
    box-shadow: 0px 4px 15px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    
`
export const IconBox = styled.div`
    background-color: #2633BC;
    width: 171.89px;
    height: 133.78px;
    border-radius: 9px;
    box-shadow: 0px 4px 8px #4B081F;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    top: 0;
    left: 0;
`

export const Title = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;700&display=swap');
    font-family: 'Rubik', sans-serif;
    font-size: 18px;
    font-weight: 500;
    color: #FFFFFF;
`