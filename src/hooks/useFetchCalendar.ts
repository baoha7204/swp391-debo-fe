import { ProcessedEvent, RemoteQuery } from "@aldabil/react-scheduler/types";

import { DateSchema } from "@/lib/schema";
import { isParsingError } from "@/usecases/handleSubmitForm";
import { errorToastHandler } from "@/utils/toast/actions";
import useAxiosPrivate from "./useAxiosPrivate";

const useFetchCalendar = ({ url }: { url: string }) => {
  const axiosPrivate = useAxiosPrivate();
  const fetchRemote = async (
    params: RemoteQuery
  ): Promise<ProcessedEvent[]> => {
    const response = await axiosPrivate.get(url, {
      params: {
        start: params.start.toDateString(),
        end: params.end.toDateString(),
        view: params.view,
      },
    });
    const data = response.data;
    if (!data.success) {
      errorToastHandler(data);
      return new Promise((res) => res([]));
    }
    const events = data.data.map((event: Partial<ProcessedEvent>) => {
      if (
        isParsingError(event.start, DateSchema) ||
        isParsingError(event.end, DateSchema)
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
