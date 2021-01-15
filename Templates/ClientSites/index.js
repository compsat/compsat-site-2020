import header_img from "../../public/static/img/clientsites_header.svg"
import {
    Header_Img,
    Title,
    Subtitle,
    Header_text,

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
        </div>
    );
};