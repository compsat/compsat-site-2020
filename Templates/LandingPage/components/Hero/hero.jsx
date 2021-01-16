import { HeroWrapper, HeroTextWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const Hero = () => (
  <HeroWrapper>
    <img
      src="/static/img/hero_illustration_mobile.svg"
      alt="Landing Page Illustration"
    />
    <HeroTextWrapper>
      <h1>Here in CompSAt, we believe that anyone can code.</h1>
      <p>
        We are the Computer Society of the Ateneo (CompSAt). Our mission is to
        make programming and software development accessible to anyone.
      </p>
      <PrimaryButton>Get in touch</PrimaryButton>
    </HeroTextWrapper>
  </HeroWrapper>
);

export default Hero;
