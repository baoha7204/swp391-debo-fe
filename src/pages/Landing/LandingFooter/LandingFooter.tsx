import Logo from "@/components/Logo";
import { Box, Container, Divider, Grid, Typography } from "@mui/material";
import { BigTextWhite, SmallTextWhite } from "../LandingContent.tsx/Style";
import { FillterImg } from "./Style";

function LandingFooter() {
    return (
        <Box>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                backgroundColor: '#516EFF',
                height: '250px',
                justifyContent: 'center',
                alignItems: 'center',
            }}>
                <Container>
                    <Grid container spacing={2} sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                    }}>
                        <Box
                            sx={{
                                color: 'white',
                            }}>
                            <FillterImg>
                                <Logo />
                            </FillterImg>
                            <SmallTextWhite sx={{ fontSize: 13 }}>
                                Dentics is a well-known name in <br />
                                dental and oral care in New <br />
                                York. The journey of this <br />
                                institution started in 1990
                            </SmallTextWhite>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white' }} />                        <Box
                            sx={{
                                color: 'white',
                            }}>
                            <SmallTextWhite sx={{ fontSize: 13 }}>
                                We are welcoming you
                            </SmallTextWhite>
                            <BigTextWhite sx={{ fontSize: 25, py: 2 }}>
                                Want to visit <br />
                                our clinic?
                            </BigTextWhite>
                            <SmallTextWhite sx={{ fontSize: 13 }}>
                                Saturday - Thursday <br />
                                9 am - 10 pm
                            </SmallTextWhite>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white' }} />                        <Box>
                            <Typography sx={{ color: 'white', fontSize: 13, pb: 5 }}>
                                Important Link
                            </Typography>
                            <Typography sx={{ fontSize: 13 }}>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '30px',
                                }}>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}>
                                        <SmallTextWhite sx={{ fontSize: 13, cursor: 'pointer' }}>
                                            FaceBook
                                        </SmallTextWhite>
                                        <SmallTextWhite sx={{ fontSize: 13, cursor: 'pointer' }}>
                                            Twitter
                                        </SmallTextWhite>
                                        <SmallTextWhite sx={{ fontSize: 13, cursor: 'pointer' }}>
                                            Instagram
                                        </SmallTextWhite>
                                    </Box>
                                    <Box sx={{
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '10px',
                                    }}>
                                        <SmallTextWhite sx={{ fontSize: 13 }}>
                                            Career
                                        </SmallTextWhite>
                                        <SmallTextWhite sx={{ fontSize: 13 }}>
                                            Support
                                        </SmallTextWhite>
                                        <SmallTextWhite sx={{ fontSize: 13 }}>
                                            Privacy policy
                                        </SmallTextWhite>
                                    </Box>
                                </Box>
                            </Typography>
                        </Box>
                        <Divider orientation="vertical" flexItem sx={{ backgroundColor: 'white' }} />
                        <Box>
                            <Typography sx={{ color: 'white', fontSize: 13, pb: 3 }}>
                                Say hello to us
                            </Typography>
                            <Typography sx={{ color: 'white', fontSize: 13, pb: 3 }}>
                                hello@reallygreatsite.com
                            </Typography>
                            <Typography sx={{ color: 'white', fontSize: 13, pb: 1 }}>
                                Address
                            </Typography>
                            <Typography sx={{ color: 'white', fontSize: 13 }}>
                                123 Anywhere St., Any <br />
                                City, NY 39200
                            </Typography>
                        </Box>
                    </Grid>
                </Container>
            </Box >
            <Box sx={{
                backgroundColor: '#216583',
                height: '40px',
            }}>
                <Typography sx={{
                    color: 'white',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 13,
                    height: '100%',
                }}>
                    © 2001-2022, All Rights Reserved
                </Typography>
            </Box>
        </Box>
    );
}

export default LandingFooter;