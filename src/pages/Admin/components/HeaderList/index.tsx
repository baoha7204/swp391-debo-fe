import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AdminAppBar from '../AdminAppBar/AdminAppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MedicalInformationIcon from '@mui/icons-material/MedicalInformation';
import { Link } from 'react-router-dom';

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
                <Box sx={{ p: 3 }}>
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

interface IHeaderBodyList {
    allowMore3?: boolean;
    children: {
        name: string[],
        body: JSX.Element[]
    }
    showButton?: boolean;
    buttonContent?: string;
}

export default function HeaderList({ allowMore3, children, buttonContent, showButton }: IHeaderBodyList) {
    const [value, setValue] = React.useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', marginRight: '20px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={children.name[0]} {...a11yProps(0)} />
                    <Tab label={children.name[1]} {...a11yProps(1)} />
                    {allowMore3 == true && children.name.length > 2 && (
                        <Tab label={children.name[2]} {...a11yProps(2)} />
                    )}
                </Tabs>
                {showButton == true &&
                    <ButtonGroup
                        disableElevation
                        variant="contained"
                        aria-label="Disabled button group"
                        sx={{
                            '& > :not(style)': { m: 0, width: '20ch', marginBottom: '5px' },
                        }}
                    >
                        <Button component={Link} to='/adminTest/createStaff' >{buttonContent}</Button>
                    </ButtonGroup>
                }
            </Box>
            <Box sx={{ display: 'inline-block' }}>
                {children.name.map((child, index) => (
                    <CustomTabPanel value={value} index={index} key={index}>
                        <AdminAppBar>
                            <MedicalInformationIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                            {child}
                        </AdminAppBar>
                    </CustomTabPanel>
                ))}
            </Box>
            <Box>
                {children.body.map((child, index) => (
                    <CustomTabPanel value={value} index={index} key={index}>
                        {child}
                    </CustomTabPanel>
                ))}
            </Box>
            <Box>

            </Box>
        </Box >
    );
}
