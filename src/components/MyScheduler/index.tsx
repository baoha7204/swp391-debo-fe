import { Scheduler } from "@aldabil/react-scheduler";

import { schedulerDayConfig, schedulerWeekConfig } from "@/config/scheduler";
import { MySchedulerProps } from "./types/core";
import MyCustomViewer from "./MyCustomerViewer";

const MyScheduler = ({ getRemoteEvents, ...rest }: MySchedulerProps) => {
  return (
    <Scheduler
      day={schedulerDayConfig}
      week={schedulerWeekConfig}
      // TODO: delete event => cancel
      customViewer={(event, close) => (
        <MyCustomViewer event={event} close={close} />
      )}
      editable={false}
      draggable={false}
      getRemoteEvents={getRemoteEvents}
      // onConfirm={onConfirm}
      {...rest}
    />
  );
};

export default MyScheduler;
