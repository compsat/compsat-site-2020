import { AboutPageWrapper, AboutCurve, AboutPath } from "./styles";
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

      <AboutCurve viewBox="0 0 250 450" preserveAspectRatio="none">
        <AboutPath d="M 0 20 Q 30 0 90 25 C 150 50 180 0 250 40 L 250 400 C 100 450 150 350 0 400"></AboutPath>
      </AboutCurve>

      <svg height="0" width="0">
         <defs>
           <linearGradient id="about-gradient" gradientTransform="rotate(90)"><stop offset="50%" stop-color="#BA1C51"></stop><stop offset="100%" stop-color="#541561"></stop></linearGradient>
        </defs>
      </svg>
    </AboutPageWrapper>
  );
};
