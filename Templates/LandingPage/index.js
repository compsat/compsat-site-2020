import { LandingPageWrapper } from "./styles";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WeAreTheRightPeople from "./components/WeAreTheRightPeople";
import Feedback from "./components/Feedback";

export default () => {
  return (
    <LandingPageWrapper>
      <Hero />
      <WhatWeDo />
      <WeAreTheRightPeople />
      <Feedback />
    </LandingPageWrapper>
  );
};
