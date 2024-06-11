import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";

const DentistCalendar = () => {
  const { fetchRemote } = useFetchCalendar({
    url: "http://localhost:5173/dentist/calendar",
  });
  return <MyScheduler getRemoteEvents={fetchRemote} />;
};

export default DentistCalendar;
