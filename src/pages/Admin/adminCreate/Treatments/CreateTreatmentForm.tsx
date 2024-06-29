import FormInputText from "@/components/Form/FormInputText";
import { Box, Grid } from "@mui/material";
import useTreatment from "./lib/useTreatment";
import MyButton from "@/components/MyButton";
import FormSelect from "@/components/Form/FormSelect";

function CreateTreatmentForm() {

    const [handleSubmit, isSubmitting, control] = useTreatment();

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
        >
            <Grid
                container
                className='create-screen'
                spacing={10}
            >
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <FormInputText
                        control={control}
                        id="id"
                        name="id"
                        outsideLabel="Treatment ID:"
                        required
                        fullWidth
                        label=""
                        autoFocus
                        inputProps={{ "data-testid": "treatmentId" }}
                    />
                    <FormInputText
                        control={control}
                        id="name"
                        name="name"
                        outsideLabel="Treatment Name:"
                        required
                        fullWidth
                        label="Treatment Name"
                        inputProps={{ "data-testid": "treatmentName" }}
                    />

                    <FormInputText
                        control={control}
                        id="description"
                        name="description"
                        outsideLabel="Treatment Description:"
                        required
                        fullWidth
                        label="Treatment Description"
                        inputProps={{ "data-testid": "treatmentDes" }}
                    />

                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >

                    <FormInputText
                        control={control}
                        id="price"
                        name="price"
                        outsideLabel="Treatment Price:"
                        required
                        fullWidth
                        label=""
                        inputProps={{ "data-testid": "treatmentPrice" }}
                    />

                    <FormSelect
                        name="category"
                        control={control}
                        label=""
                        outsideLabel="Category:"
                        options={[
                            { value: 1, label: 'Medical' },
                            { value: 2, label: 'Cosmetic' },
                        ]}
                    />

                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                }}
            >
                <MyButton
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    data-testid="create"
                >
                    Create
                </MyButton>
            </Box>
        </Box>
    );
}

export default CreateTreatmentForm;