import { WATRPeopleWrapper, WATRPeopleButtonWrapper } from "./styles";
import SecondaryButton from "../../../../components/SecondaryButton";

const WeAreTheRightPeople = ({ viewPagesHeader, viewPagesDescription }) => (
  <WATRPeopleWrapper>
    <img src="/static/img/right_people.svg" alt="Section Illustration" />

    <h2>{viewPagesHeader}</h2>
    <p>{viewPagesDescription}</p>

    <WATRPeopleButtonWrapper>
      <SecondaryButton>In-house projects</SecondaryButton>
      <SecondaryButton>Client websites</SecondaryButton>
    </WATRPeopleButtonWrapper>
  </WATRPeopleWrapper>
);

export default WeAreTheRightPeople;
