import { CoreCompWrapper, CoreCompBox1, CoreCompBox2 } from "./styles";

const CoreCompetencies = () => (
  <CoreCompWrapper>
    <h2>Our Core Competencies</h2>
    <CoreCompBox1>
      <img
        src="/static/img/corecompetencies_illustration1.svg"
        alt="Core Competency Illustration: Providing Programming and Software Development Training"
      />
      <p>We provide programming and software development training that caters to both the interests of the members and meets the demands of the industry through workshops, mentorship programs, and the like. </p>
    </CoreCompBox1>
    <CoreCompBox2>
      <img
        src="/static/img/corecompetencies_illustration2.svg"
        alt="Core Competency Illustration: Providing Programming and Software Development services"
      />
      <p>We provide sustainable, effective, and high-quality programming and software development services for students, as well as commercial and non-profit organizations based within and outside the Ateneo community.</p>
    </CoreCompBox2>
  </CoreCompWrapper>
);

export default CoreCompetencies;
