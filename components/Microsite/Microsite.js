import React from 'react';
import { MicrositeContainer, IconBox, Title } from './styles'

const Microsite = ({ MicrositeTitle, Icon }) => (
    <MicrositeContainer>
        <Title>{MicrositeTitle}</Title>
        <IconBox>
            <img src="/static/img/microsite-qpi-calculator.svg" alt="qpi-calc" />
        </IconBox>
        <img src="/static/img/microsite-qpi-calculator 2.svg" alt="qpi-calc" />
    </MicrositeContainer>
)

export default Microsite;