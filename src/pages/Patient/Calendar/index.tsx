import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";
import { API_ENDPOINTS } from "@/utils/api";

const Calendar = () => {
  const { fetchRemote } = useFetchCalendar({
    url: API_ENDPOINTS.PATIENT.CALENDAR,
  });
  return <MyScheduler getRemoteEvents={fetchRemote} />;
};

export default Calendar;
