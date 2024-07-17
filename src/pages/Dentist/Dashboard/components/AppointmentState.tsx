import { PieChart } from "@mui/x-charts";
import useAppointmentState from "../hooks/useAppointmentState";
import { Box } from "@mui/material";

const AppointmentState = () => {
  const { data } = useAppointmentState();

  return (
    <Box p={2}>
      <PieChart
        series={[
          {
            data: data || [],
            cornerRadius: 5,
            paddingAngle: 5,
            outerRadius: 100,
            highlightScope: { faded: "global", highlighted: "item" },
            faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
          },
        ]}
        height={200}
      />
    </Box>
  );
};

export default AppointmentState;
