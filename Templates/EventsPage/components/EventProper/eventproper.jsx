import { EventWrapper } from "./styles";

const EventProper = ({ eventTitle, eventDesc }, props) => (
  <EventWrapper>
    <img src="/static/img/bluehacks.png" alt="Events Page Illustration" />
    <div>
      <h3>{eventTitle}</h3>
      <p>{eventDesc}</p>
    </div>
  </EventWrapper>
);

export default EventProper;
