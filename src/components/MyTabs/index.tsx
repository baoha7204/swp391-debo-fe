import { Box, Tab, Tabs } from "@mui/material";
import { SyntheticEvent, useState } from "react";
import { MyTabsProps } from "./types/core";
import CustomTabPanel from "./CustomTabPanel";

const MyTabs = ({ tabs }: MyTabsProps) => {
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
export default MyTabs;
