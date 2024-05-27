import { DayProps } from "@aldabil/react-scheduler/views/Day";
import { WeekProps } from "@aldabil/react-scheduler/views/Week";

export const schedulerDayConfig: DayProps = {
  startHour: 8,
  endHour: 20,
  step: 60,
};

export const schedulerWeekConfig: WeekProps = {
  ...schedulerDayConfig,
  weekDays: [0, 1, 2, 3, 4, 5],
  weekStartOn: 6,
};
