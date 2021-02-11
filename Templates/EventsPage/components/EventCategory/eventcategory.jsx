import { EventCategoryWrapper } from "./styles";

const EventCategory = (
  { eventTypeTitle, eventTypeDesc, background },
  props
) => (
  <EventCategoryWrapper>
    <div className="ecbg">
      <svg
        width="1440"
        height="826"
        viewBox="0 0 1440 826"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M1440 107.836C1440 107.836 968 136.601 584 47.6041C200 -41.3929 0 21.6901 0 21.6901V765.226C0 765.226 336 679.435 640 758.242C944 837.048 1440 825 1440 825V107.836Z"
          fill="url(#paint0_linear)"
        />
        <defs>
          <linearGradient
            id="paint0_linear"
            x1="773.5"
            y1="1.07763e-06"
            x2="811.574"
            y2="842.216"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EE4266" />
            <stop offset="1" stop-color="#5C184E" />
          </linearGradient>
        </defs>
      </svg>
    </div>
    <h2>{eventTypeTitle}</h2>
    <p>{eventTypeDesc}</p>
  </EventCategoryWrapper>
);

export default EventCategory;
