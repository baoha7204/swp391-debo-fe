import React from 'react';
import useFetchTableList from "@/hooks/useFetchTableList";
import { Box, Grid, Paper, Typography, Link } from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

export type ListColumn<T> = {
    id: keyof T;
    label: string;
    minWidth?: number;
    align?: "right";
    format?: ((value: any) => string);
};

type RowData = {
    id: string | number;
};

export type TableProps<T> = {
    url: string;
    columns: readonly ListColumn<T>[];
};

function MyDetail<T extends RowData>({ url, columns }: TableProps<T>): JSX.Element {
    const [list, count] = useFetchTableList<T>({ url, controller: { page: 0, rowsPerPage: 5 } });

    return (
        <Paper sx={{ padding: 2 }}>
            <Box sx={{ mx: 1, my: 2 }}>
                <Typography variant="h4">Patient MyDetail</Typography>
            </Box>
            <Grid container spacing={2}>
                {list.map((row) => (
                    <Box key={row.id} sx={{ width: '100%' }}>
                        {columns.map((column) => {
                            let formattedValue = row[column.id];
                            if (column.format) {
                                formattedValue = column.format(formattedValue);
                            }
                            return (
                                <Grid item xs={12} md={4} key={column.id.toString()}>
                                    <Typography variant="subtitle2">{column.label}</Typography>
                                    <Link component={RouterLink} to={`/${row.id}`}>
                                        <Typography variant="body1">
                                            {formattedValue as string}
                                        </Typography>
                                    </Link>
                                </Grid>
                            );
                        })}
                    </Box>
                ))}
            </Grid>
        </Paper>
    );
}

export default MyDetail;
