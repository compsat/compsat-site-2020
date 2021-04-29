import React from "react";
import {
  MicrositeContainer,
  IconBox,
  Title,
  DescriptionContainer,
  Description,
  ClientSite,
} from "./styles";

const WebsiteCard = (
  { type, MicrositeTitle, PrimaryIcon, Subtitle, url },
  props
) => {
  if (type === "microsite")
    return (
      <a href={url}>
        <MicrositeContainer type={type}>
          <Title>{MicrositeTitle}</Title>
          <IconBox
            imgUrl={"/static/img/microsites-icons/" + PrimaryIcon}
          ></IconBox>
        </MicrositeContainer>
      </a>
    );
  else {
    return (
      <a href={url}>
        <ClientSite type={type}>
          <Title>{MicrositeTitle}</Title>
          <IconBox
            imgUrl={"/static/img/clientsite-icons/" + PrimaryIcon}
          ></IconBox>
          <DescriptionContainer>
            <Description>{Subtitle}</Description>
          </DescriptionContainer>
        </ClientSite>
      </a>
    );
  }
};

export default WebsiteCard;
