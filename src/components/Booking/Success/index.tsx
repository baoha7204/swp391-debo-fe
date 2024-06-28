import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "@/pages/User/user.context";
import { formatRole } from "@/utils/jwt";
import { Box, Button } from "@mui/material";

const SuccessBooking = () => {
  const navigate = useNavigate();
  const { user } = useContext(UserContext);
  return (
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
  );
};

export default SuccessBooking;
