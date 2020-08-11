import React from 'react';
import { MicrositeContainer, IconBox, Title } from './styles'

const Microsite = ({ MicrositeTitle, PrimaryIcon, SecondaryIcon }) => (
    <MicrositeContainer>
        <Title>{MicrositeTitle}</Title>
        <IconBox>
            {PrimaryIcon}
        </IconBox>
        {SecondaryIcon}
        <img src="/static/img/microsite-qpi-calculator 2.svg" alt="qpi-calc" style={{position: "absolute", top: "90px", left: "45px"}} /> 
    </MicrositeContainer>
)

export default Microsite;