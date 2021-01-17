import { EventsPageWrapper, EventsCategoryWrapper } from "./styles";
import Hero from "./components/Hero";
import EventCategory from "./components/EventCategory";
import EventProper from "./components/EventProper";

export default () => {
  return (
    <EventsPageWrapper>
      <Hero />
      {/* EventsCategoryWrapper is different from EventCategoryWrapper found in EventCategory component */}
      <EventsCategoryWrapper>
        <EventCategory />
        <EventProper className='eventProper' />
        <EventProper className="eventProper" />
        <EventProper className="eventProper" />
      </EventsCategoryWrapper>
    </EventsPageWrapper>
  );
};
