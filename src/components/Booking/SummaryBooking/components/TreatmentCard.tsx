import ToothIcon from "@/assets/ToothIcon";
import { TreatmentCardProps } from "@/components/Treatment/TreatmentCard";
import { formatVnMoney } from "@/utils/helper";
import {
  Box,
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";

const TreatmentCardSummary = (props: TreatmentCardProps) => {
  const { name, category, description, price, rule_name, num_of_appointment } =
    props;
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
                {price ? formatVnMoney(price) : "Free"}
              </Typography>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography variant="body1" color="text.secondary">
                {category === 1 ? "Medical" : "Cosmetic"}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {description}
              </Typography>
            </Box>
            <Box>
              <Typography variant="body1" color="text.secondary">
                Frequency: {rule_name}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {num_of_appointment} appointment
                {num_of_appointment > 1 ? "s" : null} required
              </Typography>
            </Box>
          </Box>
        </CardContent>
      </CardActionArea>
    </Card>
  );
};

export default TreatmentCardSummary;
