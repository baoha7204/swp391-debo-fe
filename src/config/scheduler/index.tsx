import { DayProps } from "@aldabil/react-scheduler/views/Day";
import { WeekProps } from "@aldabil/react-scheduler/views/Week";
import { Button } from "@mui/material";

export const schedulerDayConfig: DayProps = {
  startHour: 8,
  endHour: 20,
  step: 60,
  cellRenderer: ({ start, ...props }) => {
    const hour = start.getHours();
    const disabled = hour === 12;
    return (
      <Button
        sx={{
          background: (theme) =>
            disabled ? theme.palette.secondary.main : "transparent",
          cursor: disabled ? "not-allowed !important" : "pointer",
        }}
        disableRipple={disabled}
        {...(disabled ? {} : props)}
      ></Button>
    );
  },
};

export const schedulerWeekConfig: WeekProps = {
  ...schedulerDayConfig,
  weekDays: [0, 1, 2, 3, 4, 5, 6],
  weekStartOn: 1,
};
