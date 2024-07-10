import FormInputText from "@/components/Form/FormInputText";
import { Box, Grid } from "@mui/material";
import useTreatmentUpdate from "./useTreatmentUpdate";
import MyButton from "@/components/MyButton";
import FormSelect from "@/components/Form/FormSelect";
import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "@/utils/api";
import axios from "@/config/axios";
import { useEffect } from "react";

function TreatmentUpdateBody() {
  const [handleSubmit, isSubmitting, control, setValues] = useTreatmentUpdate();

  const { id } = useParams<{ id: string }>();

  const getOneCourse = async (id: string) => {
    try {
      const res = await axios.get(`${API_ENDPOINTS.TREATMENT.TREATMENT}/${id}`);
      if (res.status === 200) {
        const branchData = res.data.data;
        setValues(branchData);
      }
    } catch (error) {
      console.error("Error fetching branch data:", error);
    }
  };

  useEffect(() => {
    if (id) getOneCourse(id);
  }, [id]);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <Grid container className="create-screen" spacing={10}>
        <Grid item xs={false} sm={false} md={6}>
          {/* <FormInputText
                        control={control}
                        id="id"
                        name="id"
                        outsideLabel="Treatment ID:"
                        required
                        fullWidth
                        label="Integer Number"
                    /> */}
          <FormInputText
            control={control}
            id="name"
            name="name"
            outsideLabel="Name:"
            required
            fullWidth
            label="Treatment Name"
          />
          <FormInputText
            control={control}
            id="description"
            name="description"
            outsideLabel="Description:"
            required
            fullWidth
            label="Treatment Description"
          />
        </Grid>
        <Grid item xs={false} sm={false} md={6}>
          <FormInputText
            control={control}
            id="price"
            name="price"
            outsideLabel="Treatment Price:"
            required
            fullWidth
            label="đồng(đ)"
          />
          <FormSelect
            outsideLabel="Category:"
            name="category"
            control={control}
            label="Category"
            options={[
              { value: 1, label: "Medical" },
              { value: 2, label: "Cosmetic" },
            ]}
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          mt: 1,
        }}
      >
        <MyButton type="submit" variant="contained" disabled={isSubmitting}>
          Update
        </MyButton>
      </Box>
    </Box>
  );
}

export default TreatmentUpdateBody;
