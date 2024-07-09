import { useContext, useEffect, useState } from 'react';
import { BarChart } from '@mui/x-charts/BarChart';
import axios from '@/config/axios';
import { API_ENDPOINTS } from '@/utils/api';
import { axisClasses } from '@mui/x-charts/ChartsAxis';
import { Box, Typography } from '@mui/material';
import { formatVnMoney } from '@/utils/helper';
import { UserContext } from '@/pages/User/user.context';

type AppointmentBarChartProps = {
    year: number;
    month: number;
    totalRevenue: number;
}

type Branch = {
    id: number;
    mngId: string;
}

const valueFormatter = (value: number | null) => `${formatVnMoney(value)} VND`;

const chartSetting = {
    // yAxis: [
    //     {
    //         label: 'Revenue (VND)',
    //     },
    // ],
    series: [{ dataKey: 'totalRevenue', label: 'Total Revenue', valueFormatter }],
    height: 300,
    margin: { left: 100 },
    sx: {
        [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
            transform: 'translateX(-10px)',
        },
    },
};

function AppointmentBarChart() {
    const [dataset, setDataset] = useState<AppointmentBarChartProps[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await axios.get(`${API_ENDPOINTS.DASHBOARD.BRANCH_TOTAL}/${branch.id}`);
                const data = res.data.data.list.map((item: AppointmentBarChartProps) => ({
                    year: item.year,
                    month: item.month,
                    totalRevenue: item.totalRevenue
                }));

                // Create a default dataset for the entire year with zero values for missing months
                const currentYear = new Date().getFullYear();
                const defaultDataset = Array.from({ length: 12 }, (_, i) => ({
                    year: currentYear,
                    month: i + 1,
                    totalRevenue: 0
                }));

                // Merge the fetched data into the default dataset
                data.forEach((item: AppointmentBarChartProps) => {
                    const index = defaultDataset.findIndex(d => d.year === item.year && d.month === item.month);
                    if (index !== -1) {
                        defaultDataset[index].totalRevenue = item.totalRevenue;
                    }
                });

                setDataset(defaultDataset);
            } catch (error) {
                console.error("Failed to fetch total revenue:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    const { user, isLoading: isUserLoading } = useContext(UserContext);
    const [branch, setBranch] = useState<Branch>('' as any);

    console.log('Manager ID', user?.id);

    const getBranchManager = async () => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.BRANCH.GET_BRANCH_MANAGER}/${user?.id}`);
            console.log('Branch Manager', res.data.data);
            setBranch(res.data.data);
        } catch (error) {
            console.error("Failed to fetch branch manager:", error);
        }
    }

    useEffect(() => {
        getBranchManager();
        if (!user?.id || isUserLoading) {
            return;
        }
    }, [user?.id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    const total = dataset.map(item => item.totalRevenue).reduce((acc, cur) => acc + cur, 0);

    return (
        <Box sx={{ p: 5 }}>
            <Box>
                <Typography
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    Total spending in {new Date().getFullYear()}
                </Typography>
                <Typography color="primary.main" fontWeight="700" fontSize={28}>
                    {formatVnMoney(total)}
                </Typography>
            </Box>
            <BarChart
                dataset={dataset.map(item => ({
                    month: `${item.year}-${String(item.month).padStart(2, '0')}`,
                    totalRevenue: item.totalRevenue
                }))}
                xAxis={[{ scaleType: 'band', dataKey: 'month' }]}
                {...chartSetting}
            />
        </Box>
    );
}

export default AppointmentBarChart;
