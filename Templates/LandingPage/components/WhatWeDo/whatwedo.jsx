import { WWDWrapper, SectionWrapper, SemiSectionWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const WhatWeDo = () => (
  <WWDWrapper>
    <div className="wwdbg">
      <svg
        // width="1440"
        // height="948"
        viewBox="0 0 1440 948"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1440V882.931C1440 882.931 1222.86 948 1080 948C937.138 948 720 882.931 720 882.931C720 882.931 502.725 819.678 360 819.865C217.207 820.051 0 883.932 0 883.932V0Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="720"
            y1="-1.00106"
            x2="720"
            y2="946.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#07106D" />
            <stop offset="1" stop-color="#EE4266" />
          </linearGradient>
        </defs>
      </svg>
    </div>
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
