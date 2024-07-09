import { useContext } from "react";
import {
  Button,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import { formatDentistName } from "@/utils/helper";
import DefaultDentist from "/assets/Dentist.jpg";
import { RescheduleContext } from "../reschedule.context";

export type RescheduleDentistCardProps = {
  id: string;
  avt: string | null;
  name: string | null;
};

const DentistCard = (props: RescheduleDentistCardProps) => {
  const { avt, name } = props;
  const { handleNext, setData } = useContext(RescheduleContext);

  const handleClick = () => {
    setData((prev) => ({ ...prev, newDentist: props }));
    handleNext();
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
        <CardMedia
          component="img"
          image={avt || DefaultDentist}
          alt="dentist"
          sx={{
            height: {
              xs: 300,
              sm: 400,
              md: 250,
              lg: 300,
            },
          }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" fontWeight={700}>
            {formatDentistName(name)}
          </Typography>
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
          onClick={handleClick}
        >
          Select
        </Button>
      </CardActions>
    </Card>
  );
};

export default DentistCard;
