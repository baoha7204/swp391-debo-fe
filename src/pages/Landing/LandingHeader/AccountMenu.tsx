import * as React from 'react';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';

import { Link } from 'react-router-dom';

export default function AccountMenuLanding() {

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                <Box
                    sx={{
                        display: 'flex', gap: 3,
                    }}>
                    {/* <Button sx={{ color: (theme) => theme.palette.primary.light, cursor: 'pointer' }}>Home</Button>
                        <Button sx={{ color: (theme) => theme.palette.primary.light, cursor: 'pointer' }}>Branches</Button> */}
                    <Button
                        component={Link}
                        to="/login"
                        sx={{
                            color: 'white',
                            cursor: 'pointer',
                            border: '1px solid',
                            backgroundColor: (theme) => theme.palette.primary.main,
                            width: '100%',
                            fontWeight: 'bold',
                            "&:hover": {
                                color: (theme) => theme.palette.primary.main,
                            },
                            px: 3
                        }}>
                        Appointment</Button>
                    {/* <Button sx={{ color: (theme) => theme.palette.primary.light, cursor: 'pointer' }}>Payment</Button> */}
                </Box>
            </Box>

        </React.Fragment>
    );
}