import { Box } from "@mui/material";
import LandingHeader from "./LandingHeader/LandingHeader";
import LandingContent from "./LandingContent.tsx/LandingContent";
import LandingFooter from "./LandingFooter/LandingFooter";

function LandingPage() {
    return (
        <Box sx={{ p: 0 }}>
            <LandingHeader />
            <LandingContent />
            <LandingFooter />
        </Box>
    );
}

export default LandingPage;