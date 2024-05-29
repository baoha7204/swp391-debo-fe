import { Grid } from "@mui/material";

function CreateScreenLayout({ children }: any) {
    return (
        <Grid
            container
            // component=''
            className='create-screen'
        >
            <Grid
                item
                xs={false}
                sm={false}
                md={6}
            >
                {children[0]}
            </Grid>
            <Grid
                item
                xs={false}
                sm={false}
                md={6}
            >
                {children[1]}
            </Grid>
        </Grid>
    );
}

export default CreateScreenLayout;