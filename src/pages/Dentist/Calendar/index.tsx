import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";
import { API_ENDPOINTS } from "@/utils/api";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { useNavigate } from "react-router-dom";

const DentistCalendar = () => {
  const navigate = useNavigate();
  const { fetchRemote } = useFetchCalendar({
    url: API_ENDPOINTS.DENTIST.CALENDAR,
  });

  const handleEdit = (event: ProcessedEvent) => {
    navigate(`/dentist/booking/reschedule/${event.id}`);
  };

  return (
    <MyScheduler
      getRemoteEvents={fetchRemote}
      role="dentist"
      onEdit={handleEdit}
    />
  );
};

export default DentistCalendar;
