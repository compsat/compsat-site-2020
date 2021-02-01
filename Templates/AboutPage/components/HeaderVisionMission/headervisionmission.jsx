import { HVMWrapper, MissionContainer, MissionText, MissionBox } from "./styles";
import { attributes } from "../../../../content/aboutUs.md";

let {
  vision,
  mission
} = attributes;

const HeaderVisionMission = () => (
  <HVMWrapper>
    <h1>About CompSAt</h1>
    <h2>Our Vision</h2>
    <p>{vision}</p>
    <h2>Our Mission</h2>
    <MissionText>{mission[0].missionDesc}</MissionText>
    <MissionContainer>
      <MissionBox>
        <img
          src="/static/img/mission_illustration1.svg"
          alt="Mission Illustration: Collaborative Learning"
        />
        <p>{mission[0].mission1}</p>
      </MissionBox>
      <MissionBox>
        <img
          src="/static/img/mission_illustration2.svg"
          alt="Mission Illustration: Leadership Opportunities"
        />
        <p>{mission[0].mission2}</p>
      </MissionBox>
      <MissionBox>
        <img
          src="/static/img/mission_illustration3.svg"
          alt="Mission Illustration: Programming, Development, and Networking Opportunities"
        />
        <p>{mission[0].mission3}</p>
      </MissionBox>
    </MissionContainer>
  </HVMWrapper>
);

export default HeaderVisionMission;
