import { useContext } from "react";
import { ProgressContext } from "../Booking/progress.context";
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
import ToothIcon from "@/assets/ToothIcon";

export type TreatmentCardProps = {
  id: number;
  category: string;
  name: string;
  description: string;
  price: number;
};

const TreatmentCard = ({
  id,
  category,
  description,
  price,
  name,
}: TreatmentCardProps) => {
  const { handleDoneIncrement, setData } = useContext(ProgressContext);

  const handleClick = () => {
    handleDoneIncrement();
    setData((prev) => ({ ...prev, treatmentId: id }));
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
              <Typography
                gutterBottom
                variant="h5"
                fontWeight={700}
                component="div"
              >
                {name}
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
              {price.toLocaleString("it-IT", {
                style: "currency",
                currency: "VND",
              })}
            </Typography>
          </Grid>
        </Grid>
      </CardActions>
    </Card>
  );
};

export default TreatmentCard;
