import { get } from "@/utils/apiCaller";
import { Box, Grid, Paper } from "@mui/material";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

type DetailProps = {
    url: string;
    header: string;
    fields: { id: string, label: string }[];
};

const MyDetail = ({ url, header, fields }: DetailProps) => {
    const { id } = useParams<{ id: string }>();
    const [data, setData] = useState<any>();
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await get(`${url}`);
                setData(response);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        };
        fetchData();
    }, [url, id]);

    if (loading) {
        return <div>Loading...</div>;
    }

    if (error) {
        return <div>Error: {error}</div>;
    }

    return (
        <Paper sx={{
            padding: 2,
        }}>
            <Box sx={{ mx: 1, my: 2 }}>
                <h1>{header}</h1>
            </Box>
            <Grid container spacing={2}>
                {fields.map((field) => (
                    <Grid item xs={4} md={4} lg={4} key={field.id}>
                        <Box>
                            <h3>{field.label}</h3>
                            <p>{data[field.id]}</p>
                        </Box>
                    </Grid>
                ))}
            </Grid>
        </Paper>
    )
}

export default MyDetail;
