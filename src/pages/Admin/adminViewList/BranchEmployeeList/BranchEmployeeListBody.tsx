import TablePaginationActions from "@/components/Table/TablePaginationActions";
import { ListColumn } from "@/components/Table/types/core";
import axios from "@/config/axios";
import useTableControl from "@/hooks/useControlTable";
import { API_ENDPOINTS } from "@/utils/api";
import { formatVnMoney } from "@/utils/helper";
import { Box, Paper, Table, TableBody, TableCell, TableContainer, TableFooter, TableHead, TablePagination, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type BranchEmployeeListBodyProps = {
    id: string;
    brId: number;
    name: string;
    type: number;
    salary: number;
    treatId: number;
};

const columns: readonly ListColumn<BranchEmployeeListBodyProps>[] = [
    { id: "name", label: "Name", minWidth: 100 },
    {
        id: "type", label: "Role", minWidth: 100,
        format: (value: any) => {
            if (value === 4) return "Dentist";
            if (value === 3) return "Staff";
            if (value === 2) return "Manager";
            return "";
        }
    },
    {
        id: "salary", label: "Salary", minWidth: 100,
        format: (value: number) => {
            if (value) return formatVnMoney(value);
            return "N/A";
        }
    },
];

function BranchEmployeeListBody() {
    const { id } = useParams<{ id: string }>();
    const [employees, setEmployees] = useState<BranchEmployeeListBodyProps[]>([]);

    const [counts, setCounts] = useState<number>(0);

    const [controller, handlePageChange, handleChangeRowsPerPage] =
        useTableControl({ page: 0, rowsPerPage: 5 });

    const getListCourse = async (id: string) => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.USERS.EMPLOYEE_WITH_BRANCH_ID}/${id}`);
            if (res.status === 200) {
                setEmployees(res.data.data.list);
                setCounts(res.data.data.count);
            }
        } catch (error) {
            console.error("Error fetching employee with branch:", error);
        }
    };

    console.log('Employee: ', employees);

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
                                        No employee available.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                employees.map((row, index) => (
                                    <TableRow hover tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            let value: string | any = row[column.id];
                                            if (column.format) {
                                                value = column.format(value);
                                            } else if (column.isDate && value) {
                                                value = new Date(value).toLocaleDateString();
                                            }
                                            return (
                                                <TableCell key={column.id} align={column.align}>
                                                    {value || ''}
                                                </TableCell>
                                            );
                                        })}
                                    </TableRow>
                                ))
                            )}
                        </TableBody>
                    </Table>
                    <TableFooter>
                        <TableRow>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25, { value: -1, label: "All" }]}
                                page={controller.page}
                                count={counts}
                                rowsPerPage={controller.rowsPerPage}
                                onPageChange={handlePageChange}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                                ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </TableContainer>
            </Paper>
        </Box>
    );
}

export default BranchEmployeeListBody;