import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AdminAppBar from '../AdminAppBar/AdminAppBar';
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

interface IHeaderBodyList {
    allowMore3?: boolean;
    children: React.ReactNode[];
    showButton?: boolean;
    buttonContent?: string;
}

export default function HeaderList({ allowMore3, children, buttonContent, showButton }: IHeaderBodyList) {
    const [value, setValue] = React.useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', marginRight: '20px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={children[0]} {...a11yProps(0)} />
                    <Tab label={children[1]} {...a11yProps(1)} />
                    {allowMore3 == true && children.length > 2 && (
                        <Tab label={children[2]} {...a11yProps(2)} />
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
                        <Button>{buttonContent}</Button>
                    </ButtonGroup>
                }
            </Box>
            {children.map((child, index) => (
                <CustomTabPanel value={value} index={index} key={index}>
                    <AdminAppBar>
                        <MedicalInformationIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                        {child}
                    </AdminAppBar>
                </CustomTabPanel>
            ))}
        </Box >
    );
}
