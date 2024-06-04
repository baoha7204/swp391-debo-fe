import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

import LocationOnIcon from "@mui/icons-material/LocationOn";

export type BranchCardProps = {
  id: number;
  img: string;
  address: string;
  name: string;
};

const BranchCard = ({ id, img, address, name }: BranchCardProps) => {
  return (
    <Card sx={{ maxWidth: "100%" }}>
      <CardActionArea>
        <CardMedia
          component="img"
          image={img}
          alt="branch"
          sx={{
            height: {
              xs: 400,
              md: 250,
              lg: 300,
            },
          }}
        />
        <CardContent>
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={700}
            component="div"
          >
            {name}
          </Typography>
          <Grid container spacing={0.5} alignItems="center">
            <Grid item>
              <LocationOnIcon />
            </Grid>
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {address}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button
          size="small"
          color="primary"
          sx={{
            fontWeight: 800,
            backgroundColor: "secondary.main",
          }}
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
};

export default BranchCard;
