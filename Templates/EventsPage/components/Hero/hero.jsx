import { HeroWrapper, HeroTextWrapper } from "./styles";

const Hero = () => (
  <HeroWrapper>
    <img
      src="/static/img/events_illustration.svg"
      alt="Events Page Illustration"
    />
    <HeroTextWrapper>
      <h1>Events</h1>
      <p>
        CompSAt is a home to students desiring to learn about programming and
        software development, as well as new technologies emerging in this
        fast-growing world. Our various events and activities provide avenues
        for students to learn, appreciate, and excel in these fields.
      </p>
    </HeroTextWrapper>
  </HeroWrapper>
);

export default Hero;
