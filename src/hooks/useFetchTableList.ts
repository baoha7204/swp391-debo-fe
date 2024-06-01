import { useEffect, useState } from "react";
import { toastError } from "@/utils/toast";
import { TableControl } from "./useControlTable";
import { get } from "@/utils/apiCaller";

export type ListDataResponse<T> = {
  list: T[];
  total: number;
};

const useFetchTableList = <T>({
  url,
  controller,
}: {
  url: string;
  controller: TableControl;
}) => {
  const [list, setList] = useState<T[]>([]);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const abortController = new AbortController();

    const fetchRemote = async () => {
      try {
        const response = await get<ListDataResponse<T>>(
          url,
          // TODO: set false to true -> protected route
          false,
          {
            page: controller.page,
            limit: controller.rowsPerPage,
          },
          {
            signal: abortController.signal,
          }
        );
        const data = response.data;
        if (!data.success) {
          toastError(data.message);
          return;
        }
        setList(data.data.list);
        setCount(data.data.total);
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.error("error:", error.message);
        }
      }
    };

    fetchRemote();

    return () => {
      console.log("aborting...");
      abortController.abort();
    };
  }, [url, controller.page, controller.rowsPerPage]);

  return [list, count] as const;
};

export default useFetchTableList;
