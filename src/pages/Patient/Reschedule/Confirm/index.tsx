import { useContext } from "react";
import dayjs from "dayjs";
import DateSlotSummary from "@/components/Booking/SummaryBooking/components/DateSlotCard";
import { RescheduleContext } from "../reschedule.context";
import DefaultError from "@/pages/500";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { Box } from "@mui/material";

const RescheduleConfirmation = () => {
  const { data, handleBack } = useContext(RescheduleContext);
  return !data?.appointment?.timeSlot || !data.newSlot ? (
    <DefaultError />
  ) : (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      alignItems="center"
    >
      <Box sx={{ flex: "2" }}>
        <DateSlotSummary
          date={dayjs(data.appointment.startDate)}
          slot={data.appointment.timeSlot}
          onBack={handleBack}
        />
      </Box>
      <ArrowForwardIcon sx={{ flex: "1" }} />
      <Box sx={{ flex: "2" }}>
        <DateSlotSummary
          date={dayjs(data.newDate)}
          slot={data.newSlot}
          onBack={handleBack}
        />
      </Box>
    </Box>
  );
};

export default RescheduleConfirmation;
