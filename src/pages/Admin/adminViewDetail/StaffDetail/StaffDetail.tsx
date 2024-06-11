import { Avatar, Box, Divider, Grid, Paper, Typography } from "@mui/material";

export type PatientDetailData = {
    id: string;
    avatar: string;
    firstName: string;
    lastName: string;
    email: string;
    address: string;
    dateOfBirth: Date;
    phone: string;
    gender: string;
}

function StaffDetail() {
    return (
        <Paper>
            <Box sx={{ mx: 1, my: 2 }}>
                <h1 >Patient Detail</h1>
            </Box>
            <Grid container spacing={2}>
                <Grid item xs={4} md={4} lg={4}>
                    <Box
                        sx={{
                            width: '100%',
                        }}
                    >
                        <Avatar
                            sx={{
                                width: 'auto',
                                height: 200,
                                margin: 'auto',
                            }}
                            alt="Remy Sharp"
                            src="https://youtooz.com/cdn/shop/products/avatar-avatarstateaang_1000x1000_min-oj40.png?v=1650324185"
                        />
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: '20px',
                                fontWeight: 'bold',
                                margin: '10px 0 0',
                                whiteSpace: 'nowrap',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            Huynh Thong Duong
                        </Typography>
                        <Typography
                            sx={{
                                textAlign: 'center',
                                fontSize: '16px',
                                fontWeight: 'bold',
                                margin: '10px 0',
                                overflow: 'hidden',
                                textOverflow: 'ellipsis',
                            }}
                        >
                            huynhtd97@gmail.com
                        </Typography>
                    </Box>
                </Grid>
                <Grid item xs={1} md={1} lg={1}>
                    <Divider
                        orientation="vertical"
                        sx={{
                            height: 300,
                            width: '2px',
                            color: 'black',
                        }}
                    >
                    </Divider>
                </Grid>
                <Grid item xs={7} md={7} lg={7} sx={{ display: 'flex', mt: 5 }}>
                    <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}
                    >
                        <Grid item xs={6}>
                            <h3>Address</h3>
                            <Typography
                                sx={{
                                    overflow: 'hidden',
                                    display: '-webkit-box',
                                    WebkitBoxOrient: 'vertical',
                                    WebkitLineClamp: 2, // Limit the text to 2 lines
                                    whiteSpace: 'normal' // Allow normal wrapping within the -webkit-box
                                }}>
                                Sốc visual trong MV chủ đề Anh Trai Say Hi: Song Luân - 2 Anh Tú
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <h3>Birthday</h3>
                            <Typography>
                                10/04/2004
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <h3>Phone</h3>
                            <Typography>
                                0827693878
                            </Typography>
                        </Grid>
                        <Grid item xs={6}>
                            <h3>Gender</h3>
                            <Typography>
                                Male
                            </Typography>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
            <Box>
                <h1>Treatment History</h1>
            </Box>
        </Paper >
    );
}

export default StaffDetail;