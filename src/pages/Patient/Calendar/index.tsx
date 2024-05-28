import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";

const CalendarPage = () => {
  const { fetchRemote } = useFetchCalendar({
    url: "http://localhost:5173/patient/calendar",
  });
  return <MyScheduler getRemoteEvents={fetchRemote} />;
};

export default CalendarPage;
