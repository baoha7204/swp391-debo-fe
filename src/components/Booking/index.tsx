import { useState } from "react";
import { Paper } from "@mui/material";
import { BorderLinearProgress } from "./style";
import BranchList from "../Branch/BranchList";

const BookingPage = () => {
  const [progress, setProgress] = useState(0);
  return (
    <Paper elevation={0}>
      <BorderLinearProgress variant="determinate" value={progress} />
      <BranchList />
    </Paper>
  );
};

export default BookingPage;
