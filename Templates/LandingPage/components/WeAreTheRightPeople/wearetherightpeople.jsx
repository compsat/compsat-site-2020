import { WATRPeopleWrapper, WATRPeopleButtonWrapper } from "./styles";
import SecondaryButton from "../../../../components/SecondaryButton";
import Link from "next/link";

const WeAreTheRightPeople = ({ viewPagesHeader, viewPagesDescription }) => (
  <WATRPeopleWrapper>
    <img src="/static/img/right_people.svg" alt="Section Illustration" />

    <h2>{viewPagesHeader}</h2>
    <p>{viewPagesDescription}</p>

    <WATRPeopleButtonWrapper>
      <Link passHref href="/microsites">
        <SecondaryButton>In-house projects</SecondaryButton>
      </Link>
      <Link passHref href="/client-sites">
        <SecondaryButton>Client websites</SecondaryButton>
      </Link>
    </WATRPeopleButtonWrapper>
  </WATRPeopleWrapper>
);

export default WeAreTheRightPeople;
