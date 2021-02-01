import { HeroWrapper, HeroTextWrapper } from "./styles";
import { attributes } from "../../../../content/events.md";

let {
  eventsHeader,
} = attributes;

const Hero = () => (
  <HeroWrapper>
    <img
      src="/static/img/events_illustration.svg"
      alt="Events Page Illustration"
    />
    <HeroTextWrapper>
      <h1>Events</h1>
      <p>
        {eventsHeader}
      </p>
    </HeroTextWrapper>
  </HeroWrapper>
);

export default Hero;
