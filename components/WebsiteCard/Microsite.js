import React from 'react';
import { MicrositeContainer, IconBox, Title } from './styles'

const WebsiteCard = ({ microsite, clientsite, type='microsite', MicrositeTitle, PrimaryIcon, SecondaryIcon }, props) => {
    if (microsite)
        return(
            <MicrositeContainer type={type}>
                <Title>{MicrositeTitle}</Title>
                <IconBox>
                    <img src={PrimaryIcon} alt="icon" />
                </IconBox>
         
            </MicrositeContainer>
        )
    else if (clientsite) 
        return(
            <MicrositeContainer type={type}>
                <Title>{MicrositeTitle}</Title>
                <IconBox>
                    <img src={PrimaryIcon} alt="icon" />
                </IconBox>
         
            </MicrositeContainer>
        )
}

export default WebsiteCard;
