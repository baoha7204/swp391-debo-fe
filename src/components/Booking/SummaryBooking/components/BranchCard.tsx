import { BranchCardProps } from "@/components/Branch/BranchCard";
import {
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Grid,
  Typography,
} from "@mui/material";

const BranchCardSummary = (props: BranchCardProps) => {
  const { name, address, img } = props;
  return (
    <Card>
      <CardActionArea sx={{ display: "flex" }}>
        <CardMedia component="img" image={img} alt="branch" height={200} />
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
