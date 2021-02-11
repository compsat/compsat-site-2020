import { EventWrapper } from "./styles";

const EventProper = ({ eventTitle, eventDesc, imgName, imgAlt }, props) => (
  <EventWrapper>
    <img src={"/static/img/" + imgName} alt={imgAlt} />
    <div>
      <h3>{eventTitle}</h3>
      <p>{eventDesc}</p>
    </div>
  </EventWrapper>
);

export default EventProper;
