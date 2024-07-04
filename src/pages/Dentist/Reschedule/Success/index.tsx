import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import useRescheduleToken from "../hooks/useRescheduleToken";
import { UserContext } from "@/pages/User/user.context";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import { Box, Button } from "@mui/material";
import { formatRole } from "@/utils/jwt";

const RescheduleSuccess = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isLoading, success } = useRescheduleToken();
  return isLoading ? (
    <>
      <CircularIndeterminate />
      <h2>We are retrieving reschedule status, please wait...</h2>
    </>
  ) : success ? (
    <Box justifyContent="center">
      <h1>Thank you</h1>
      <p>
        Your request has been confirmed. Please wait for the patient to confirm
        the reschedule. You will be notified once the reschedule is completed.
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
      <p>Your request has been failed for some reason. Please try again!</p>
    </Box>
  );
};

export default RescheduleSuccess;
