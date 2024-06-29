import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import useManager from './useManager';
import FormInputText from '@/components/Form/FormInputText';
import MyButton from '@/components/MyButton';
import FormSelect from '@/components/Form/FormSelect';

function ManagerCreateBody() {

    const [handleSubmit, isSubmitting, control] = useManager();

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
                            name="username"
                            outsideLabel="Username"
                            required
                            fullWidth
                            label="Username"
                            autoFocus
                        />

                        <FormInputText
                            control={control}
                            name="password"
                            outsideLabel="Password"
                            required
                            fullWidth
                            label="Password"
                        />
                        <FormInputText
                            control={control}
                            name="phone"
                            outsideLabel="Phone Number"
                            required
                            fullWidth
                            label="Mobile Phone"
                        />
                        <FormInputText
                            control={control}
                            name="email"
                            outsideLabel="Email"
                            required
                            fullWidth
                            label="Mail"
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
                            name="lastName"
                            outsideLabel="Last Name"
                            required
                            fullWidth
                            label="Last Name"
                        />
                        <FormInputText
                            control={control}
                            name="firstName"
                            outsideLabel="First Name"
                            required
                            fullWidth
                            label="First Name"
                            autoFocus
                        />
                        <FormInputText
                            control={control}
                            name="address"
                            outsideLabel="Address"
                            required
                            fullWidth
                            label="Address"
                        />
                        <FormSelect
                            name="gender"
                            control={control}
                            label=""
                            outsideLabel='Gender:'
                            options={[
                                { value: true, label: 'Male' },
                                { value: false, label: 'Female' },
                            ]}
                            sx={{
                                width: 'fit-content',
                            }}
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
                    >
                        Create
                    </MyButton>
                </Box>
            </Box >
        </>
    );
}

export default ManagerCreateBody;