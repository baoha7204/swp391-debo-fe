import * as React from 'react';
import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import FormInputText from '@/components/Form/FormInputText';
import useBranch from './lib/useBranch';
import MyButton from '@/components/MyButton';

function CreateBranch() {

    const [handleSubmit, isSubmitting, control] = useBranch();

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
        >
            <Box sx={{ m: 1 }}>
                <h1 >Branch Information</h1>
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
                            alignItems: 'center',
                        }}
                    >
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch Address: </h3>
                        <Box>

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
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch Mail:</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 0, width: '100%' },

                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <Box>
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
                        <h3 style={{ marginBottom: '20px', marginRight: '20px' }}>Branch Mobile Number:</h3>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >
                            <Box>
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
                            <Box>
                                <FormInputText
                                    control={control}
                                    name="altPhone"
                                    outsideLabel=""
                                    fullWidth
                                    label="Alt Mobile Phone"
                                    autoFocus
                                    sx={{ m: 1, p: 0 }} />
                            </Box>
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
        </Box>
    );
}

export default CreateBranch;