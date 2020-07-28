import { WATRPeopleWrapper, WATRPeopleButtonWrapper } from "./styles";
import SecondaryButton from "../../../../components/SecondaryButton";

const WeAreTheRightPeople = () => (
  <WATRPeopleWrapper>
    <img src="/static/img/right_people.svg" alt="Section Illustration" />

    <h2>We are the right people for the job</h2>
    <p>
      We may be composed of students, but CompSAt as an organization has over a
      decade of experience in successfully creating websites and systems for
      various clients. It is our community of competent and experienced people
      that enables us to create a real impact.
    </p>

    <WATRPeopleButtonWrapper>
      <SecondaryButton>In-house projects</SecondaryButton>
      <SecondaryButton>Client websites</SecondaryButton>
    </WATRPeopleButtonWrapper>
  </WATRPeopleWrapper>
);

export default WeAreTheRightPeople;
