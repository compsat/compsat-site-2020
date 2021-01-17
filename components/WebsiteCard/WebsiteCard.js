import React from 'react';
import { MicrositeContainer, IconBox, Title, DescriptionContainer, Description, ClientSite} from './styles'

const WebsiteCard = ({type, MicrositeTitle, PrimaryIcon, SecondaryIcon, Subtitle }, props) => {
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
            <ClientSite type={type}>
                <Title>{MicrositeTitle}</Title>
                <IconBox>
                    <img src={PrimaryIcon} alt="icon" />
                </IconBox>
                <DescriptionContainer>
                    <Description>{Subtitle}</Description>
                </DescriptionContainer>
            </ClientSite>
        )
    }
}

export default WebsiteCard;
