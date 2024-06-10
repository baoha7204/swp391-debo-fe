import ToothIcon from "@/assets/ToothIcon";
import { TreatmentCardProps } from "@/components/Treatment/TreatmentCard";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const TreatmentCardSummary = (props: TreatmentCardProps) => {
  const { name, category, description, price } = props;
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Grid container spacing={0.5}>
            <Grid container item spacing={0.5} alignItems="center">
              <Grid item>
                <ToothIcon />
              </Grid>
              <Grid item>
                <Typography variant="h5" fontWeight={700} component="div">
                  {name}
                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="body1" color="primary.main" fontWeight="700">
                {price.toLocaleString("it-IT", {
                  style: "currency",
                  currency: "VND",
                })}
              </Typography>
            </Grid>
          </Grid>
          <Typography variant="body1" color="text.secondary">
            {category}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TreatmentCardSummary;
