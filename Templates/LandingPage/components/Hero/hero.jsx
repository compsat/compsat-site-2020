import { HeroWrapper, HeroTextWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const Hero = ({ heroHeader, heroDescription }) => (
  <HeroWrapper>
    <img
      src="/static/img/hero_illustration_mobile.svg"
      alt="Landing Page Illustration"
    />
    <HeroTextWrapper>
      <h1>{heroHeader}</h1>
      <p>{heroDescription}</p>
      <PrimaryButton>Get in touch</PrimaryButton>
    </HeroTextWrapper>
  </HeroWrapper>
);

export default Hero;
