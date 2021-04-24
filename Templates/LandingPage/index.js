import { LandingPageWrapper } from "./styles";
import Hero from "./components/Hero";
import WhatWeDo from "./components/WhatWeDo";
import WeAreTheRightPeople from "./components/WeAreTheRightPeople";
import Feedback from "./components/Feedback";
import { attributes } from "../../content/home.md";

export default () => {
  let {
    heroHeader,
    heroDescription,
    whatWeDoHeader,
    whatWeDoItems,
    viewPagesHeader,
    viewPagesDescription,
    contactHeader,
    contactDescription,
  } = attributes;

  return (
    <LandingPageWrapper>
      <Hero heroHeader={heroHeader} heroDescription={heroDescription} />
      <WhatWeDo whatWeDoHeader={whatWeDoHeader} whatWeDoItems={whatWeDoItems} />
      <WeAreTheRightPeople
        viewPagesHeader={viewPagesHeader}
        viewPagesDescription={viewPagesDescription}
      />
      <Feedback
        contactHeader={contactHeader}
        contactDescription={contactDescription}
      />
    </LandingPageWrapper>
  );
};
