import { WWDWrapper, SectionWrapper, SemiSectionWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const WhatWeDo = () => (
  <WWDWrapper>
    <h2>What do we do in CompSAt?</h2>
    <SemiSectionWrapper>
      <SectionWrapper>
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="64" cy="64" r="64" fill="#C4C4C4" />
        </svg>
        <h3>Development Services</h3>
        <p>
          We create high-quality websites and systems along with a range of
          add-ons that help provide the best experience for you and your users.
        </p>
        <PrimaryButton>Learn more about our services</PrimaryButton>
      </SectionWrapper>
      <SectionWrapper>
        <svg
          width="128"
          height="128"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <circle cx="64" cy="64" r="64" fill="#C4C4C4" />
        </svg>
        <h3>Community Formation</h3>
        <p>
          We provide avenues for members and non-members to explore different
          technologies as one community.
        </p>
        <PrimaryButton>Learn more about our services</PrimaryButton>
      </SectionWrapper>
    </SemiSectionWrapper>
  </WWDWrapper>
);

export default WhatWeDo;
