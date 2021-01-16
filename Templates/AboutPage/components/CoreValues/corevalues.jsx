import { CoreValuesWrapper, CoreValueContainer, CoreValueLeft, CoreValueRight, TopValue} from "./styles";

const CoreValues = () => (
  <CoreValuesWrapper>
    <h2>Our Core Values</h2>
    <CoreValueContainer>
      <CoreValueLeft>
        <img
          src="/static/img/corevalues_illustration1.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <TopValue>Continuously aspire for self-growth and excellence</TopValue>
      </CoreValueLeft>
      <CoreValueRight>
        <img
          src="/static/img/corevalues_illustration2.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <TopValue>Leverage collaboration</TopValue>
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
  </CoreValuesWrapper>
);

export default CoreValues;
