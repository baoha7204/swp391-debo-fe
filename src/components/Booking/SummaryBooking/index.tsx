import { Grid, Typography } from "@mui/material";
import useCreateAppointment from "./hooks/useCreateAppointment";
import BranchCardSummary from "./components/BranchCard";
import DentistCardSummary from "./components/DentistCard";
import TreatmentCardSummary from "./components/TreatmentCard";
import DateSlotSummary from "./components/DateSlotCard";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import dayjs from "dayjs";

const SummaryBooking = () => {
  const { data, isLoading, appointments } = useCreateAppointment();

  return isLoading ? (
    <CircularIndeterminate />
  ) : !appointments || appointments.length === 0 ? (
    <h2>Something wrong when creating summary, please try again</h2>
  ) : (
    <>
      <Typography variant="body1" sx={{ marginTop: -1 }}>
        Please review your appointment details
      </Typography>
      <Grid
        container
        gap={{
          xs: 1,
          sm: 0,
        }}
        spacing={5}
      >
        <Grid container item xs={12} sm={7} gap={1}>
          <Grid item>
            <DentistCardSummary {...data!.dentist!} />
          </Grid>
          <Grid item xs={12}>
            <TreatmentCardSummary {...data!.treatment!} />
          </Grid>
        </Grid>
        <Grid container item xs={12} sm={5} gap={1}>
          <Grid item xs={12}>
            <BranchCardSummary {...data!.branch!} />
          </Grid>
          {appointments.map((appointment, index: number) => {
            return (
              <Grid key={index} item xs={12}>
                <DateSlotSummary
                  date={dayjs(appointment.startDate)}
                  slot={appointment.timeSlot}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
    </>
  );
};

export default SummaryBooking;
