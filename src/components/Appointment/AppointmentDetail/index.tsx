import { Box } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { useParams } from "react-router-dom";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import AppointmentInfo from "./AppointmentInfo";
import AppointmentNotes from "./AppointmentNotes";
import CustomTabPanel from "@/components/MyTabs/CustomTabPanel";

export type TabType = { label: string; component: JSX.Element };

const tabs = [
  {
    label: "basic info",
    component: <AppointmentInfo />,
  },
  {
    label: "notes",
    component: <AppointmentNotes />,
  },
];

const AppointmentDetail = () => {
  // const { id } = useParams();
  const [value, setValue] = useState(0);

  const handleChange = (_: SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
          display: "flex",
          justifyContent: "space-between",
          marginRight: "20px",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable tabs"
        >
          {tabs.map((tab, index) => (
            <Tab label={tab.label} key={index} />
          ))}
        </Tabs>
      </Box>
      {tabs.map(({ component }, index) => (
        <CustomTabPanel value={value} index={index} key={index}>
          {component}
        </CustomTabPanel>
      ))}
    </Box>
  );
};
export default AppointmentDetail;
