import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import useDentist from './useDentist';
import FormInputText from '@/components/Form/FormInputText';
import FormSelect from '../../../components/FormSelect/FormSelect';
import MyButton from '@/components/MyButton';

function DentistCreateBody() {
    const [handleSubmit, isSubmitting, control] = useDentist();

    return (
        <>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
            >
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
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Username:</h3>


                            <FormInputText
                                control={control}
                                name="username"
                                inputProps={{ "data-testid": "username" }}
                                outsideLabel=""
                                required
                                fullWidth
                                label="Username"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Password:</h3>

                            <FormInputText
                                control={control}
                                name="password"
                                inputProps={{ "data-testid": "password" }}
                                outsideLabel=""
                                required
                                fullWidth
                                label="Password"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Mobile Phone:</h3>

                            <FormInputText
                                control={control}
                                name="phone"
                                inputProps={{ "data-testid": "phone" }}
                                outsideLabel=""
                                required
                                fullWidth
                                label="Mobile Phone"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Mail:</h3>


                            <FormInputText
                                control={control}
                                name="email"
                                inputProps={{ "data-testid": "email" }}
                                outsideLabel=""
                                required
                                fullWidth
                                label="Mail"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />

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
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Last Name:</h3>

                            <FormInputText
                                control={control}
                                name="lastName"
                                inputProps={{ "data-testid": "lastName" }}
                                outsideLabel=""
                                required
                                fullWidth
                                label="Last Name"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>First Name:</h3>

                            <FormInputText
                                control={control}
                                name="firstName"
                                inputProps={{ "data-testid": "firstName" }}
                                outsideLabel=""
                                required
                                fullWidth
                                label="First Name"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Address:</h3>

                            <FormInputText
                                control={control}
                                name="address"
                                inputProps={{ "data-testid": "address" }}
                                outsideLabel=""
                                required
                                fullWidth
                                label="Address"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />

                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Gender:</h3>

                            <FormSelect
                                name="gender"
                                data-testid="gender"
                                control={control}
                                label="Gender"
                                options={[
                                    { value: true, label: 'Male' },
                                    { value: false, label: 'Female' },
                                ]}
                            />

                        </Box>
                    </Grid>
                </Grid>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'left',
                        m: 1
                    }}
                >
                    <MyButton
                        type="submit"
                        variant="contained"
                        disabled={isSubmitting}
                        data-testid="submit"
                    >
                        Create
                    </MyButton>
                </Box>
            </Box >
        </>
    );
}

export default DentistCreateBody;