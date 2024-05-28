import { ProcessedEvent, RemoteQuery } from "@aldabil/react-scheduler/types";

import { DatetimeSchema } from "@/lib/schema";
import { toastError } from "@/utils/toast";
import { isParsingError } from "@/usecases/handleSubmitForm";

const useFetchCalendar = ({ url }: { url: string }) => {
  const fetchRemote = async (
    params: RemoteQuery
  ): Promise<ProcessedEvent[]> => {
    console.log(params);
    // TODO: use get from apiCaller. Using fetch for demo purpose
    const response = await fetch(url);
    const data = await response.json();
    if (!data.success) {
      toastError(data.message);
      return new Promise((res) => res([]));
    }
    const events = data.data.map((event: Partial<ProcessedEvent>) => {
      if (
        isParsingError(event.start, DatetimeSchema) ||
        isParsingError(event.end, DatetimeSchema)
      ) {
        return new Promise((res) => res([]));
      }
      return {
        ...event,
        start: new Date(event.start!),
        end: new Date(event.end!),
      };
    });
    return new Promise((res) => res(events));
  };

  return { fetchRemote } as const;
};

export default useFetchCalendar;
