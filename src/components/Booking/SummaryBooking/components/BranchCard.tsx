import { BranchCardProps } from "@/components/Branch/BranchCard";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";
import DefaultDentalOffice from "/assets/Dental-Office.jpg";

const BranchCardSummary = (props: BranchCardProps) => {
  const { name, address, avt } = props;
  return (
    <Card>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia
          component="img"
          image={avt || DefaultDentalOffice}
          alt="branch"
          height={200}
        />
        <CardContent>
          <Typography gutterBottom variant="h6" fontWeight={600}>
            {name}
          </Typography>
          <Grid container spacing={0.5} alignItems="center">
            <Grid item>
              <Typography variant="body2" color="text.secondary">
                {address}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default BranchCardSummary;
