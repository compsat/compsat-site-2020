import { HVMWrapper, MissionContainer } from "./styles";

const HeaderVisionMission = () => (
  <HVMWrapper>
    <h1>About CompSAt</h1>
    <h2>Our Vision</h2>
    <p>CompSAt envisions itself as a community driven by the common belief that anyone
      can code. We strive to nurture curious Ateneans to become competent leaders in software
      development.</p>
    <h2>Our Mission</h2>
    <p>Our mission is to make programming and software development accessible to anyone by:</p>
    <MissionContainer>
      <div>
        <img
          src="/static/img/mission_illustration1.svg"
          alt="Mission Illustration: Collaborative Learning"
        />
        <p>Fostering a culture of collaborative learning among members through tutorials, workshops, talks, and other initiatives</p>
      </div>
      <div>
        <img
          src="/static/img/mission_illustration2.svg"
          alt="Mission Illustration: Leadership Opportunities"
        />
        <p>Providing members with opportunities to apply their skills and grow as leaders through events and development projects</p>
      </div>
      <div>
        <img
          src="/static/img/mission_illustration3.svg"
          alt="Mission Illustration: Programming, Development, and Networking Opportunities"
        />
        <p>Exposing our members to the opportunities in programming and development that contribute to expanding their network</p>
      </div>
    </MissionContainer>
  </HVMWrapper>
);

export default HeaderVisionMission;
