import { EventsPageWrapper, EventsCategoryWrapper } from "./styles";
import Hero from "./components/Hero";
import EventCategory from "./components/EventCategory";
import EventProper from "./components/EventProper";
import { attributes } from "../../content/events.md";

export default () => {
  let { eventType} = attributes;

  return (
    <EventsPageWrapper>
      <Hero />
      {/* EventsCategoryWrapper is different from EventCategoryWrapper found in EventCategory component */}
      {eventType.map((event, key) => (
        <EventsCategoryWrapper
          key={key}
          background={key % 2 === 0 ? true : null}
        >
          <EventCategory
            eventTypeTitle={event.eventTypeTitle}
            eventTypeDesc={event.eventTypeDescription}
          />
          {eventType[key].eventProper.map((eventProper, key) => (
            <EventProper
              eventTitle={eventProper.eventTitle}
              eventDesc={eventProper.eventDescription}
              imgName={eventProper.imgName}
              imgAlt={eventProper.imgAlt}
            />
          ))}
        </EventsCategoryWrapper>
      ))}
    </EventsPageWrapper>
  );
};
