import { EventCategoryWrapper } from "./styles";
import { attributes } from "../../../../content/events.md";

let {
  eventType1,
} = attributes;

const EventCategory = () => (
  <EventCategoryWrapper>
    <h2>{eventType1[0].eventTypeTitle}</h2>
    <p>
    {eventType1[0].eventTypeDescription}
    </p>
  </EventCategoryWrapper>
);

export default EventCategory;
