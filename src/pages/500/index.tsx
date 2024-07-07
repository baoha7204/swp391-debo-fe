import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../User/user.context";
import { Box, Button } from "@mui/material";
import { formatRole } from "@/utils/jwt";
import CircularIndeterminate from "@/components/CircularIndeterminate";

const DefaultError = () => {
  const navigate = useNavigate();
  const { user, isLoading } = useContext(UserContext);
  return (
    <Box display="flex" flexDirection="column">
      {isLoading ? (
        <CircularIndeterminate />
      ) : (
        <>
          <h1>Unfortunately, something wrong happens!</h1>
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
        </>
      )}
    </Box>
  );
};

export default DefaultError;
