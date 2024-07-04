import { useNavigate, useParams } from "react-router-dom";
import { useContext } from "react";
import useDentReschedule from "../hooks/useDentReschedule";
import { UserContext } from "@/pages/User/user.context";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import { Box, Button } from "@mui/material";
import { formatRole } from "@/utils/jwt";

const DentistRescheduleRequest = () => {
  const { token } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  const { isLoading, success } = useDentReschedule(token);
  return isLoading ? (
    <>
      <CircularIndeterminate />
      <h2>We are retrieving reschedule status, please wait...</h2>
    </>
  ) : success ? (
    <Box justifyContent="center">
      <h1>Thank you</h1>
      <p>
        You have confirmed dentist's reschedule request. We look forward to
        seeing you soon!
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
      <p>Your response has been failed for some reason. Please try again!</p>
    </Box>
  );
};

export default DentistRescheduleRequest;
