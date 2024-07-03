import { Box, Grid } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { BarChart } from '@mui/x-charts/BarChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { dataset } from './data/weather';
import MiniHeader from '../components/MiniHeader/MiniHeader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import StatBox from './supComponent/StatBox';
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import { styled } from '@mui/system';

const PieData = [
    { id: 0, value: 10, label: 'Medical' },
    { id: 1, value: 50, label: 'Cosmetic' },
];

const valueFormatter = (value: number | null) => `${value}mm`;

const chartSetting = {
    yAxis: [
        {
            label: 'rainfall (mm)',
        },
    ],
    series: [{ dataKey: 'seoul', label: 'Seoul rainfall', valueFormatter }],
    height: 300,
    sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
    },
};

const mockData = [
    { title: "12,361", subtitle: "Customer", progress: "0.75", increase: "+14%", icon: <PersonAddIcon /> },
    { title: "431,225", subtitle: "Employee", progress: "0.50", increase: "+21%", icon: <PersonAddIcon /> },
];

const DashBox = styled('div')(() => ({
    borderRadius: "10px",
    backgroundColor: 'lightblack',
    p: 300,
}));
function AdminDashboard() {
    return (
        <Box sx={{ p: 3 }}>
            <MiniHeader content="Dashboard" IconComponent={DashboardIcon} />
            <Grid container spacing={4}>
                <Grid container item xs={4} sx={{ gap: 3, }}>
                    {mockData.map((data, i) => (
                        <Grid item xs={12}
                            sx={{
                                whiteSpace: "nowrap",
                                p: "20px",
                                border: "1px solid black",
                            }}
                            display="flex"
                            alignItems="center"
                            justifyContent="center"
                        >
                            <StatBox
                                key={i}
                                title={data.title}
                                subtitle={data.subtitle}
                                progress={data.progress}
                                increase={data.increase}
                                icon={data.icon}
                            />
                        </Grid>
                    ))}
                </Grid>
                <Grid item xs={6}
                    sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                    <DashBox sx={{
                        p: 3,
                    }}>
                        <h1>Treatment category distribution</h1>
                        <PieChart
                            series={
                                [
                                    {
                                        data: PieData,
                                        innerRadius: 30,
                                        outerRadius: 100,
                                        paddingAngle: 5,
                                        cornerRadius: 5,
                                        startAngle: -90,
                                        endAngle: 180,
                                    }
                                ]}
                            height={300}
                        />
                    </DashBox>
                </Grid>
                <Grid item xs={2}>
                    <DashBox sx={{
                        height: '100%',
                    }}>
                        Fit content
                    </DashBox>
                </Grid>
                <Grid item xs={6}>
                    <DashBox sx={{
                        p: 3,
                        border: '1px solid black',
                    }}>
                        <h1>Appointments used per month</h1>
                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            {...chartSetting}
                        />
                    </DashBox>
                </Grid>
                <Grid item xs={6}>
                    <DashBox sx={{
                        p: 3,
                        border: '1px solid black',
                    }}>
                        <h1>Appointments used per month</h1>
                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            {...chartSetting}
                        />
                    </DashBox>
                </Grid>
                <Grid item xs={12}>
                    <DashBox sx={{
                        p: 3,
                        border: '1px solid black',
                    }}>
                        <h1>Employee Salary Table</h1>
                        <BarChart
                            dataset={dataset}
                            xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                            {...chartSetting}
                        />
                    </DashBox>
                </Grid>
            </Grid>
        </Box>
    );
}

export default AdminDashboard