import { useNavigate } from "react-router-dom";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";
import { API_ENDPOINTS } from "@/utils/api";

const Calendar = () => {
  const navigate = useNavigate();
  const { fetchRemote } = useFetchCalendar({
    url: API_ENDPOINTS.PATIENT.CALENDAR,
  });

  const handleEdit = (event: ProcessedEvent) => {
    navigate(`/patient/booking/reschedule/${event.id}`);
  };

  const handleDelete = (event: ProcessedEvent) => {
    console.log(event.event_id);
  };

  return (
    <MyScheduler
      getRemoteEvents={fetchRemote}
      role="patient"
      onEdit={handleEdit}
      onDelete={handleDelete}
    />
  );
};

export default Calendar;
