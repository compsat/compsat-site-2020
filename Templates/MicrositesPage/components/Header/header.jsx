import React from "react";
import {
  HeaderSpace,
  ImgSpace,
  SectionTitle,
  Subtitle,
  TextContainer,
} from "./styles";

const MicrositeHeader = ({ mainHeader, mainDescription }) => (
  <HeaderSpace>
    <ImgSpace><img src="/static/img/microsite-header.svg"></img></ImgSpace>
    <TextContainer>
      <SectionTitle>{mainHeader}</SectionTitle>
      <Subtitle>{mainDescription}</Subtitle>
    </TextContainer>
  </HeaderSpace>
);

export default MicrositeHeader;
