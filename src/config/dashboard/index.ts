import { axisClasses } from "@mui/x-charts";

export const barChartSettings = {
  width: 600,
  height: 350,
  sx: {
    [`.${axisClasses.left} .${axisClasses.label}`]: {
      transform: "translate(-50px, 0)",
    },
  },
};
