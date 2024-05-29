import { ProcessedEvent, RemoteQuery } from "@aldabil/react-scheduler/types";

export type MySchedulerProps = {
  getRemoteEvents: (params: RemoteQuery) => Promise<ProcessedEvent[] | void>;
  // onConfirm: (
  //   event: ProcessedEvent,
  //   action: EventActions
  // ) => Promise<ProcessedEvent>;
};
