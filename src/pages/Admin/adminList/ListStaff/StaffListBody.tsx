
import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import AdminAppBar from '../../components/AdminAppBar/AdminAppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, display: 'inline-block' }}>
                    {children}
                </Box>
            )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function StaffListBody() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', marginRight: '20px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Dentist Staff" {...a11yProps(0)} />
                    <Tab label="General Staff" {...a11yProps(1)} />
                    <Tab label="Branch Manager" {...a11yProps(2)} />
                </Tabs>
                <ButtonGroup
                    disableElevation
                    variant="contained"
                    aria-label="Disabled button group"
                    sx={{
                        '& > :not(style)': { m: 0, width: '20ch', marginBottom: '5px' },
                    }}
                >
                    <Button sx={{}}>Add New Staff</Button>
                </ButtonGroup>
            </Box>
            <CustomTabPanel value={value} index={0}>
                <AdminAppBar>
                    <MedicalInformationIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    Dentist Staff
                </AdminAppBar>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
                <AdminAppBar>
                    <MedicalInformationIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    General Staff
                </AdminAppBar>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
                <AdminAppBar>
                    <MedicalInformationIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                    Branch Manager
                </AdminAppBar>
            </CustomTabPanel>



        </Box>
    );
}
