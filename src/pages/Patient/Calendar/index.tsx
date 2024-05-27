import { Scheduler } from "@aldabil/react-scheduler";

const exampleEvents = [
  {
    event_id: 1,
    title: "WTF",
    start: new Date("2024/5/27 09:30"),
    end: new Date("2024/5/27 10:30"),
    draggable: false,
  },
  {
    event_id: 2,
    title: "Event 2",
    start: new Date("2024/5/4 10:00"),
    end: new Date("2024/5/4 11:00"),
  },
];

const CalendarPage = () => {
  return <Scheduler events={exampleEvents} />;
};

export default CalendarPage;
