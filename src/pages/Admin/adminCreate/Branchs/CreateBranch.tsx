import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import FormInputText from '@/components/Form/FormInputText';
import useBranch from './lib/useBranch';
import MyButton from '@/components/MyButton';
import { useParams } from 'react-router-dom';

function CreateBranch() {

    const { id } = useParams<string>();
    const [handleSubmit, isSubmitting, control] = useBranch();

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
        >
            <Box sx={{ m: 1 }}>
                <h1>{id ? "Update Branch" : "Add New Branch"}</h1>
            </Box>
            <Grid
                container
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
                            alignItems: 'center',
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch ID: </h3>
                        <Box>
                            <FormInputText
                                control={control}
                                id="id"
                                name="id"
                                outsideLabel=""
                                required
                                fullWidth
                                label="Must input integer number"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch Name: </h3>
                        <Box>
                            <FormInputText
                                control={control}
                                id="name"
                                name="name"
                                outsideLabel=""
                                required
                                fullWidth
                                label="Name"
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center',
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch Address: </h3>
                        <Box>
                            <FormInputText
                                control={control}
                                id="address"
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
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch Mobile:</h3>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box>
                                <FormInputText
                                    control={control}
                                    id="phone"
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
                    </Box>
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch Mail:</h3>
                        <Box>
                            <FormInputText
                                control={control}
                                id="email"
                                name="email"
                                label="example@gmail.com"
                                outsideLabel=""
                                required
                                fullWidth
                                autoFocus
                                sx={{ m: 1, p: 0 }}
                            />
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <MyButton
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    m: 1
                }}
                type="submit"
                variant="contained"
                disabled={isSubmitting}
            >
                Create
            </MyButton>
        </Box>
    );
}

export default CreateBranch;