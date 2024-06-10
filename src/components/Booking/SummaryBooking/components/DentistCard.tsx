import { DentistCardProps } from "@/components/Dentist/DentistCard";
import { formatDentistName } from "@/utils/helper";
import {
  Avatar,
  Card,
  CardActionArea,
  CardContent,
  Typography,
} from "@mui/material";

const DentistCardSummary = (props: DentistCardProps) => {
  const { name, img } = props;
  return (
    <Card>
      <CardActionArea sx={{ display: "flex", justifyContent: "flex-start" }}>
        <Avatar alt="Dentist" src={img} sx={{ width: 100, height: 100 }} />
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
