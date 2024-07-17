import { PieChart } from "@mui/x-charts";
import useAppointmentState from "../hooks/useAppointmentState";

const AppointmentState = () => {
  const { data } = useAppointmentState();

  return (
    <PieChart
      series={[
        {
          data: data || [],
          cy: 170,
          innerRadius: 30,
          outerRadius: 100,
          paddingAngle: 5,
          cornerRadius: 5,
          highlightScope: { faded: "global", highlighted: "item" },
          faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
        },
      ]}
      height={300}
    />
  );
};

export default AppointmentState;
