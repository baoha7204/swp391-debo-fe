import { Box, Paper, Typography } from "@mui/material";

export type DashboardItemProps = {
  label: string;
  component: React.ReactNode;
  flex?: number;
};

const DashboardItem = ({ label, component, flex = 1 }: DashboardItemProps) => {
  return (
    <Paper
      elevation={4}
      sx={{ flex: flex, display: "flex", flexDirection: "column" }}
    >
      <Typography
        variant="h6"
        sx={{
          width: "100%",
          p: 2,
          fontWeight: "bolder",
          backgroundColor: (theme) => theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        {label}
      </Typography>
      <Box sx={{ p: 2 }}>{component}</Box>
    </Paper>
  );
};

export default DashboardItem;
