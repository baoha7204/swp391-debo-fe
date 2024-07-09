import { formatDentistName } from "@/utils/helper";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";
import DefaultDentist from "/assets/Dentist.jpg";
import { RescheduleDentistCardProps } from "./DentistCard";

const DentistCardSummary = (props: RescheduleDentistCardProps) => {
  const { name, avt } = props;
  return (
    <Card>
      <CardActionArea sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Avatar
          alt="Dentist"
          src={avt || DefaultDentist}
          sx={{ width: 100, height: 100 }}
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
    </Card>
  );
};

export default DentistCardSummary;
