import * as React from 'react';
import Box from '@mui/material/Box';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import PopupState, { bindTrigger, bindMenu } from 'material-ui-popup-state';

// type HeaderProps = {
//     info: {
//         username: string;
//         avt: string;
//     }
// }

export default function AccountMenuLanding() {
    // const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    // const open = Boolean(anchorEl);
    // const handleClose = () => {
    //     setAnchorEl(null);
    // };
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

    return (
        <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
                {!isMobile ?
                    (<Box
                        sx={{
                            display: 'flex', gap: 3,
                        }}>
                        <Button sx={{ color: (theme) => theme.palette.primary.light, cursor: 'pointer' }}>Home</Button>
                        <Button sx={{ color: (theme) => theme.palette.primary.light, cursor: 'pointer' }}>Branches</Button>
                        <Button sx={{
                            color: 'white',
                            cursor: 'pointer',
                            border: '1px solid',
                            backgroundColor: (theme) => theme.palette.primary.main,
                            width: '100%',
                            fontWeight: 'bold',
                            "&:hover": {
                                color: (theme) => theme.palette.primary.main,
                            },
                        }}>
                            Appointment</Button>
                        {/* <Button sx={{ color: (theme) => theme.palette.primary.light, cursor: 'pointer' }}>Payment</Button> */}
                    </Box>) :
                    (<Box>
                        <PopupState variant="popover" popupId="demo-popup-menu">
                            {(popupState) => (
                                <Box>
                                    <Button {...bindTrigger(popupState)}
                                        sx={{ color: (theme) => theme.palette.primary.light }}>
                                        Menu
                                    </Button>
                                    <Menu {...bindMenu(popupState)}>
                                        <MenuItem onClick={popupState.close}>Home</MenuItem>
                                        <MenuItem onClick={popupState.close}>Branches</MenuItem>
                                        <MenuItem onClick={popupState.close}>Booking</MenuItem>
                                        {/* <MenuItem onClick={popupState.close}>Payment</MenuItem> */}
                                    </Menu>
                                </Box>
                            )}
                        </PopupState>
                    </Box>)}
                {/* <AccountMenu {...info} /> */}
            </Box>
            {/* <Menu
                anchorEl={anchorEl}
                id="account-menu"
                open={open}
                onClose={handleClose}
                onClick={handleClose}
                PaperProps={{
                    elevation: 0,
                    sx: {
                        overflow: 'visible',
                        filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                        mt: 1.5,
                        '& .MuiAvatar-root': {
                            width: 32,
                            height: 32,
                            ml: -0.5,
                            mr: 1,
                        },
                        '&::before': {
                            content: '""',
                            display: 'block',
                            position: 'absolute',
                            top: 0,
                            right: 14,
                            width: 10,
                            height: 10,
                            bgcolor: 'background.paper',
                            transform: 'translateY(-50%) rotate(45deg)',
                            zIndex: 0,
                        },
                    },
                }}
                transformOrigin={{ horizontal: 'right', vertical: 'top' }}
                anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
                <MenuItem onClick={handleClose}>
                    <Avatar /> Profile
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <Avatar /> My account
                </MenuItem>
                <Divider />
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <PersonAdd fontSize="small" />
                    </ListItemIcon>
                    Add another account
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Settings fontSize="small" />
                    </ListItemIcon>
                    Settings
                </MenuItem>
                <MenuItem onClick={handleClose}>
                    <ListItemIcon>
                        <Logout fontSize="small" />
                    </ListItemIcon>
                    Logout
                </MenuItem>
            </Menu> */}
        </React.Fragment>
    );
}