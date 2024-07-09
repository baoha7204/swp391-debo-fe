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
  categoryName: string;
  name: string;
  description: string;
  price: number;
  numOfAppointment: number;
  ruleName: string;
};

const TreatmentCard = (props: TreatmentCardProps) => {
  const { categoryName, description, price, name, numOfAppointment, ruleName } =
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
            gap={2}
            marginBottom={1}
          >
            <Typography variant="body1" color="text.secondary">
              {categoryName}
            </Typography>
            <Typography
              variant="body1"
              color="text.secondary"
              sx={{ textAlign: "right" }}
            >
              Frequency: {ruleName}
            </Typography>
          </Box>
          <Typography variant="body2" color="text.secondary" marginBottom={2}>
            {description}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {numOfAppointment} appointment
            {numOfAppointment > 1 ? "s" : null} required
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
