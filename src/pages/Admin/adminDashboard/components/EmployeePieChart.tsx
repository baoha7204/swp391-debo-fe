import { formatVnMoney } from '@/utils/helper';
import { BarChart } from '@mui/x-charts/BarChart';
import { Box, Grid, Typography } from '@mui/material';
import { PieChart } from '@mui/x-charts/PieChart';
import { axisClasses } from '@mui/x-charts/ChartsAxis';

type EmployeesProp = {
    roleName: string;
    totalEmployees: number;
    totalSalary: number;
}

type EmployeePieChartProps = {
    Employees: EmployeesProp[];
}

function EmployeePieChart({ Employees }: EmployeePieChartProps) {
    const PieData = Employees.map((employee) => ({
        value: employee.totalEmployees,
        label: employee.roleName,
    }));

    const barData = Employees.map((employee) => ({
        roleName: employee.roleName,
        totalSalary: employee.totalSalary,
    }));

    const total = Employees.reduce((acc, employee) => acc + employee.totalSalary, 0);

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
