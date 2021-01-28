import { WWDWrapper, SectionWrapper, SemiSectionWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const WhatWeDo = ({ whatWeDoHeader, whatWeDoItems }) => (
  <WWDWrapper>
    <div className="wwdbg">
      <svg
        // width="1440"
        // height="948"
        viewBox="0 0 1440 948"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M0 0H1440V882.931C1440 882.931 1222.86 948 1080 948C937.138 948 720 882.931 720 882.931C720 882.931 502.725 819.678 360 819.865C217.207 820.051 0 883.932 0 883.932V0Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="720"
            y1="-1.00106"
            x2="720"
            y2="946.999"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#07106D" />
            <stop offset="1" stop-color="#EE4266" />
          </linearGradient>
        </defs>
      </svg>
    </div>

    <h2>{whatWeDoHeader}</h2>
    <SemiSectionWrapper>
      {whatWeDoItems.map((item, key) => (
        <SectionWrapper key={key}>
          {key % 2 === 0 ? (
            <svg
              width="280"
              height="256"
              viewBox="0 0 280 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M133 149L277.597 149C278.487 149 278.933 147.926 278.307 147.295L133.71 1.72103C133.081 1.08779 132 1.53321 132 2.42575L132 148C132 148.552 132.448 149 133 149Z"
                fill="#851859"
              />
              <path
                d="M144.782 132.954L242.243 132.954C243.134 132.954 243.58 131.877 242.95 131.247L145.489 33.7991C144.859 33.1692 143.782 33.6154 143.782 34.5063L143.782 131.954C143.782 132.506 144.23 132.954 144.782 132.954Z"
                fill="#010527"
              />
              <rect y="107" width="194" height="129" fill="#DEDEDE" />
              <rect x="11" y="117" width="172" height="108" fill="white" />
              <rect y="236" width="265" height="20" fill="#F2CCD4" />
              <rect y="236" width="74" height="20" fill="#717282" />
              <path
                d="M30 55C30 53.3431 31.3431 52 33 52H161C162.657 52 164 53.3431 164 55V225H30V55Z"
                fill="#5C184E"
              />
              <path
                d="M30 55C30 53.3431 31.3431 52 33 52H161C162.657 52 164 53.3431 164 55V61H30V55Z"
                fill="#D7D7D7"
              />
              <circle cx="158.5" cy="56.5" r="2.5" fill="#EE4266" />
              <circle cx="144.5" cy="56.5" r="2.5" fill="#07106D" />
              <circle cx="151.5" cy="56.5" r="2.5" fill="white" />
              <path
                d="M30 61H164V136.5C164 136.5 146 134.578 111.5 165C77 195.422 30 154.623 30 154.623V61Z"
                fill="#BA1C51"
              />
              <rect x="107" y="71" width="50" height="36" rx="1" fill="black" />
              <line
                x1="126.559"
                y1="81.1213"
                x2="119.121"
                y2="88.5588"
                stroke="#BA1C51"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                x1="119.121"
                y1="88.5588"
                x2="126.559"
                y2="95.9963"
                stroke="#BA1C51"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                x1="137.441"
                y1="95.9964"
                x2="144.879"
                y2="88.5589"
                stroke="#BA1C51"
                stroke-width="3"
                stroke-linecap="round"
              />
              <line
                x1="144.879"
                y1="88.5588"
                x2="137.441"
                y2="81.1213"
                stroke="#BA1C51"
                stroke-width="3"
                stroke-linecap="round"
              />
              <rect x="37" y="102" width="63" height="4" fill="white" />
              <rect x="37" y="92" width="63" height="4" fill="white" />
              <rect x="37" y="82" width="63" height="4" fill="white" />
              <rect x="37" y="72" width="63" height="4" fill="white" />
              <rect x="57" y="129" width="35" height="36" fill="white" />
              <rect x="102" y="129" width="35" height="36" fill="white" />
              <rect x="80" y="119" width="34" height="4" fill="white" />
              <rect x="37" y="184" width="63" height="4" fill="white" />
              <rect x="37" y="194" width="63" height="4" fill="white" />
              <rect x="37" y="204" width="63" height="4" fill="white" />
              <path
                d="M183.5 139C141.803 139 108 172.803 108 214.5H259C259 172.803 225.197 139 183.5 139Z"
                fill="#EBF3F4"
              />
              <path
                d="M247.164 195.58C238.901 168.047 213.524 148 183.5 148C150.839 148 123.677 171.723 118.064 203H248.936C248.483 200.474 247.889 197.998 247.164 195.58Z"
                fill="#202345"
                fill-opacity="0.96"
              />
              <line
                x1="147.364"
                y1="26.3138"
                x2="152.314"
                y2="21.364"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="154.435"
                y1="33.3848"
                x2="159.385"
                y2="28.4351"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="161.506"
                y1="40.4559"
                x2="166.456"
                y2="35.5061"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="168.577"
                y1="47.527"
                x2="173.527"
                y2="42.5773"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="175.648"
                y1="54.5981"
                x2="180.598"
                y2="49.6483"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="182.72"
                y1="61.6691"
                x2="187.669"
                y2="56.7194"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="189.791"
                y1="68.7402"
                x2="194.74"
                y2="63.7904"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="196.862"
                y1="75.8112"
                x2="201.811"
                y2="70.8615"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="203.933"
                y1="82.8822"
                x2="208.882"
                y2="77.9325"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="211.004"
                y1="89.9534"
                x2="215.954"
                y2="85.0037"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="218.075"
                y1="97.0245"
                x2="223.025"
                y2="92.0747"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="225.146"
                y1="104.096"
                x2="230.096"
                y2="99.1458"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="232.217"
                y1="111.167"
                x2="237.167"
                y2="106.217"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="239.288"
                y1="118.238"
                x2="244.238"
                y2="113.288"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="246.359"
                y1="125.309"
                x2="251.309"
                y2="120.359"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="253.43"
                y1="132.38"
                x2="258.38"
                y2="127.43"
                stroke="black"
                stroke-width="2"
              />
              <line
                x1="249"
                y1="208"
                x2="249"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="239"
                y1="208"
                x2="239"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="229"
                y1="208"
                x2="229"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="219"
                y1="208"
                x2="219"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="209"
                y1="208"
                x2="209"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="199"
                y1="208"
                x2="199"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="189"
                y1="208"
                x2="189"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="179"
                y1="208"
                x2="179"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="169"
                y1="208"
                x2="169"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="159"
                y1="208"
                x2="159"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="149"
                y1="208"
                x2="149"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="139"
                y1="208"
                x2="139"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="129"
                y1="208"
                x2="129"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
              <line
                x1="119"
                y1="208"
                x2="119"
                y2="215"
                stroke="#07106D"
                stroke-width="2"
              />
            </svg>
          ) : (
            <svg
              width="280"
              height="256"
              viewBox="0 0 280 256"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect y="106.999" width="194" height="129" fill="#DEDEDE" />
              <rect x="11" y="116.999" width="172" height="108" fill="white" />
              <rect y="235.999" width="265" height="20" fill="#F2CCD4" />
              <rect y="235.999" width="74" height="20" fill="#717282" />
              <rect
                x="40.0912"
                y="85.7003"
                width="94.2146"
                height="28.0639"
                rx="5"
                fill="#07106D"
              />
              <rect
                x="40.0912"
                y="95.723"
                width="178.406"
                height="120.274"
                rx="1"
                fill="#07106D"
              />
              <rect
                x="118.527"
                y="58.1254"
                width="10.0228"
                height="81.2971"
                transform="rotate(-11.7597 118.527 58.1254)"
                fill="black"
              />
              <rect
                x="25.8584"
                y="137.634"
                width="10.0228"
                height="102.233"
                transform="rotate(-75.6381 25.8584 137.634)"
                fill="black"
              />
              <rect
                x="252.341"
                y="132.037"
                width="10.0228"
                height="102.233"
                transform="rotate(76.8808 252.341 132.037)"
                fill="black"
              />
              <path
                d="M69.9652 100.482C70.0793 100.041 70.4775 99.7324 70.9334 99.7324H247.274C247.928 99.7324 248.406 100.35 248.242 100.983L218.691 215.248C218.577 215.689 218.179 215.997 217.723 215.997H41.3821C40.7282 215.997 40.2502 215.38 40.414 214.747L69.9652 100.482Z"
                fill="#BA1C51"
              />
              <rect
                x="162.738"
                y="152.534"
                width="10.0228"
                height="102.233"
                transform="rotate(-129.542 162.738 152.534)"
                fill="black"
              />
              <rect
                x="135.205"
                y="139.523"
                width="10.0228"
                height="101.122"
                transform="rotate(134.626 135.205 139.523)"
                fill="black"
              />
              <rect
                x="167.788"
                y="82.6771"
                width="10.0228"
                height="54.9892"
                transform="rotate(20.714 167.788 82.6771)"
                fill="black"
              />
              <rect
                x="241.101"
                y="86.239"
                width="10.0228"
                height="33.4586"
                transform="rotate(164.071 241.101 86.239)"
                fill="black"
              />
              <rect
                x="62.2906"
                y="59.8721"
                width="10.0228"
                height="37.7476"
                transform="rotate(-169.436 62.2906 59.8721)"
                fill="black"
              />
              <rect
                x="133.71"
                y="48.0747"
                width="10.0228"
                height="33.4586"
                transform="rotate(-122.727 133.71 48.0747)"
                fill="black"
              />
              <circle cx="145.331" cy="156.862" r="23.0525" fill="black" />
              <circle cx="145.339" cy="156.274" r="14.032" fill="white" />
              <circle
                cx="175.964"
                cy="73.2359"
                r="14.032"
                transform="rotate(6.82287 175.964 73.2359)"
                fill="black"
              />
              <circle
                cx="176.184"
                cy="73.4545"
                r="7.01598"
                transform="rotate(6.82287 176.184 73.4545)"
                fill="#BA1C51"
              />
              <circle
                cx="224.073"
                cy="43.1676"
                r="14.032"
                transform="rotate(6.82287 224.073 43.1676)"
                fill="black"
              />
              <circle
                cx="224.293"
                cy="43.386"
                r="7.01598"
                transform="rotate(6.82287 224.293 43.386)"
                fill="#BA1C51"
              />
              <circle
                cx="16.8497"
                cy="127.93"
                r="14.032"
                transform="rotate(13.1139 16.8497 127.93)"
                fill="black"
              />
              <circle
                cx="17.0446"
                cy="128.171"
                r="7.01598"
                transform="rotate(13.1139 17.0446 128.171)"
                fill="#BA1C51"
              />
              <circle
                cx="262.925"
                cy="132.976"
                r="14.032"
                transform="rotate(165.633 262.925 132.976)"
                fill="black"
              />
              <circle
                cx="262.641"
                cy="132.852"
                r="7.01598"
                transform="rotate(165.633 262.641 132.852)"
                fill="#BA1C51"
              />
              <circle
                cx="54.9773"
                cy="66.716"
                r="14.032"
                transform="rotate(10.4504 54.9773 66.716)"
                fill="black"
              />
              <circle
                cx="55.1845"
                cy="66.9478"
                r="7.01598"
                transform="rotate(10.4504 55.1845 66.9478)"
                fill="#BA1C51"
              />
              <circle
                cx="123.845"
                cy="51.1858"
                r="14.032"
                transform="rotate(6.82287 123.845 51.1858)"
                fill="black"
              />
              <circle
                cx="124.065"
                cy="51.4043"
                r="7.01598"
                transform="rotate(6.82287 124.065 51.4043)"
                fill="#BA1C51"
              />
              <circle
                cx="167.946"
                cy="19.1127"
                r="14.032"
                transform="rotate(6.82287 167.946 19.1127)"
                fill="black"
              />
              <circle
                cx="168.165"
                cy="19.3312"
                r="7.01598"
                transform="rotate(6.82287 168.165 19.3312)"
                fill="#BA1C51"
              />
              <circle
                cx="64.5282"
                cy="14.9922"
                r="14.032"
                transform="rotate(4.06443 64.5282 14.9922)"
                fill="black"
              />
              <circle
                cx="64.6112"
                cy="15.2903"
                r="7.01598"
                transform="rotate(36.4203 64.6112 15.2903)"
                fill="#BA1C51"
              />
            </svg>
          )}
          <h3>{item.header}</h3>
          <p>{item.description}</p>
          <PrimaryButton
            onClick={(e) => {
              e.preventDefault();
              window.location.href = item.buttonUrl;
            }}
          >
            {item.buttonText}
          </PrimaryButton>
        </SectionWrapper>
      ))}
    </SemiSectionWrapper>
  </WWDWrapper>
);

export default WhatWeDo;
