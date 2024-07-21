import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { formatNumericMonthToAbbreviated } from "@/utils/helper";
import { errorToastHandler } from "@/utils/toast/actions";
import dentistDashboardApi from "@/utils/api/dashboardApi/dentist";
import { UserContext } from "@/pages/User/user.context";

export type UsageData = { month: string; total: number };

export type CostUsageType = {
  currentYear: number;
  dataset: UsageData[];
};

const useTotalPatient = () => {
  const { user, isLoading: isUserLoading } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState<CostUsageType>(() => {
    const dataset: UsageData[] = [];
    for (let i = 1; i <= 12; i++) {
      dataset.push({
        month: formatNumericMonthToAbbreviated(i),
        total: 0,
      });
    }
    return {
      currentYear: dayjs().get("year"),
      dataset,
    };
  });

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!user?.id || isUserLoading) {
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await dentistDashboardApi.getTotalAppointments(
          user.id,
          abortController.signal
        );

        const result = response.data;
        if (!result.success) {
          errorToastHandler(result);
          return;
        }

        // Filter this year
        const currentYearData = result.data.list.filter(
          (item) => item.year === dayjs().get("year")
        );

        // Filter dataset
        const dataset = data.dataset.map((og_item) => {
          const totalMonth = currentYearData.filter(
            (item) =>
              formatNumericMonthToAbbreviated(item.month) === og_item.month
          );
          return {
            ...og_item,
            total: totalMonth.length > 0 ? totalMonth[0].totalPatients : 0,
          };
        });

        setData((prev) => ({
          ...prev,
          dataset,
        }));
      } catch (error) {
        if (error.name !== "CanceledError") {
          console.log(error.response);
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRemote();

    return () => abortController.abort();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isUserLoading]);

  return { data, isLoading };
};

export default useTotalPatient;
