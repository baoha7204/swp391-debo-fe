import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { tokens } from "./supComponent/theme";
import { mockTransactions } from "./data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";
import EmailIcon from "@mui/icons-material/Email";
import PointOfSaleIcon from "@mui/icons-material/PointOfSale";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Header from "./supComponent/Header";
import StatBox from "./supComponent/StatBox";

const Dashboard = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.primary.main);

    const mockData = [
        { title: "12,361", subtitle: "Emails Sent", progress: "0.75", increase: "+14%", icon: <EmailIcon /> },
        { title: "431,225", subtitle: "Sales Obtained", progress: "0.50", increase: "+21%", icon: <PointOfSaleIcon /> },
        { title: "32,441", subtitle: "New Clients", progress: "0.30", increase: "+5%", icon: <PersonAddIcon /> },
        { title: "1,325,134", subtitle: "Received", progress: "0.80", increase: "+43%", icon: <TrafficIcon /> },
    ];

    return (
        <Box m="20px">
            {/* HEADER */}
            <Box display="flex" justifyContent="space-between" alignItems="center">
                <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
            </Box>

            {/* GRID & CHARTS */}
            <Box
                display="grid"
                gridTemplateColumns="repeat(12, 1fr)"
                gap="20px"
            >
                {/* ROW 1 */}
                {mockData.map((data, i) => (
                    <Box
                        gridColumn="span 3"
                        sx={{
                            backgroundColor: colors.primary[400],
                            whiteSpace: "nowrap",
                            p: "20px",
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
                    </Box>
                ))}
                <Box />
                {/* ROW 2 */}
                <Box
                    gridColumn="span 8"
                    gridRow="span 2"
                    sx={{
                        backgroundColor: colors.primary[400],
                    }}                >
                    <Box
                        mt="25px"
                        p="0 30px"
                        display="flex "
                        justifyContent="space-between"
                        alignItems="center"
                    >
                        <Box>
                            <Typography
                                variant="h5"
                                fontWeight="600"
                                color={colors.grey[100]}
                            >
                                Revenue Generated
                            </Typography>
                            <Typography
                                variant="h3"
                                fontWeight="bold"
                                color={colors.greenAccent[500]}
                            >
                                $59,342.32
                            </Typography>
                        </Box>
                        <Box>
                            <IconButton>
                                <DownloadOutlinedIcon
                                    sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                                />
                            </IconButton>
                        </Box>
                    </Box>
                    <Box height="250px" m="-20px 0 0 0">
                        {/* <LineChart isDashboard={true} /> */}
                        <Box>LineChart</Box>
                    </Box>
                </Box>
                <Box
                    gridColumn="span 4"
                    gridRow="span 2"
                    sx={{
                        backgroundColor: colors.primary[400],
                    }} overflow="auto"
                >
                    <Box
                        sx={{
                            display: "flex",
                            justifyContent: "space-between",
                            alignItems: "center",
                            borderBottom: `4px solid ${colors.primary[500]}`,
                            colors: `${colors.grey[100]}`,
                            p: "15px",
                        }}
                    >
                        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
                            Recent Transactions
                        </Typography>
                    </Box>
                    {mockTransactions.map((transaction, i) => (
                        <Box
                            key={`${transaction.txId}-${i}`}
                            display="flex"
                            justifyContent="space-between"
                            alignItems="center"
                            borderBottom={`4px solid ${colors.primary[500]}`}
                            p="15px"
                        >
                            <Box>
                                <Typography
                                    color={colors.greenAccent[500]}
                                    variant="h5"
                                    fontWeight="600"
                                >
                                    {transaction.txId}
                                </Typography>
                                <Typography color={colors.grey[100]}>
                                    {transaction.user}
                                </Typography>
                            </Box>
                            <Box color={colors.grey[100]}>{transaction.date}</Box>
                            <Box
                                p="5px 10px"
                                borderRadius="4px"
                                sx={{
                                    backgroundColor: colors.greenAccent[500]
                                }}
                            >
                                ${transaction.cost}
                            </Box>
                        </Box>
                    ))}
                </Box>


            </Box>
        </Box >
    );
};

export default Dashboard;
