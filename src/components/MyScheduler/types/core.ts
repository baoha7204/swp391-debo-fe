import { ProcessedEvent, RemoteQuery } from "@aldabil/react-scheduler/types";
import { EventActionsProps } from "../MyCustomerViewer/EventActions";

export type MySchedulerProps = {
  getRemoteEvents: (params: RemoteQuery) => Promise<ProcessedEvent[] | void>;
  // onConfirm: (
  //   event: ProcessedEvent,
  //   action: EventActions
  // ) => Promise<ProcessedEvent>;
} & Omit<EventActionsProps, "event">;
