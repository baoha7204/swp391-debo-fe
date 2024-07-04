import { Box, Paper, Typography } from "@mui/material";

export type DashboardItemProps = {
  label: string;
  component: React.ReactNode;
};

const DashboardItem = ({ label, component }: DashboardItemProps) => {
  return (
    <Paper
      elevation={4}
      sx={{ flex: 1, display: "flex", flexDirection: "column" }}
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
