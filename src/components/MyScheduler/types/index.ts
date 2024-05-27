import {
  EventActions,
  ProcessedEvent,
  RemoteQuery,
} from "@aldabil/react-scheduler/types";

// TODO: Re-schedule (UPDATE) the event -> onDrag
export type MySchedulerProps = {
  getRemoteEvents: (params: RemoteQuery) => Promise<ProcessedEvent[] | void>;
  onConfirm: (
    event: ProcessedEvent,
    action: EventActions
  ) => Promise<ProcessedEvent>;
};
