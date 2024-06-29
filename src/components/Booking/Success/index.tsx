import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/pages/User/user.context";
import { formatRole } from "@/utils/jwt";
import { Box, Button } from "@mui/material";
import usePaymentStatus from "./hooks/usePaymentStatus";
import CircularIndeterminate from "@/components/CircularIndeterminate";

const SuccessBooking = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isLoading, status } = usePaymentStatus();
  return isLoading ? (
    <>
      <CircularIndeterminate />
      <h2>We are retrieving payment status, please wait...</h2>
    </>
  ) : status ? (
    <Box justifyContent="center">
      <h1>Thank you</h1>
      <p>
        Your appointment has been confirmed. We look forward to seeing you soon!
      </p>
      <Button
        type="button"
        variant="contained"
        sx={{
          mt: 2,
          width: "fit-content",
          alignSelf: "left",
          textTransform: "none",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
        }}
        onClick={() => navigate(`/${formatRole(user!.roleName)}/booking`)}
      >
        Book another appointment?
      </Button>
      <Button
        type="button"
        variant="contained"
        sx={{
          mt: 2,
          width: "fit-content",
          alignSelf: "left",
          textTransform: "none",
          fontSize: 15,
          fontWeight: 700,
          letterSpacing: 1,
        }}
        onClick={() => navigate(`/${formatRole(user!.roleName)}`)}
      >
        Go to homepage
      </Button>
    </Box>
  ) : (
    <Box justifyContent="center">
      <h1>Oopsie...</h1>
      <p>Your payment has been failed to process!</p>
    </Box>
  );
};

export default SuccessBooking;
