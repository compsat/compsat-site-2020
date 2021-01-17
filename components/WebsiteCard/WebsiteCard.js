import React from 'react';
import { MicrositeContainer, IconBox, Title } from './styles'

const WebsiteCard = ({type, MicrositeTitle, PrimaryIcon, SecondaryIcon }, props) => {
    if (type === "microsite")
        return(
            <MicrositeContainer type={type}>
                <Title>{MicrositeTitle}</Title>
                <IconBox>
                    <img src={PrimaryIcon} alt="icon" />
                </IconBox>
         
            </MicrositeContainer>
        )
    else {
        return(
            <MicrositeContainer type={type}>
                <Title>{MicrositeTitle}</Title>
                <IconBox>
                    <img src={PrimaryIcon} alt="icon" />
                </IconBox>
         
            </MicrositeContainer>
        )
    }
}

export default WebsiteCard;
