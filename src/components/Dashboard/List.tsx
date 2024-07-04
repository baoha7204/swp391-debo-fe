import { Box } from "@mui/material";
import DashboardItem, { DashboardItemProps } from "./Item";

const DashboardList = ({ data }: { data: DashboardItemProps[] }) => {
  return (
    <Box display="flex" flexDirection="row" gap={4}>
      {data.map((item, index) => (
        <DashboardItem key={index} {...item} />
      ))}
    </Box>
  );
};

export default DashboardList;
