import { Scheduler } from "@aldabil/react-scheduler";
import { schedulerDayConfig, schedulerWeekConfig } from "@/config/scheduler";
import { MySchedulerProps } from "./types";

const MyScheduler = ({
  getRemoteEvents,
  onConfirm,
  ...rest
}: MySchedulerProps) => {
  return (
    <Scheduler
      day={schedulerDayConfig}
      week={schedulerWeekConfig}
      getRemoteEvents={getRemoteEvents}
      onConfirm={onConfirm}
      {...rest}
    />
  );
};

export default MyScheduler;
