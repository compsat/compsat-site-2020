import { AboutPageWrapper } from "./styles";
import HeaderVisionMission from "./components/HeaderVisionMission";
import CoreCompetencies from "./components/CoreCompetencies";
import CoreValues from "./components/CoreValues";
import Officers from "./components/Officers";

export default () => {
  return (
    <AboutPageWrapper>
      <HeaderVisionMission />
      <CoreCompetencies />
      <CoreValues />
      <Officers />
    </AboutPageWrapper>
  );
};
