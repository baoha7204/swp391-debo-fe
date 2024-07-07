import { useContext } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { UserContext } from "@/pages/User/user.context";
import { formatRole } from "@/utils/jwt";
import { Box, Button } from "@mui/material";
import usePaymentStatus from "./hooks/usePaymentStatus";
import CircularIndeterminate from "@/components/CircularIndeterminate";

const SuccessBooking = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);
  const { isLoading: isPaymentLoading, status } = usePaymentStatus(
    isLoading,
    id
  );
  return isPaymentLoading ? (
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
