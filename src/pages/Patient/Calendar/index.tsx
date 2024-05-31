import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";

const Calendar = () => {
  const { fetchRemote } = useFetchCalendar({
    url: "http://localhost:5173/patient/calendar",
  });
  return <MyScheduler getRemoteEvents={fetchRemote} />;
};

export default Calendar;
