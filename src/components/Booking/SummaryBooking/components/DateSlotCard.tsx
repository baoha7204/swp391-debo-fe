import { useContext } from "react";
import { Box, Button, Paper, Typography } from "@mui/material";
import { Dayjs } from "dayjs";
import EventIcon from "@mui/icons-material/Event";
import ScheduleIcon from "@mui/icons-material/Schedule";
import { formatTime } from "@/utils/helper";
import { ProgressContext } from "../../progress.context";

const DateSlotSummary = ({ date, slot }: { date: Dayjs; slot: number }) => {
  const { handleDoneDecrement } = useContext(ProgressContext);

  return (
    <Paper sx={{ padding: 2 }}>
      <Box display="flex" alignItems="center" gap={1}>
        <EventIcon />
        <Typography variant="h6">{date.format("DD MMMM YYYY")}</Typography>
      </Box>
      <Box display="flex" justifyContent="space-between">
        <Box display="flex" alignItems="center" gap={1}>
          <ScheduleIcon />
          <Typography variant="h6">{formatTime(slot)}</Typography>
        </Box>
        <Button
          size="small"
          color="primary"
          sx={{
            fontWeight: 800,
            backgroundColor: "secondary.main",
          }}
          onClick={handleDoneDecrement}
        >
          Change date?
        </Button>
      </Box>
    </Paper>
  );
};

export default DateSlotSummary;
