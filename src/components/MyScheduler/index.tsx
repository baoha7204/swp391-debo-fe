import { Scheduler } from "@aldabil/react-scheduler";

import { schedulerDayConfig, schedulerWeekConfig } from "@/config/scheduler";
import { MySchedulerProps } from "./types/core";
import MyCustomViewer from "./MyCustomerViewer";

const MyScheduler = ({
  getRemoteEvents,
  onEdit,
  role,
  onDelete,
  ...rest
}: MySchedulerProps) => {
  return (
    <Scheduler
      day={schedulerDayConfig}
      week={schedulerWeekConfig}
      customViewer={(event, close) => (
        <MyCustomViewer
          event={event}
          close={close}
          onEdit={onEdit}
          onDelete={onDelete}
          role={role}
        />
      )}
      editable={false}
      draggable={false}
      getRemoteEvents={getRemoteEvents}
      {...rest}
    />
  );
};

export default MyScheduler;
