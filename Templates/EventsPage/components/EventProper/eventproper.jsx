import { EventWrapper } from "./styles";
import { attributes } from "../../../../content/events.md";

let {
  eventType1,
} = attributes;

const EventProper = () => (
  <EventWrapper>
    <img
      src="/static/img/bluehacks.png"
      alt="Events Page Illustration"
    />
    <h3>{eventType1[0].event1Title}</h3>
    <p>
      {eventType1[0].event1Description}
    </p>
  </EventWrapper>
);

export default EventProper;
