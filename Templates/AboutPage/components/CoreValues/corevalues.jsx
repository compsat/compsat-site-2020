import { CoreValueContainer, CoreValueLeft, CoreValueRight } from "./styles";

const CoreValues = () => (
  <div>
    <h2>Our Core Values</h2>
    <CoreValueContainer>
      <CoreValueLeft>
        <img
          src="/static/img/corevalues_illustration1.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <p>Continuously aspire for self-growth and excellence</p>
      </CoreValueLeft>
      <CoreValueRight>
        <img
          src="/static/img/corevalues_illustration2.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Log0"
        />
        <p>Leverage collaboration</p>
      </CoreValueRight>
    </CoreValueContainer>
    <CoreValueContainer>
      <CoreValueLeft>
        <img
          src="/static/img/corevalues_illustration3.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <p>Cultivate an empowering, supportive, and caring community</p>
      </CoreValueLeft>
      <CoreValueRight>
        <img
          src="/static/img/corevalues_illustration4.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <p>Provide impactful and innovative services</p>
      </CoreValueRight>
    </CoreValueContainer>
  </div>
);

export default CoreValues;
