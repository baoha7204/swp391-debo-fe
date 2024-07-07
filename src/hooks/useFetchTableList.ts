import { useEffect, useState } from "react";
import { TableControl } from "./useControlTable";
import { errorToastHandler } from "@/utils/toast/actions";
import useAxiosPrivate from "./useAxiosPrivate";

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

  const axiosPrivate = useAxiosPrivate();

  useEffect(() => {
    const abortController = new AbortController();

    const fetchRemote = async () => {
      try {
        const response = await axiosPrivate.get(url, {
          params: {
            page: controller.page,
            limit: controller.rowsPerPage,
          },
          signal: abortController.signal,
        });
        const data = response.data;
        if (!data.success) {
          errorToastHandler(data);
          return;
        }
        setList(data.data.list);
        setCount(data.data.total);
      } catch (error) {
        console.log(error.response);
        if (error.name !== "CanceledError") {
          errorToastHandler(error.response);
        }
      }
    };

    fetchRemote();

    return () => {
      abortController.abort();
    };
  }, [url, controller.page, controller.rowsPerPage, axiosPrivate]);

  return [list, count] as const;
};

export default useFetchTableList;
