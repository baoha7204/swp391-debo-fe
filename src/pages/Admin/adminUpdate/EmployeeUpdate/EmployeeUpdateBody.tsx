import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import useEmployeeUpdate from './useEmployeeUpdate';
import FormInputText from '@/components/Form/FormInputText';
import FormSelect from '../../components/FormSelect/FormSelect';
import MyButton from '@/components/MyButton';
import { useParams } from 'react-router-dom';
import { API_ENDPOINTS } from '@/utils/api';
import axios from '@/config/axios';
import { useEffect } from 'react';

function EmployeeUpdateBody() {

    const [handleSubmit, isSubmitting, control, setValues] = useEmployeeUpdate();
    const { id } = useParams<{ id: string }>();

    const getOneCourse = async (id: string) => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.USERS.USER}/${id}`);
            if (res.status === 200) {
                const employeeData = res.data.data;
                setValues(employeeData);
                console.log(employeeData);
            }
        } catch (error) {
            console.error("Error fetching employee data:", error);
        }
    };

    useEffect(() => {
        if (id) getOneCourse(id);
    }, [id]);

    return (
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
                                '& > :not(style)': { m: 0, width: '100%' },
                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <FormInputText
                                control={control}
                                name="password"
                                outsideLabel=""
                                required
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
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Last Name:</h3>
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
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>First Name:</h3>
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
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Address:</h3>
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
                                name="address"
                                outsideLabel=""
                                required
                                fullWidth
                                label="Address"
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
                                m: 1, p: 0, width: '20ch',
                            }}
                        >
                            <FormSelect
                                name="gender"
                                control={control}
                                label="Gender"
                                options={[
                                    { value: true, label: 'Male' },
                                    { value: false, label: 'Female' },
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
                    Update
                </MyButton>
            </Box>
        </Box >
    );
}

export default EmployeeUpdateBody;