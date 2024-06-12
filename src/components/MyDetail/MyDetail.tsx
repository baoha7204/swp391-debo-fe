import axios from "@/config/axios";
import { Box, Grid, Paper, Typography } from "@mui/material";
import { Key, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type RowData = {
    id: Key;
};

export type ListColumn<T> = {
    id: Extract<keyof T, Key>;
    label: string;
    minWidth?: number;
    align?: "right";
    isDetail?: boolean;
    isCategory?: boolean;
    format?: ((value: Date) => string) | ((value: string) => string) | ((value: number) => string);
};

export type TableProps<T> = {
    url: string;
    columns: readonly ListColumn<T>[];
};

const MyDetail = <T extends RowData>({ url, columns }: TableProps<T>) => {

    const { id } = useParams<{ id: string }>();
    const [state, setState] = useState() // Add type annotation to 'state' variable

    const getOneCourse = async (id: string) => { // Add type annotation to 'id' parameter
        const res = await axios.get(`${url}/${id}`);
        // console.log(res.data);
        if (res.status === 200) {
            setState(res.data.data);
        }
    }

    useEffect(() => {
        if (id) getOneCourse(id);
    }, [id]);

    console.log(state);

    return (
        <Box>
            <Paper sx={{ padding: 2 }}>
                <Grid container spacing={2}>
                    {columns.map((column) => {
                        let formattedValue = state && state[column.id];
                        if (column.format) {
                            formattedValue = column.format(formattedValue);
                        }
                        return (
                            <Grid item xs={12} sm={6} md={4} key={column.id.toString()}>
                                <Typography variant="h6"
                                    sx={{ color: (theme) => theme.palette.text.secondary }}
                                >{column.label}</Typography>
                                <Typography variant="body1"
                                    sx={{
                                        color: (theme) => theme.palette.text.primary,
                                        fontWeight: "bold"
                                    }}
                                >
                                    {formattedValue}
                                </Typography>
                            </Grid>
                        );
                    })}
                </Grid>
            </Paper >

        </Box>
    );
}

export default MyDetail;