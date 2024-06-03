import * as React from 'react';
import Box from '@mui/material/Box';
import '@/styles/globals.css'
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MyTextField from '@/components/MyTextField';
import Grid from '@mui/material/Grid';


function StaffCreateBody() {

    const [role, setRole] = React.useState('');

    const handleChangeRole = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    const [gender, setGender] = React.useState('');

    const handleChangeGender = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    return (
        <>
            <Box>
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
                            <h3>Username:</h3>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' fullWidth required id="username" label="Username" variant="outlined" sx={{ m: 1, p: 0, }} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3>Password:</h3>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <MyTextField outsideLabel='' fullWidth required id="password" label="Password" variant="outlined" sx={{ m: 1, p: 0 }} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3>Mobile Phone:</h3>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' fullWidth required id="mobile-phone" label="Mobile Phone" variant="outlined" sx={{ m: 1, p: 0 }} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3>Mail:</h3>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' fullWidth required id="staff-mail" label="Mail" variant="outlined" sx={{ m: 1, p: 0 }} />
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
                            <h3>Name:</h3>
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '100%' },
                                }}
                                noValidate
                                autoComplete="off"
                            >
                                <MyTextField outsideLabel='' fullWidth required id="staff-mail" label="Last Name" variant="outlined" sx={{ m: 1, p: 0 }} />
                                <MyTextField outsideLabel='' fullWidth required id="staff-mail" label="First Name" variant="outlined" sx={{ m: 1, p: 0 }} />
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3>Gender:</h3>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                                sx={{
                                    m: 1, p: 0, width: '10ch',
                                }}
                            >

                                <FormControl fullWidth>
                                    <InputLabel id="demo-simple-select-label" variant="outlined">Gender</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={gender}
                                        label="Gender"
                                        onChange={handleChangeGender}
                                    >
                                        <MenuItem value={15}>Male</MenuItem>
                                        <MenuItem value={25}>Female</MenuItem>
                                        <MenuItem value={35}>Other</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Box>
                        <Box
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                alignItems: 'center'
                            }}
                        >
                            <h3>Role:</h3>
                            <Box
                                sx={{
                                    m: 1, p: 0, width: '10ch',
                                }}
                                component="form"
                                noValidate
                                autoComplete="off">
                                <FormControl fullWidth >
                                    <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={role}
                                        label="Role"
                                        onChange={handleChangeRole}

                                    >
                                        {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                        <MenuItem value={10}>Dentist</MenuItem>
                                        <MenuItem value={20}>General Staff</MenuItem>
                                        <MenuItem value={30}>Branch Manager</MenuItem>
                                    </Select>
                                </FormControl>
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
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled button group"
                        sx={{
                            '& > :not(style)': { m: 0, width: '15ch', },
                        }}
                    >
                        <Button sx={{}}>Create</Button>
                    </ButtonGroup>
                </Box>
            </Box >
        </>
    );
}

export default StaffCreateBody;