import WebsiteCard from "../../components/WebsiteCard";
import MicrositeHeader from "./components/Header";
import { Container } from "./styles";
import QPICalc_Icon from "../../public/static/img/microsite-qpi-calculator.svg";
// import Gearbox_Icon from "../../public/static/img/microsite-gearbox.svg";
// import Wildcard_Icon from "../../public/static/img/microsite-wildcard.svg";
import Head from "next/head";
import { attributes } from "../../content/microsites.md";

export default () => {
  let {
    title,
    description,
    mainHeader,
    mainDescription,
    microsites,
  } = attributes;

  return (
    <div>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description}></meta>
      </Head>
      <MicrositeHeader
        mainHeader={mainHeader}
        mainDescription={mainDescription}
      />
      <Container>
        {microsites.map((site, key) => (
          <WebsiteCard
            key={key}
            type="microsite"
            MicrositeTitle={site.name}
            PrimaryIcon={site.thumbnail}
            url={site.url}
          />
        ))}
      </Container>
    </div>
  );
};
