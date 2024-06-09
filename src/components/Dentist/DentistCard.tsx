import { useContext } from "react";
import { ProgressContext } from "../Booking/progress.context";
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

export type DentistCardProps = {
  id: number;
  img: string;
  name: string;
};

const DentistCard = (props: DentistCardProps) => {
  const { img, name } = props;
  const { handleDoneIncrement, setData } = useContext(ProgressContext);

  const handleClick = () => {
    setData((prev) => ({ ...prev, dentist: props }));
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
        <CardMedia
          component="img"
          image={img}
          alt="branch"
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
          <Typography
            gutterBottom
            variant="h5"
            fontWeight={700}
            component="div"
          >
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
