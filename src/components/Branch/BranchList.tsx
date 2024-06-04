import { Grid } from "@mui/material";
import BranchCard from "./BranchCard";
import useFetchAllBranch from "./hooks/useFetchAllBranch";

const BranchList = () => {
  const branches = useFetchAllBranch();

  return (
    <Grid container spacing={5}>
      {branches.map((branch) => (
        <Grid
          item
          xs={12}
          md={6}
          lg={3}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <BranchCard {...branch} />
        </Grid>
      ))}
    </Grid>
  );
};

export default BranchList;
