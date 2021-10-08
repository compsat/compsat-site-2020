import {
  OfficerContent,
  OfficerDetails,
  OfficerName,
  OfficerPicture,
} from "../Officers/styles";
import { ModeratorContainer } from "./styles";
import { attributes } from "../../../../content/aboutUs.md";

const Moderator = () => {
  let { moderator } = attributes;

  return (
    <>
      <h2>Moderator</h2>

      <ModeratorContainer>
        <OfficerPicture image={`/static/img/officers/${moderator.image}`} />
        <OfficerContent>
          <OfficerName>{moderator.name}</OfficerName>
          <OfficerDetails>
            <a href={`mailto:${moderator.email}`}>{moderator.email}</a>
          </OfficerDetails>
        </OfficerContent>
      </ModeratorContainer>
    </>
  );
};

export default Moderator;
