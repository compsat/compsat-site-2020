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
import Head from "next/head";
import { attributes } from "../../content/clientSites.md";

export default () => {
  let { title, description, mainHeader, mainDescription, sites } = attributes;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
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
            PrimaryIcon={site.thumbnail}
            Subtitle={site.description}
            url={site.url}
            type="clientsite"
          />
        ))}
      </CardContainer>
    </div>
  );
};
