import React from 'react';
import { MicrositeContainer, IconBox, Title } from './styles'
import QPICalcImg from '../../public/static/img/microsite-qpi-calculator.svg'
import testimg from '../../public/static/img/microsite-qpi-calculator 2.svg'

console.log(QPICalcImg);
const Microsite = ({ MicrositeTitle, PrimaryIcon, SecondaryIcon }) => (
    <MicrositeContainer>
        <Title>{MicrositeTitle}</Title>
        <IconBox>
            
            <img src="/static/img/microsite-qpi-calculator.svg" alt="icon" />
            
        </IconBox>
        <img src={testimg} alt="qpi-calc" style={{position: "absolute", top: "90px", left: "45px"}} /> 
    </MicrositeContainer>
)

export default Microsite;
