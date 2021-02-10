import { HeroWrapper, HeroTextWrapper } from "./styles";
import { attributes } from "../../../../content/events.md";

let { eventsHeader } = attributes;

const Hero = () => (
  <HeroWrapper>
    <div className="ehbg">
      <svg
        width="1440"
        height="768"
        viewBox="0 0 1440 768"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 667.615C0 667.615 472 640.837 856 723.685C1240 806.533 1440 747.808 1440 747.808V0L0 0L0 667.615Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="666.5"
            y1="768"
            x2="633.549"
            y2="-15.6143"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EE4266" />
            <stop offset="1" stop-color="#5C184E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <img
      src="/static/img/events_illustration.svg"
      alt="Events Page Illustration"
    />
    <HeroTextWrapper>
      <h1>Events</h1>
      <p>{eventsHeader}</p>
    </HeroTextWrapper>
  </HeroWrapper>
);

export default Hero;
