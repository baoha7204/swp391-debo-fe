import { ProcessedEvent, RemoteQuery } from "@aldabil/react-scheduler/types";

import { errorToastHandler } from "@/utils/toast/actions";
import useAxiosPrivate from "./useAxiosPrivate";
import { formatDateSlot } from "@/utils/helper";

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
    const beforeEvents = data.data.value.filter(
      (event: Partial<ProcessedEvent>) => event.timeSlot != 12
    );
    const events = beforeEvents.map((event: Partial<ProcessedEvent>) => {
      const startTimeSlot = formatDateSlot(event.timeSlot, event.start);
      const endTimeSlot = formatDateSlot(event.timeSlot + 1, event.start);
      return {
        ...event,
        start: startTimeSlot,
        end: endTimeSlot,
        title: event.name,
      };
    });
    return new Promise((res) => res(events));
  };

  return { fetchRemote } as const;
};

export default useFetchCalendar;
