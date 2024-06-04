import FormInputText from "@/components/Form/FormInputText";
import { Box, Button, ButtonGroup, Grid } from "@mui/material";
import useTreatment from "./lib/useTreatment";
import MyButton from "@/components/MyButton";

function CreateTreatmentForm() {

    const [handleSubmit, isSubmitting, control] = useTreatment();

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
        >
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
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Treatment Name: </h3>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <FormInputText
                                control={control}
                                name="name"
                                outsideLabel=""
                                required
                                fullWidth
                                label="Treatment Name"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Description:</h3>
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
                                <FormInputText
                                    control={control}
                                    name="description"
                                    outsideLabel=""
                                    required
                                    fullWidth
                                    label="Treatment Description"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }}
                                />
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
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Treatment Cost:</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 0, width: '100%' },

                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <FormInputText
                                control={control}
                                name="price"
                                outsideLabel=""
                                required
                                fullWidth
                                label="$"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />
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
                <MyButton
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                >
                    Create
                </MyButton>
            </Box>
        </Box>
    );
}

export default CreateTreatmentForm;