import ServicesOption from "../../components/ServicesOption"
import { ServicesLandingContainer, OptionsContainer } from "./styles"

export default () => {
    return(
        <ServicesLandingContainer>
            <OptionsContainer>
                <ServicesOption Name="WEB DEVELOPMENT" />
                <ServicesOption />
                <ServicesOption />
            </OptionsContainer>
        </ServicesLandingContainer>
    );
};