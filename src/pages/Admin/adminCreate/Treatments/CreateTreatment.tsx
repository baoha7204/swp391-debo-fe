import MyTextField from "@/components/MyTextField";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";

function CreateTreatmentForm() {
    return (
        <Box>
            <Box sx={{ m: 1 }}>
                <h1>Treatment Create</h1>
            </Box>
            <Grid
                container
                // component=''
                className='create-screen'
            >
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                    >
                        <h3>Branch Address: </h3>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <MyTextField outsideLabel='' required fullWidth id="branch-address" label="Address" sx={{ m: 1, p: 0 }} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <h3>Branch Mobile Number:</h3>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',

                            }}
                        >
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField required fullWidth
                                    outsideLabel='' id="branch-mobile" label="Mobile Phone" variant="outlined" sx={{ m: 1, p: 0 }} />
                            </Box>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                            >
                                <MyTextField required fullWidth
                                    outsideLabel='' id="branch-alt-mobile" label="Alt Mobile Phone" variant="outlined" sx={{ m: 1, p: 0 }} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                    >
                        <h3>Branch Mail:</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 0, width: '100%' },

                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <MyTextField required
                                fullWidth outsideLabel='' id="branch-mail" label="Mail" variant="outlined" sx={{ m: 1, p: 0 }} />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    m: 1,
                }}
            >
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled button group"
                    sx={{
                        '& > :not(style)': { m: 0, width: '15ch', },
                    }}
                >
                    <Button>Add</Button>
                </ButtonGroup>
            </Box>
        </Box>
    );
}

export default CreateTreatmentForm;