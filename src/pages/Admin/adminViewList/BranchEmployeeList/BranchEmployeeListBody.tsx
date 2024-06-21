import { ListColumn } from "@/components/Table/types/core";
import axios from "@/config/axios";
import { API_ENDPOINTS } from "@/utils/api";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type BranchEmployeeListBodyProps = {
    id: string;
    brId: number;
    name: string;
    type: number;
    salary: number;
};

const columns: readonly ListColumn<BranchEmployeeListBodyProps>[] = [
    { id: "name", label: "Name", isDetail: true, minWidth: 100 },
    {
        id: "type", label: "Type", minWidth: 100,
        format: (value: number) => {
            if (value === 2) {
                return "Manager";
            } else if (value === 4) {
                return "Dentist";
            } else if (value === 3) {
                return "Staff";
            } else {
                return "Unknown";
            }
        }
    },
    { id: "salary", label: "Salary", minWidth: 100 },
];

function BranchEmployeeListBody() {
    const { id } = useParams<{ id: string }>();
    const [employees, setEmployees] = useState<BranchEmployeeListBodyProps[]>([]);

    const getListCourse = async (id: string) => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.USERS.EMPLOYEE_WITH_BRANCH}/${id}`);
            if (res.status === 200) {
                setEmployees(res.data.data);
            }
        } catch (error) {
            console.error("Error fetching employee with branch:", error);
        }
    };

    console.log(id);
    console.log(employees);

    useEffect(() => {
        if (id) getListCourse(id);
    }, [id]);

    return (
        <Box>
            <Paper sx={{ width: "100%", overflow: "hidden" }}>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableRow>
                                {columns.map((column) => (
                                    <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {employees.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={columns.length} align="center">
                                        No treatment history available.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                employees.map((row, index) => (
                                    <TableRow hover tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            let formattedValue = row[column.id as keyof BranchEmployeeListBodyProps];
                                            if (column.isDate && formattedValue) {
                                                formattedValue = new Date(formattedValue).toLocaleDateString();
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {formattedValue || ''}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default BranchEmployeeListBody;