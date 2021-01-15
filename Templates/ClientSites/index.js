import header_img from "../../public/static/img/clientsites_header.svg"
import {
    Header_Img,
} from "./styles"

export default () => {
    return(
        <div>
            <Header_Img> 
                <img src={header_img} />
            </Header_Img>
        </div>
    );
};