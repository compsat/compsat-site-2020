import { HeroWrapper, HeroTextWrapper } from "./styles";
import { attributes } from "../../../../content/events.md";

let { eventsHeader } = attributes;

const Hero = () => (
  <HeroWrapper>
    <div className="ehbg">
      <svg
        viewBox="0 0 2880 1536"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 1335.23C0 1335.23 944 1281.67 1712 1447.37C2480 1613.07 2880 1495.62 2880 1495.62V0L0 0L0 1335.23Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="1333"
            y1="1536"
            x2="1267.1"
            y2="-31.2287"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#EE4266" />
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
