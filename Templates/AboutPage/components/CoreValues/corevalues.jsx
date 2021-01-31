import { CoreValuesWrapper, CoreValueContainer, CoreValueLeft, CoreValueRight, TopValue} from "./styles";
import { attributes } from "../../../../content/aboutUs.md";

let {
  coreValues,
} = attributes;


const CoreValues = () => (
  <CoreValuesWrapper>
    <h2>Our Core Values</h2>
    <CoreValueContainer>
      <CoreValueLeft>
        <img
          src="/static/img/corevalues_illustration1.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <TopValue>{coreValues[0].coreValue1}</TopValue>
      </CoreValueLeft>
      <CoreValueRight>
        <img
          src="/static/img/corevalues_illustration2.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <TopValue>{coreValues[0].coreValue2}</TopValue>
      </CoreValueRight>
    </CoreValueContainer>
    <CoreValueContainer>
      <CoreValueLeft>
        <img
          src="/static/img/corevalues_illustration3.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <p>{coreValues[0].coreValue3}</p>
      </CoreValueLeft>
      <CoreValueRight>
        <img
          src="/static/img/corevalues_illustration4.svg"
          alt="Core Values Illustration: One Fourth of the CompSAt Logo"
        />
        <p>{coreValues[0].coreValue4}</p>
      </CoreValueRight>
    </CoreValueContainer>
  </CoreValuesWrapper>
);

export default CoreValues;
