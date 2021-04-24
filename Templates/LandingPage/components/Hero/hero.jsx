import { HeroWrapper, HeroTextWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";
import Link from "next/link";

const Hero = ({ heroHeader, heroDescription }) => (
  <HeroWrapper>
    <img
      src="/static/img/hero_illustration_mobile.svg"
      alt="Landing Page Illustration"
    />
    <HeroTextWrapper>
      <h1>{heroHeader}</h1>
      <p>{heroDescription}</p>
      <Link href="/contact-us" passHref>
        <PrimaryButton isLink>Get in touch</PrimaryButton>
      </Link>
    </HeroTextWrapper>
  </HeroWrapper>
);

export default Hero;
