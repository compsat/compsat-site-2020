import ServicesButton from "../../components/ServicesButton"
import { ServicesLandingContainer, Background, OptionsContainer,
        Header, Headline, Background_Bottom, Headline_Img, Background_Top } from "./styles"
import Icon_Webdev from "../../public/static/img/services-webdev.svg"
import Icon_Systems from "../../public/static/img/services-systems.svg"
import Icon_Learning from "../../public/static/img/services-learning.svg"
import BG_Design1 from "../../public/static/img/services-background1.svg"
import BG_Design2 from "../../public/static/img/services-background2.svg"
import Banner from "../../public/static/img/services-header.svg"

import nextPage from "../../pages/index"

import Link from 'next/link'

export default () => {
    return(
        <ServicesLandingContainer>
            
                <Background_Top><img src={BG_Design1} /></Background_Top>
  

            <Header>
                <Headline_Img><img src={Banner} alt="banner"/> </Headline_Img> 
                <Headline>What We Can Do For You</Headline>
            </Header>
                       
            <OptionsContainer>
                <Link href="/WebDevelopment">
                    <a><ServicesButton Name="WEB DEVELOPMENT" Icon={Icon_Webdev} /></a>
                </Link>
                <Link href="/Systems">
                    <a><ServicesButton Name="SYSTEMS" Icon={Icon_Systems}/></a>
                </Link>
                <Link href="/LearningServices">
                    <a><ServicesButton Name="LEARNING SERVICES" Icon={Icon_Learning}/></a>
                </Link>
                <Background_Bottom>
                    <img src={BG_Design2} style={{maxWidth:"100vw"}} />
                </Background_Bottom>
            </OptionsContainer>
     
        </ServicesLandingContainer>
    );
};