import { WWDWrapper, SectionWrapper, SemiSectionWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const WhatWeDo = ({ whatWeDoHeader, whatWeDoItems }) => (
  <WWDWrapper>
    <h2>{whatWeDoHeader}</h2>
    <SemiSectionWrapper>
      {whatWeDoItems.map((item, key) => (
        <SectionWrapper key={key}>
          <svg
            width="128"
            height="128"
            viewBox="0 0 128 128"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="64" cy="64" r="64" fill="#C4C4C4" />
          </svg>
          <h3>{item.header}</h3>
          <p>{item.description}</p>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              window.location.href = item.buttonUrl;
            }}
          >
            {item.buttonText}
          </PrimaryButton>
        </SectionWrapper>
      ))}
    </SemiSectionWrapper>
  </WWDWrapper>
);

export default WhatWeDo;
