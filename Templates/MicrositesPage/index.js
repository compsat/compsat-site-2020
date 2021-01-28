import WebsiteCard from "../../components/WebsiteCard";
import MicrositeHeader from "./components/Header";
import { Container } from "./styles";
import QPICalc_Icon from "../../public/static/img/microsite-qpi-calculator.svg";
// import Gearbox_Icon from "../../public/static/img/microsite-gearbox.svg";
// import Wildcard_Icon from "../../public/static/img/microsite-wildcard.svg";
import { attributes } from "../../content/microsites.md";

export default () => {
  let {
    mainHeader,
    mainDescription,
    microsites,
  } = attributes;

  return (
    <div>
      <MicrositeHeader mainHeader={mainHeader} mainDescription={mainDescription} />
      <Container>
        {microsites.map((site, key) => (
            <WebsiteCard 
                key={key}
                type="microsite"
                MicrositeTitle={site.name}
                PrimaryIcon={QPICalc_Icon}
                url={site.url}
            />
        ))}
      </Container>
    </div>
  );
};
