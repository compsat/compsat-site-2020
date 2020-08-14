import ServicesOption from "../../components/ServicesOption"
import { ServicesLandingContainer, Background, OptionsContainer,
        Header, Headline, Background_Bottom, Headline_Img, Background_Top } from "./styles"
import Icon_Webdev from "../../public/static/img/services-webdev.svg"
import Icon_Systems from "../../public/static/img/services-systems.svg"
import Icon_Learning from "../../public/static/img/services-learning.svg"
import BG_Design1 from "../../public/static/img/services-background1.svg"
import BG_Design2 from "../../public/static/img/services-background2.svg"
import Banner from "../../public/static/img/services-header.svg"

export default () => {
    return(
        <ServicesLandingContainer>
            <Background>
                <Background_Top><img src={BG_Design1} /></Background_Top>
            </Background>

            <Header>
                <Headline_Img><img src={Banner} alt="banner"/> </Headline_Img> 
                <Headline>What We Can Do For You</Headline>
            </Header>
                       
            <OptionsContainer>
                <ServicesOption Name="WEB DEVELOPMENT" Icon={Icon_Webdev} href="https://github.com/styled-components/styled-components"/>
                <ServicesOption Name="SYSTEMS" Icon={Icon_Systems}/>
                <ServicesOption Name="LEARNING SERVICES" Icon={Icon_Learning}/>
                <Background_Bottom>
                    <img src={BG_Design2} />
                </Background_Bottom>
            </OptionsContainer>

        </ServicesLandingContainer>
    );
};