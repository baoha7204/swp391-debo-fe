import * as React from 'react';
import Box from '@mui/material/Box';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import AdminAppBar from '../AdminAppBar/AdminAppBar';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import GroupIcon from '@mui/icons-material/Group';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import { joiResolver } from '@hookform/resolvers/joi';


interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
    sx?: object; // Thêm thuộc tính sx
}

function CustomTabPanel(props: TabPanelProps) {
    const { children, value, index, sx, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <Box sx={{ p: 3, ...sx }}> {/* Áp dụng sx */}
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
        body: JSX.Element[],
        buttonName: string[],
        route: string[]
    }
}

export default function HeaderList({ allowMore3, children }: IHeaderBodyList) {
    const [value, setValue] = React.useState(0);

    const handleChange = (_: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };

    return (
        <Box sx={{ width: '100%', minWidth: 200 }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider', display: 'flex', justifyContent: 'space-between', marginRight: '20px' }}>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label={children.name[0]} {...a11yProps(0)} />
                    <Tab label={children.name[1]} {...a11yProps(1)} />
                    {allowMore3 == true && children.name.length > 2 && (
                        <Tab label={children.name[2]} {...a11yProps(2)} />
                    )}
                </Tabs>
            </Box>
            <Box >
                {children.name.map((child, index) => (
                    <Box key={index}>
                        <CustomTabPanel
                            value={value}
                            index={index}
                            sx={{
                                display: 'flex',
                                flexDirection: 'row',  // Sắp xếp các phần tử theo cột
                                justyfiContent: 'space-arround', // Canh giữa các phần tử
                            }}
                        >
                            <Box
                                sx={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    flexShrink: 0, // Đảm bảo không co lại
                                    mr: 2, // Tạo khoảng cách giữa AdminAppBar và ButtonGroup
                                }}
                            >
                                <AdminAppBar>
                                    <GroupIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                                    {child}
                                </AdminAppBar>
                            </Box>
                            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center', flexGrow: 1, }}>
                                <ButtonGroup
                                    disableElevation
                                    variant="contained"
                                    aria-label="Disabled button group"
                                    sx={{
                                        '& > :not(style)': {},
                                    }}
                                >
                                    <Link to={children.route[index]} style={{ textDecoration: 'none' }}>
                                        <Button>{children.buttonName[index]}</Button>
                                    </Link>
                                </ButtonGroup>
                            </Box>

                        </CustomTabPanel>
                    </Box>
                ))}
            </Box>

            {/* <Box sx={{ display: 'inline-block', backgroundColor: 'red' }}>
                {children.name.map((child, index) => (
                    <Box key={index} >
                        <StyledCustomTabPanel value={value} index={index}>
                            <AdminAppBar>
                                <GroupIcon sx={{ display: { md: 'flex' }, mr: 1 }} />
                                {child}
                            </AdminAppBar>
                            <ButtonGroup
                                disableElevation
                                variant="contained"
                                aria-label="Disabled button group"
                                sx={{
                                    '& > :not(style)': { mr: '24px', p: 0, width: '20ch', height: '43px' },
                                }}
                            >
                                <Link to={children.route[index]} style={{ textDecoration: 'none' }}>
                                    <Button>{children.buttonName[index]}</Button>
                                </Link>
                            </ButtonGroup>
                        </StyledCustomTabPanel>
                    </Box>
                ))}
            </Box> */}
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
