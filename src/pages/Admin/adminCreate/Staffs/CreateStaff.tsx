import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import useStaff from './lib/useStaff';
import FormInputText from '@/components/Form/FormInputText';
import FormSelect from '../../components/FormSelect/FormSelect';
import MyButton from '@/components/MyButton';


function StaffCreateBody() {

    const [handleSubmit, isSubmitting, control] = useStaff();

    return (
        <>
            <Box
                component="form"
                noValidate
                onSubmit={handleSubmit}
            >
                <Box sx={{ m: 1 }}>
                    <h1>Staff Create</h1>
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
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Username:</h3>
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
                                    name="username"
                                    outsideLabel=""
                                    required
                                    fullWidth
                                    label="Username"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Password:</h3>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '87%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <FormInputText
                                    control={control}
                                    name="password"
                                    outsideLabel=""
                                    required
                                    isPassword
                                    fullWidth
                                    label="Password"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Mobile Phone:</h3>
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
                                    name="phone"
                                    outsideLabel=""
                                    required
                                    fullWidth
                                    label="Mobile Phone"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Mail:</h3>
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
                                    name="email"
                                    outsideLabel=""
                                    required
                                    fullWidth
                                    label="Mail"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }}
                                />
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
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Name:</h3>
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
                                    name="lastName"
                                    outsideLabel=""
                                    required
                                    fullWidth
                                    label="Last Name"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }}
                                />
                                <FormInputText
                                    control={control}
                                    name="firstName"
                                    outsideLabel=""
                                    required
                                    fullWidth
                                    label="First Name"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Gender:</h3>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                sx={{
                                    m: 1, p: 0, width: '10ch',
                                }}
                            >

                                <FormSelect
                                    name="gender"
                                    control={control}
                                    label="Gender"
                                    options={[
                                        { value: '15', label: 'Male' },
                                        { value: '25', label: 'Female' },
                                        { value: '35', label: 'Other' }
                                    ]}
                                />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Role:</h3>
                            <Box
                                sx={{
                                    m: 1, p: 0, width: '10ch',
                                }}
                                component="form"
                                noValidate
                                autoComplete="off">
                                <FormSelect
                                    name="role"
                                    control={control}
                                    label="Role"
                                    options={[
                                        { value: '15', label: 'Dentist' },
                                        { value: '25', label: 'General' },
                                        { value: '35', label: 'Manager' }
                                    ]}
                                />
                            </Box>
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
                    >
                        Create
                    </MyButton>
                </Box>
            </Box >
        </>
    );
}

export default StaffCreateBody;