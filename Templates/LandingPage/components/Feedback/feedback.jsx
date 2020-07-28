import { FeedbackWrapper } from "./styles";
import PrimaryButton from "../../../../components/PrimaryButton";

const Feedback = () => (
  <FeedbackWrapper>
    <h2>We’d love to hear from you! </h2>
    <p>Reach out to us about any questions or inquiries you may have.</p>
    <PrimaryButton>
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
  </FeedbackWrapper>
);

export default Feedback;
