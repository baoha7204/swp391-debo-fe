import { Box, Typography } from "@mui/material";
import useTotalPaid from "../hooks/useTotalPaid";
import CircularIndeterminate from "@/components/CircularIndeterminate";

const TotalPaid = () => {
  const { isLoading, data } = useTotalPaid();
  return (
    <Box>
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <Typography
            sx={{
              fontWeight: "bold",
            }}
          >
            Total spending
          </Typography>
          <Typography color="primary.main" fontWeight="700" fontSize={28}>
            {data.toLocaleString("it-IT", {
              style: "currency",
              currency: "VND",
            })}
          </Typography>
        </>
      )}
    </Box>
  );
};

export default TotalPaid;
