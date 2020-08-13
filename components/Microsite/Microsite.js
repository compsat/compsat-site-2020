import React from 'react';
import { MicrositeContainer, IconBox, Title } from './styles'
import QPICalcImg from '../../public/static/img/microsite-qpi-calculator.svg'
import testimg from '../../public/static/img/microsite-qpi-calculator 2.svg'

const Microsite = ({ MicrositeTitle, PrimaryIcon, SecondaryIcon }) => (
    <MicrositeContainer>
        <Title>{MicrositeTitle}</Title>
        <IconBox>
            {console.log(PrimaryIcon)}
            <img src={QPICalcImg} alt="icon" />
            
        </IconBox>
        <img src={testimg} alt="qpi-calc" style={{position: "absolute", top: "90px", left: "45px"}} /> 
    </MicrositeContainer>
)

export default Microsite;
