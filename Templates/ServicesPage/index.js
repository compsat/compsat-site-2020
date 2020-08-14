import ServicesOption from "../../components/ServicesOption"
import { ServicesLandingContainer, OptionsContainer } from "./styles"
import Icon_Webdev from "../../public/static/img/services-webdev.svg"
import Icon_Systems from "../../public/static/img/services-systems.svg"
import Icon_Learning from "../../public/static/img/services-learning.svg"

export default () => {
    return(
        <ServicesLandingContainer>
            <OptionsContainer>
                <ServicesOption Name="WEB DEVELOPMENT" Icon={Icon_Webdev} />
                <ServicesOption Name="SYSTEMS" Icon={Icon_Systems}/>
                <ServicesOption Name="LEARNING SERVICES" Icon={Icon_Learning}/>
            </OptionsContainer>
        </ServicesLandingContainer>
    );
};