import { ProcessedEvent } from "@aldabil/react-scheduler/types";

const CalendarPatientEvents: ProcessedEvent[] = [
  {
    event_id: 1,
    title: "Check up for Teeth Cleaning",
    start: new Date(new Date(new Date().setHours(9)).setMinutes(0)),
    end: new Date(new Date(new Date().setHours(10)).setMinutes(0)),
  },
  {
    event_id: 2,
    title: "Teeth Cleaning",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
        new Date().getDate() - 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(0)).setDate(
        new Date().getDate() - 2
      )
    ),
  },
  {
    event_id: 3,
    title: "Teeth Whitening",
    start: new Date(
      new Date(new Date(new Date().setHours(10)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(11)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
  },
  {
    event_id: 3,
    title: "Teeth Whitening",
    start: new Date(
      new Date(new Date(new Date().setHours(13)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(14)).setMinutes(30)).setDate(
        new Date().getDate() + 2
      )
    ),
  },
  {
    event_id: 4,
    title: "Check up",
    start: new Date(
      new Date(new Date(new Date().setHours(15)).setMinutes(30)).setDate(
        new Date().getDate() + 4
      )
    ),
    end: new Date(
      new Date(new Date(new Date().setHours(16)).setMinutes(30)).setDate(
        new Date().getDate() + 4
      )
    ),
  },
];

export { CalendarPatientEvents };
