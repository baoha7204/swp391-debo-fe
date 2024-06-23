import ImagePicker from "@/components/ImagePicker";
import { Grid } from "@mui/material";

const Profile = () => {
  return (
    <Grid
      container
      gap={{
        xs: 1,
        sm: 0,
      }}
      spacing={5}
    >
      <Grid item xs={12} sm={8}>
        Some content
      </Grid>
      <Grid item xs={12} sm={4}>
        <ImagePicker />
      </Grid>
    </Grid>
  );
};

export default Profile;
