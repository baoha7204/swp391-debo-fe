import { Scheduler } from "@aldabil/react-scheduler";

import { schedulerDayConfig, schedulerWeekConfig } from "@/config/scheduler";
import { MySchedulerProps } from "./types/core";

const MyScheduler = ({ getRemoteEvents, ...rest }: MySchedulerProps) => {
  return (
    <Scheduler
      day={schedulerDayConfig}
      week={schedulerWeekConfig}
      // TODO: drag and drop event => re-schedule
      // TODO: delete event => cancel
      draggable={false}
      getRemoteEvents={getRemoteEvents}
      // onConfirm={onConfirm}
      {...rest}
    />
  );
};

export default MyScheduler;
