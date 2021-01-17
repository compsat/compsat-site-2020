import React from 'react';
import { HeaderSpace, ImgSpace, SectionTitle, Subtitle, TextContainer } from './styles';

const MicrositeHeader = () => (
    <HeaderSpace>
        <img src='/static/img/microsite-header.svg'></img>
        <TextContainer> 
            <SectionTitle>Geared For You</SectionTitle>
            <Subtitle>
            Our mission is to make programming and software development accessible to anyone
            </Subtitle>
        </TextContainer>
    </HeaderSpace>
)

export default MicrositeHeader;
