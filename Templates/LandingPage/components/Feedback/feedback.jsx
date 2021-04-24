import { FeedbackWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";
import Link from "next/link";

const Feedback = ({ contactHeader, contactDescription }) => (
  <FeedbackWrapper>
    <h2>{contactHeader}</h2>
    <p>{contactDescription}</p>
    <Link passHref href="/contact-us">
      <PrimaryButton className="button">
        Get in touch
        <svg
          width="19"
          height="10"
          viewBox="0 0 19 10"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.0113 3.875H0.5V6.125H14.0113V9.5L18.5 5L14.0113 0.5V3.875Z"
            fill="#F6F6F6"
          />
        </svg>
      </PrimaryButton>
    </Link>
  </FeedbackWrapper>
);

export default Feedback;
