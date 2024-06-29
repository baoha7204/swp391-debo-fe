import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";
import { API_ENDPOINTS } from "@/utils/api";

const DentistCalendar = () => {
  const { fetchRemote } = useFetchCalendar({
    url: API_ENDPOINTS.DENTIST.CALENDAR,
  });
  return <MyScheduler getRemoteEvents={fetchRemote} />;
};

export default DentistCalendar;
