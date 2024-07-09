import { useNavigate } from "react-router-dom";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { useState } from "react";
import dayjs from "dayjs";
import { Box, Button, Modal, Typography } from "@mui/material";
import MyScheduler from "@/components/MyScheduler";
import { ExitWarningModalStyle } from "@/components/Booking/SummaryBooking/style";
import useFetchCalendar from "@/hooks/useFetchCalendar";
import { API_ENDPOINTS } from "@/utils/api";
import { errorToastHandler } from "@/utils/toast/actions";
import appointmentApi from "@/utils/api/appointmentApi";
import { toastInfo, toastSuccess } from "@/utils/toast";

const Calendar = () => {
  const [open, setOpen] = useState(false);
  const [event, setEvent] = useState<ProcessedEvent | null>(null);
  const navigate = useNavigate();
  const { fetchRemote } = useFetchCalendar({
    url: API_ENDPOINTS.PATIENT.CALENDAR,
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
    navigate(`/patient/booking/reschedule/${event.id}`);
  };

  const handleDelete = async (event: ProcessedEvent) => {
    // check past
    const date = dayjs(event.start);
    if (date.isBefore(dayjs(), "day")) {
      errorToastHandler({ message: "You can't cancel past appointments" });
      return;
    }

    // check present, before 2 hours
    if (date.isSame(dayjs(), "day") && event.timeSlot - 2 < dayjs().hour()) {
      errorToastHandler({
        message: "You must cancel an appointment before 2 hours of actual time",
      });
      return;
    }

    setOpen(true);
    setEvent(event);
  };

  return (
    <>
      <MyScheduler
        getRemoteEvents={fetchRemote}
        role="patient"
        onEdit={handleEdit}
        onDelete={handleDelete}
      />
      <Modal open={open} onClose={() => setOpen(false)}>
        <Box
          sx={{
            ...ExitWarningModalStyle,
            width: 500,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Typography variant="h6">
            Your current appointment will be canceled!
          </Typography>
          <Box display="flex" justifyContent="center">
            <Button type="button" onClick={() => setOpen(false)}>
              Cancel
            </Button>
            <Button
              type="button"
              onClick={async () => {
                if (!event) return;
                try {
                  const { data } = await appointmentApi.cancelOne(event.id);
                  if (!data.success) {
                    errorToastHandler(data);
                    return;
                  }
                  toastSuccess("Canceled successfully!");
                  toastInfo("Notification has been sent to the doctor");
                } catch (error) {
                  errorToastHandler({
                    message: "Something went wrong when cancelling appointment",
                  });
                } finally {
                  setOpen(false);
                }
              }}
            >
              Ok
            </Button>
          </Box>
        </Box>
      </Modal>
    </>
  );
};

export default Calendar;
