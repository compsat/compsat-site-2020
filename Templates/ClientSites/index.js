import WebsiteCard from "../../components/WebsiteCard";
import header_img from "../../public/static/img/clientsites_header.svg";
import QPICalc_Icon from "../../public/static/img/microsite-qpi-calculator.svg";
import {
  Header_Img,
  Title,
  Subtitle,
  Header_text,
  CardContainer,
} from "./styles";
import { attributes } from "../../content/clientSites.md";

export default () => {
  let { mainHeader, mainDescription, sites } = attributes;

  return (
    <div>
      <Header_Img>
        <img src={header_img} />
      </Header_Img>

      <Header_text>
        <Title>{mainHeader}</Title>
        <Subtitle>{mainDescription}</Subtitle>
      </Header_text>

      <CardContainer>
        {sites.map((site, key) => (
            <WebsiteCard
                key={key}
                MicrositeTitle={site.name}
                PrimaryIcon={QPICalc_Icon}
                // PrimaryIcon={site.thumbnail}
                Subtitle={site.description}
                url={site.url}
                type="clientsite"
            />
        ))}
      </CardContainer>
    </div>
  );
};
