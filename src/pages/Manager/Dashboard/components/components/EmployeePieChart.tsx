import { formatVnMoney } from '@/utils/helper';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Grid, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

type EmployeesProp = {
    id: string;
    type: number;
    salary: number;
}

type EmployeePieChartProps = {
    Employees: EmployeesProp[];
}

const getTypeLabel = (type: number) => {
    switch (type) {
        case 2:
            return 'Manager';
        case 3:
            return 'Staff';
        case 4:
            return 'Dentist';
        default:
            return 'Unknown';
    }
};

function EmployeePieChart({ Employees }: EmployeePieChartProps) {
    const totalEmployeesByType = Employees.reduce((acc, employee) => {
        const typeLabel = getTypeLabel(employee.type);
        if (!acc[typeLabel]) {
            acc[typeLabel] = new Set();
        }
        acc[typeLabel].add(employee.id);
        return acc;
    }, {} as Record<string, Set<string>>);

    const PieData = Object.keys(totalEmployeesByType).map((typeLabel) => ({
        value: totalEmployeesByType[typeLabel].size,
        label: typeLabel,
    }));

    const totalSalaryByType = Employees.reduce((acc, employee) => {
        const typeLabel = getTypeLabel(employee.type);
        if (!acc[typeLabel]) {
            acc[typeLabel] = 0;
        }
        acc[typeLabel] += employee.salary;
        return acc;
    }, {} as Record<string, number>);

    // Chuyển đổi dữ liệu tổng lương thành dữ liệu cho biểu đồ thanh
    const barData = Object.keys(totalSalaryByType).map((typeLabel) => ({
        roleName: typeLabel,
        totalSalary: totalSalaryByType[typeLabel],
    }));

    const total = Employees.reduce((acc, employee) => acc + employee.salary, 0);

    return (
        <Box sx={{ p: 5 }}>
            <Box>
                <Typography
                    sx={{
                        fontWeight: "bold",
                    }}
                >
                    Total spending
                </Typography>
                <Typography color="primary.main" fontWeight="700" fontSize={28}>
                    {formatVnMoney(total)}
                </Typography>
            </Box>
            <Grid container>
                <Grid item xs={6}>
                    <BarChart
                        dataset={barData}
                        xAxis={[{ scaleType: 'band', dataKey: 'roleName' }]}
                        // yAxis={[{ label: 'Total Salary (VND)' }]}
                        series={[
                            {
                                dataKey: 'totalSalary',
                                label: 'Total Salary',
                                valueFormatter: formatVnMoney,
                            }
                        ]}
                        height={300}
                        margin={{ left: 100 }}
                        sx={{
                            [`& .${axisClasses.directionY} .${axisClasses.label}`]: {
                                transform: 'translateX(-10px)',
                            },
                        }}
                    />
                </Grid>
                <Grid item xs={6}>
                    <PieChart
                        series={[
                            {
                                data: PieData,
                                innerRadius: 30,
                                outerRadius: 100,
                                paddingAngle: 5,
                                cornerRadius: 5,
                                highlightScope: { faded: "global", highlighted: "item" },
                                faded: { innerRadius: 30, additionalRadius: -30, color: "gray" },
                            }
                        ]}
                        height={300}
                    />
                </Grid>
            </Grid>
        </Box>
    );
}

export default EmployeePieChart;
