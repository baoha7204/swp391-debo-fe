import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

function AdminAppBar({ children }: any) {
    return (
        <AppBar position="static" sx={{ width: '100%' }}>
            <Toolbar disableGutters sx={{ ml: 2 }}>
                {children[0]}
                <Typography
                    variant="h6"
                    noWrap
                    component="a"
                    // href="#app-bar-with-responsive-menu"
                    sx={{
                        mr: 2,
                        display: { md: 'flex' },
                        fontFamily: 'monospace',
                        fontWeight: 700,
                        letterSpacing: '.3rem',
                        color: 'inherit',
                        textDecoration: 'none',
                    }}
                >
                    {children[1]}
                </Typography>
            </Toolbar>
        </AppBar>
    );
}
export default AdminAppBar;