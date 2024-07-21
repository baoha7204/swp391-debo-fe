import { useContext, useEffect, useState } from "react";
import dayjs from "dayjs";
import { UserContext } from "@/pages/User/user.context";
import patientDashboardApi from "@/utils/api/dashboardApi/patient";
import { formatNumericMonthToAbbreviated } from "@/utils/helper";
import { useParams } from "react-router-dom";

export type UsageData = { month: string } & Record<number, number>;

export type CostUsageType = {
  total: number;
  currentYear: number;
  dataset: UsageData[];
  treatment: Record<number, string>;
};

const useTotalPaid = () => {
  const { user, isLoading: isUserLoading } = useContext(UserContext);
  const [isLoading, setIsLoading] = useState(false);
  const {id} = useParams<{id: string}>();
  const [data, setData] = useState<CostUsageType>(() => {
    const dataset: UsageData[] = [];
    for (let i = 1; i <= 12; i++) {
      dataset.push({
        month: formatNumericMonthToAbbreviated(i),
      });
    }
    return {
      total: 0,
      currentYear: dayjs().get("year"),
      dataset,
      treatment: {},
    };
  });

  useEffect(() => {
    setIsLoading(true);
    const abortController = new AbortController();

    if (!user?.id || isUserLoading || id === undefined) {
      setIsLoading(false);
      return;
    }

    const fetchRemote = async () => {
      try {
        const response = await patientDashboardApi.getTotalPaid(
          id,
          abortController.signal
        );

        const result = response.data;
        if (!result.success) {
          console.log(result);
          return;
        }

        // Filter this year
        const currentYearData = result.data.list.filter(
          (item) => item.year === dayjs().get("year")
        );

        // Filter dataset
        const dataset = data.dataset.map((og_item) => {
          let temp = { ...og_item };
          currentYearData.forEach((item) => {
            temp = {
              ...temp,
              [item.treatId]:
                formatNumericMonthToAbbreviated(item.month) === og_item.month
                  ? item.totalPaidAmount!
                  : 0,
            };
          });
          return temp;
        });

        // Filter treatment
        let treatmentRef = {};
        currentYearData.forEach((item) => {
          treatmentRef = {
            ...treatmentRef,
            [item.treatId]: item.treatmentName,
          };
        });

        setData((prev) => ({
          ...prev,
          total: result.data.list.slice(-1)[0]?.runningTotal || 0,
          dataset,
          treatment: treatmentRef,
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

export default useTotalPaid;
