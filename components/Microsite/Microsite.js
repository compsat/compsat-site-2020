import React from 'react';
import { MicrositeContainer, IconBox, Title } from './styles'
import QPICalcImg from '../../public/static/img/microsite-qpi-calculator.svg'
import testimg from '../../public/static/img/microsite-qpi-calculator 2.svg'

const Microsite = ({ MicrositeTitle, PrimaryIcon, SecondaryIcon }) => (
    <MicrositeContainer>
        <Title>{MicrositeTitle}</Title>
        <IconBox>
            
            <img src={PrimaryIcon} alt="icon" />
            
        </IconBox>
         
    </MicrositeContainer>
)

export default Microsite;
