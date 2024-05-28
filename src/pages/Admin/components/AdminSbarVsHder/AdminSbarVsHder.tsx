import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Logo from '@/components/Logo';
import EventIcon from '@mui/icons-material/Event';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import GroupIcon from '@mui/icons-material/Group';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import StoreIcon from '@mui/icons-material/Store';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import Fab from '@mui/material/Fab';
import Avatar from '@mui/material/Avatar';
import { ManageAccounts } from '@mui/icons-material';
import '@/styles/globals.css'


const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
    width: drawerWidth,
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
    }),
    overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
    transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: `calc(${theme.spacing(7)} + 1px)`,
    [theme.breakpoints.up('sm')]: {
        width: `calc(${theme.spacing(8)} + 1px)`,
    },
});

const DrawerHeader = styled('div')(({ theme }) => ({
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
    open?: boolean;
}

const AppBar = styled(MuiAppBar, {
    shouldForwardProp: (prop) => prop !== 'open',
})<AppBarProps>(({ theme, open }) => ({
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(['width', 'margin'], {
            easing: theme.transitions.easing.sharp,
            duration: theme.transitions.duration.enteringScreen,
        }),
    }),
}));

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        width: drawerWidth,
        flexShrink: 0,
        whiteSpace: 'nowrap',
        boxSizing: 'border-box',
        ...(open && {
            ...openedMixin(theme),
            '& .MuiDrawer-paper': openedMixin(theme),
        }),
        ...(!open && {
            ...closedMixin(theme),
            '& .MuiDrawer-paper': closedMixin(theme),
        }),
    }),
);

export default function AdminSbarVsHder({ children }: any) {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);

    const handleDrawerOpen = () => {
        setOpen(true);
    };

    const handleDrawerClose = () => {
        setOpen(false);
    };

    return (
        <Box sx={{
            display: 'flex',

        }}>
            <CssBaseline />
            <AppBar position="fixed" open={open}
            >
                <Toolbar
                    sx={{
                        backgroundColor: (theme) => theme.palette.common.white,
                    }}
                >
                    <IconButton
                        color="primary"
                        aria-label="open drawer"
                        onClick={handleDrawerOpen}
                        edge="start"
                        sx={{
                            marginRight: 5,
                            ...(open && { display: 'none' }),

                        }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography noWrap component="div" sx={{ color: (theme) => theme.palette.text.primary, paddingLeft: 0.5, paddingRight: 0.5 }}>
                        {/* <BranchHeader /> */}
                        <div className="branchHeader-container">
                            <div className="left-header">
                                {children[0]}
                            </div>
                            <div className="center-header">
                                DEBO Clinic
                            </div>
                            <div className="right-header" >
                                <div className="small-info">
                                    <Avatar alt="Remy Sharp" src="/static/images/avatar/1.jpg" />
                                    <ul>
                                        <li>Hi Duong</li>
                                        <li>Admin</li>
                                    </ul>
                                    <Fab size="small" color="primary" aria-label="add" >
                                        <ManageAccounts />
                                    </Fab>
                                </div>
                            </div>
                        </div>
                    </Typography>
                </Toolbar>
            </AppBar>
            <Drawer
                sx={{
                    justifyContent: 'space-between'
                }}
                variant="permanent" open={open}
            >
                <DrawerHeader
                    sx={{
                        justifyContent: 'space-around'
                    }}
                >
                    <Logo />
                    <IconButton onClick={handleDrawerClose}>
                        {theme.direction === 'rtl' ? <ChevronRightIcon /> : <ChevronLeftIcon />}
                    </IconButton>
                </DrawerHeader>
                <Divider />
                <List>
                    {['Reservations', 'Branchs'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block', color: (theme) => (theme).palette.primary.main, }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,

                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: (theme) => theme.palette.primary.main
                                    }}
                                >
                                    {index % 2 === 0 ? <EventIcon /> : <StoreIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: (theme) => theme.palette.text.primary }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Treatments', 'Patients'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block', color: (theme) => (theme).palette.primary.main }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: (theme) => theme.palette.primary.main
                                    }}
                                >
                                    {index % 2 === 0 ? <HealthAndSafetyIcon /> : <AccountCircleIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: (theme) => (theme).palette.text.primary }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                <Divider />
                <List>
                    {['Account', 'Staffs'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block', color: (theme) => (theme).palette.primary.main }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: (theme) => theme.palette.primary.main
                                    }}
                                >
                                    {index % 2 === 0 ? <AccountBoxIcon /> : <GroupIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: (theme) => (theme).palette.text.primary }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
                {/* <Divider /> */}
                <List sx={{ top: 200 }}>
                    {['Reports', 'Setting'].map((text, index) => (
                        <ListItem key={text} disablePadding sx={{ display: 'block', color: (theme) => (theme).palette.primary.main }}>
                            <ListItemButton
                                sx={{
                                    minHeight: 48,
                                    justifyContent: open ? 'initial' : 'center',
                                    px: 2.5,
                                }}
                            >
                                <ListItemIcon
                                    sx={{
                                        minWidth: 0,
                                        mr: open ? 3 : 'auto',
                                        justifyContent: 'center',
                                        color: (theme) => theme.palette.primary.main
                                    }}
                                >
                                    {index % 2 === 0 ? <ReportIcon /> : <SettingsIcon />}
                                </ListItemIcon>
                                <ListItemText primary={text} sx={{ opacity: open ? 1 : 0, color: (theme) => (theme).palette.text.primary }} />
                            </ListItemButton>
                        </ListItem>
                    ))}
                </List>
            </Drawer>
            <Box component="main" sx={{ flexGrow: 1, p: 1, }}>
                <DrawerHeader />
                {children[1]}
            </Box>
        </Box>
    );
}


