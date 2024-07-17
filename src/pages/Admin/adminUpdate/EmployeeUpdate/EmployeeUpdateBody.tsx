import Box from "@mui/material/Box";
import "@/styles/globals.css";
import Grid from "@mui/material/Grid";
import useEmployeeUpdate from "./useEmployeeUpdate";
import FormInputText from "@/components/Form/FormInputText";
import FormSelect from "@/components/Form/FormSelect";
import MyButton from "@/components/MyButton";
import { useParams } from "react-router-dom";
import { API_ENDPOINTS } from "@/utils/api";
import axios from "@/config/axios";
import { useEffect } from "react";

function EmployeeUpdateBody() {
  const [handleSubmit, isSubmitting, control, setValues] = useEmployeeUpdate();
  const { id } = useParams<{ id: string }>();

  const getOneCourse = async (id: string) => {
    try {
      const res = await axios.get(`${API_ENDPOINTS.USERS.USER}/${id}`);
      if (res.status === 200) {
        const employeeData = res.data.data;
        setValues(employeeData);
        console.log(employeeData);
      }
    } catch (error) {
      console.error("Error fetching employee data:", error);
    }
  };

  useEffect(() => {
    if (id) getOneCourse(id);
  }, [id]);

  return (
    <Box component="form" noValidate onSubmit={handleSubmit}>
      <Grid
        container
        // component=''
        className="create-screen"
        spacing={10}
      >
        <Grid item xs={false} sm={false} md={6}>
          <FormInputText
            control={control}
            name="email"
            outsideLabel=""
            required
            fullWidth
            label="Mail"
            autoFocus
            disabled
          />
          <FormInputText
            control={control}
            name="username"
            outsideLabel=""
            required
            fullWidth
            label="Username"
            autoFocus
          />
          <FormInputText
            control={control}
            name="phone"
            outsideLabel=""
            required
            fullWidth
            label="Mobile Phone"
            autoFocus
          />

          <FormSelect
            name="gender"
            control={control}
            label="Gender"
            options={[
              { value: true, label: "Male" },
              { value: false, label: "Female" },
            ]}
          />
        </Grid>
        <Grid item xs={false} sm={false} md={6}>
          <FormInputText
            control={control}
            name="lastName"
            outsideLabel=""
            required
            fullWidth
            label="Last Name"
            autoFocus
          />
          <FormInputText
            control={control}
            name="firstName"
            outsideLabel=""
            required
            fullWidth
            label="First Name"
            autoFocus
          />
          <FormInputText
            control={control}
            name="address"
            outsideLabel=""
            required
            fullWidth
            label="Address"
            autoFocus
          />
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "left",
          my: 1,
        }}
      >
        <MyButton type="submit" variant="contained" disabled={isSubmitting}>
          Update
        </MyButton>
      </Box>
    </Box>
  );
}

export default EmployeeUpdateBody;
