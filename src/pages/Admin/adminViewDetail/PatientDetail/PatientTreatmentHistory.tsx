import { Box } from "@mui/material";
import MiniHeader from "../../components/MiniHeader/MiniHeader";
import { HealthAndSafety } from "@mui/icons-material";
import { API_ENDPOINTS } from "@/utils/api";
import { ListColumn } from "@/components/Table/types/core";
import { useParams } from "react-router-dom";
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import axios from "@/config/axios";

type TreatmentHistoryData = {
    treatName: string;
    createdDate: string;
    startDate: string;
    note: string;
};

const columns: readonly ListColumn<TreatmentHistoryData>[] = [
    { id: "treatName", label: "Treatment Name", minWidth: 100 },
    { id: "createdDate", label: "Created Date", minWidth: 100, isDate: true },
    { id: "startDate", label: "Started Date", minWidth: 100, isDate: true },
];

function PatientTreatmentHistory() {

    const { id } = useParams<{ id: string }>();
    const [treatments, setTreatments] = useState<TreatmentHistoryData[]>([]);

    const getListCourse = async (id: string) => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.APPOINTMENT.HISTORY}/${id}`);
            if (res.status === 200) {
                setTreatments(res.data.data);
            }
        } catch (error) {
            console.error("Error fetching treatment history:", error);
        }
    };

    console.log(id);
    console.log(treatments);

    useEffect(() => {
        if (id) getListCourse(id);
    }, [id]);

    return (
        <Box>
            <MiniHeader content="Treatment History" IconComponent={HealthAndSafety} />
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
                            {treatments.length === 0 ? (
                                <TableRow>
                                    <TableCell colSpan={columns.length} align="center">
                                        No treatment history available.
                                    </TableCell>
                                </TableRow>
                            ) : (
                                treatments.map((row, index) => (
                                    <TableRow hover tabIndex={-1} key={index}>
                                        {columns.map((column) => {
                                            let formattedValue = row[column.id as keyof TreatmentHistoryData];
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

export default PatientTreatmentHistory;

