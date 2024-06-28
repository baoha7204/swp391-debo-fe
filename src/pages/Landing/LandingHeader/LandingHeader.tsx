import Logo from "@/components/Logo";
import { Box, Container, Divider } from "@mui/material";
import AccountMenuLanding from "./AccountMenu";

const guestInfo = {
    username: 'Duong',
    avt: '/static/images/avatar/1.jpg',
}

function LandingHeader() {

    return (
        <Container >
            <Box
                sx={{
                    p: 0,
                    py: 2,
                }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        width: '100%',
                        alignItems: 'center', textAlign: 'center',
                    }}>
                    <Box
                        sx={{
                            cursor: 'pointer',
                            color: (theme) => theme.palette.text.primary,
                        }}>
                        <Logo />
                    </Box>
                    <Box
                        sx={{
                            color: (theme) => theme.palette.text.secondary,
                        }}>
                        <AccountMenuLanding info={guestInfo} />
                    </Box>
                </Box>
                <Divider />
            </Box>
        </Container>
    );
}

export default LandingHeader;