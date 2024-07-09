import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import { useContext, useEffect } from "react";
import dayjs from "dayjs";
import ReactRouterPrompt from "react-router-prompt";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import useCreateAppointment from "./hooks/useCreateAppointment";
import BranchCardSummary from "./components/BranchCard";
import DentistCardSummary from "./components/DentistCard";
import TreatmentCardSummary from "./components/TreatmentCard";
import DateSlotSummary from "./components/DateSlotCard";
import { ProgressContext } from "../progress.context";
import { errorToastHandler } from "@/utils/toast/actions";
import { ExitWarningModalStyle } from "./style";
import useCancelBulk from "../hooks/useCancel";

const SummaryBooking = () => {
  const { handleDoneDecrement } = useContext(ProgressContext);
  const { data, setData, isLoading, appointments } = useCreateAppointment();
  const { cancelBulk } = useCancelBulk();

  useEffect(() => {
    if (appointments && appointments.length > 0) {
      setData((prev) => ({ ...prev, appointments }));
    }
  }, [appointments, setData]);

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
                  onBack={handleDoneDecrement}
                />
              </Grid>
            );
          })}
        </Grid>
      </Grid>
      <ReactRouterPrompt
        when={data?.appointments ? data.appointments.length > 0 : false}
        beforeConfirm={async () => {
          try {
            await cancelBulk(data!.appointments!.map((a) => a.id));
          } catch (error) {
            errorToastHandler({
              message: "Something went wrong when cancelling appointment",
            });
          }
        }}
      >
        {({ isActive, onConfirm, onCancel }) => (
          <Modal open={isActive} onClose={onCancel}>
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
              <Typography variant="h6">Do you really want to leave?</Typography>
              <Typography variant="h6" justifyContent="center">
                Your current appointments will be canceled!
              </Typography>
              <Box display="flex" justifyContent="center">
                <Button type="button" onClick={onCancel}>
                  Cancel
                </Button>
                <Button type="button" onClick={onConfirm}>
                  Ok
                </Button>
              </Box>
            </Box>
          </Modal>
        )}
      </ReactRouterPrompt>
    </>
  );
};

export default SummaryBooking;
