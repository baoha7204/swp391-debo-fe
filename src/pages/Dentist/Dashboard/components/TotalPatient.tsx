import { Box, Typography } from "@mui/material";
import { BarChart } from "@mui/x-charts";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import { barChartSettings } from "@/config/dashboard";
import useTotalPatient from "../hooks/useTotalPatient";

const TotalPatient = () => {
  const { isLoading, data } = useTotalPatient();
  return (
    <Box display="flex" flexDirection="row" gap={2} p={2}>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <Box display="flex" flexDirection="column">
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            Your appointments in {data.currentYear}
          </Typography>
          <Box display="flex" justifyContent="center">
            {data.dataset.length === 0 ? (
              <CircularIndeterminate />
            ) : (
              <BarChart
                dataset={data.dataset}
                series={[
                  {
                    dataKey: "total",
                    label: "Total appointments",
                  },
                ]}
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
      )}
    </Box>
  );
};

export default TotalPatient;
