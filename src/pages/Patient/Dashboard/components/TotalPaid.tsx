import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import useTotalPaid from "../hooks/useTotalPaid";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import { formatVnMoney } from "@/utils/helper";
import { barChartSettings } from "@/config/dashboard";

const TotalPaid = () => {
  const { isLoading, data } = useTotalPaid();
  return (
    <Box display="flex" flexDirection="row" gap={2} p={2}>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <Box>
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Total spending
            </Typography>
            <Typography color="primary.main" fontWeight="700" fontSize={28}>
              {formatVnMoney(data.total)}
            </Typography>
          </Box>
          <Box display="flex" flexDirection="column">
            <Typography
              sx={{
                fontWeight: "bold",
              }}
            >
              Your usage in {data.currentYear}
            </Typography>
            <Box display="flex" justifyContent="center">
              {data.dataset.length === 0 ? (
                <CircularIndeterminate />
              ) : (
                <BarChart
                  dataset={data.dataset}
                  series={Object.keys(data.dataset[0])
                    .filter((key) => key !== "month")
                    .map((key: string) => ({
                      dataKey: key,
                      label: data.treatment[Number(key)],
                      valueFormatter: formatVnMoney,
                      stack: "total",
                    }))}
                  xAxis={[
                    {
                      scaleType: "band" as const,
                      dataKey: "month",
                    },
                  ]}
                  {...barChartSettings}
                />
              )}
            </Box>
          </Box>
        </>
      )}
    </Box>
  );
};

export default TotalPaid;
