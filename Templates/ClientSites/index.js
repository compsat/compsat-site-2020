import WebsiteCard from "../../components/WebsiteCard"
import header_img from "../../public/static/img/clientsites_header.svg"
import QPICalc_Icon from '../../public/static/img/microsite-qpi-calculator.svg'
import {
    Header_Img,
    Title,
    Subtitle,
    Header_text,
    CardContainer

} from "./styles"

export default () => {
    return(
        <div>
            <Header_Img> 
                <img src={header_img} />
            </Header_Img>

            <Header_text>
                <Title>OUR PORTFOLIO</Title>
                <Subtitle>Our mission is to make programming and software development accessible to anyone.</Subtitle>
            </Header_text>

            <CardContainer>
                <WebsiteCard
                    MicrositeTitle="Client Site 1"
                    PrimaryIcon={QPICalc_Icon}
                    type="clientsite"
                    Subtitle="Insert client site description here. 1-2 short sentences would do."/>

                <WebsiteCard
                    MicrositeTitle="Client Site 2"
                    PrimaryIcon={QPICalc_Icon}
                    type="clientsite"
                    Subtitle="Insert client site description here. 1-2 short sentences would do."/>
            </CardContainer>
        </div>
    );
};