import { Box, Button, ButtonGroup, Typography } from "@mui/material";
import { Link } from "react-router-dom";

function AdminCreateHeader() {

    return (
        <Box sx={{ display: 'flex', m: 1 }}>
            <Typography
                variant="h5"
                component="div"
                sx={{ flexGrow: 1, fontWeight: 'bold', p: 1 }}
            >
                TREATMENT LIST
            </Typography>
            <ButtonGroup
                disableElevation
                variant="contained"
                aria-label="Disabled button group"
                sx={{
                    '& > :not(style)': { m: 0, width: '25ch' },
                }}
            >
                <Button component={Link} to={"/createTreatment"} >Add new Treatment</Button>
            </ButtonGroup>
        </Box>
    );
}

export default AdminCreateHeader;