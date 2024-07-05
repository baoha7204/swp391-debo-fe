import { useContext } from "react";
import { ProgressContext } from "../Booking/progress.context";
import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import ToothIcon from "@/assets/ToothIcon";
import { formatVnMoney } from "@/utils/helper";

export type TreatmentCardProps = {
  id: number;
  category: number;
  name: string;
  description: string;
  price: number | null;
  num_of_appointment: number;
  rule_name: string;
};

const TreatmentCard = (props: TreatmentCardProps) => {
  const { category, description, price, name, num_of_appointment, rule_name } =
    props;
  const { handleDoneIncrement, setData } = useContext(ProgressContext);

  const handleClick = () => {
    setData((prev) => ({ ...prev, treatment: props }));
    handleDoneIncrement();
  };

  return (
    <Card
      sx={{
        minWidth: {
          xs: 250,
          sm: 400,
          md: 275,
        },
      }}
    >
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Grid container spacing={0.5} alignItems="center">
            <Grid item>
              <ToothIcon />
            </Grid>
            <Grid item>
              <Typography variant="h5" fontWeight={700} component="div">
                {name}
              </Typography>
            </Grid>
          </Grid>
          <Box
            display="flex"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="body1" color="text.secondary">
              {category === 1 ? "Medical" : "Cosmetic"}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: "right" }}
            >
              Frequency: {rule_name}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary">
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {num_of_appointment > 1 ? "s" : null} required
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions onClick={handleClick}>
        <Grid
          container
          spacing={0.5}
          alignItems="center"
          justifyContent="space-between"
        >
          <Grid item>
            <Button
              size="small"
              color="primary"
              sx={{
                fontWeight: 800,
                backgroundColor: "secondary.main",
              }}
              onClick={handleClick}
            >
              Select
            </Button>
          </Grid>
          <Grid item>
            <Typography variant="body1" color="primary.main" fontWeight="700">
              {price ? formatVnMoney(price) : "Free"}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default TreatmentCard;
