import { useNavigate } from "react-router-dom";
import dayjs from "dayjs";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import MyScheduler from "@/components/MyScheduler";
import useFetchCalendar from "@/hooks/useFetchCalendar";
import { API_ENDPOINTS } from "@/utils/api";
import { errorToastHandler } from "@/utils/toast/actions";

const DentistCalendar = () => {
  const navigate = useNavigate();
  const { fetchRemote } = useFetchCalendar({
    url: API_ENDPOINTS.DENTIST.CALENDAR,
  });

  const handleEdit = (event: ProcessedEvent) => {
    // check past
    const date = dayjs(event.start);
    if (date.isBefore(dayjs(), "day")) {
      errorToastHandler({ message: "You can't reschedule past appointments" });
      return;
    }

    // check present, before 2 hours
    if (date.isSame(dayjs(), "day") && event.timeSlot - 2 < dayjs().hour()) {
      errorToastHandler({
        message:
          "You must reschedule an appointment before 2 hours of actual time",
      });
      return;
    }

    navigate(`/dentist/reschedule/${event.id}`);
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
