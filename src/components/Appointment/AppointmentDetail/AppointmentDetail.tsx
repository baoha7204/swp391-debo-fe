import React, { useContext, useEffect, useState } from "react";
import { Box, Button, Grid } from "@mui/material";
import { useParams } from "react-router-dom";
import MyCKEditor from "@/components/CKEditor/MyCKEditor";
import { UserContext } from "@/pages/User/user.context";
import { AppointmentProp } from "./AppointmentNotes";
import { API_ENDPOINTS } from "@/utils/api";
import axios from "@/config/axios";
import { formatDate } from "@/utils/helper";
import MyTextField from "@/components/MyTextField";

interface MyCKEditorProps {
  onSubmit: (data: AppointmentProp) => void;
}

function AppointmentDetail({ onSubmit }: MyCKEditorProps) {
  const { user } = useContext(UserContext);
  const { id } = useParams<{ id: string }>();
  const [isLoading, setIsLoading] = useState(true);

  const [formData, setFormData] = useState<AppointmentProp>({
    id,
    note: "",
    customerName: "",
    dentistName: "",
    createdDate: new Date(),
    treatmentName: "",
    startDate: new Date(),
    timeSlot: 0,
    rescheduleCount: 0,
    status: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent page reload
    onSubmit(formData);
  };

  const getAppointmentId = async () => {
    try {
      const res = await axios.get(`${API_ENDPOINTS.APPOINTMENT.DETAIL}/${id}`);
      const data = res.data.data;
      setFormData((prevData) => ({
        ...prevData,
        customerName: data.customerName || "",
        dentistName: data.dentistName || "",
        createdDate: data.createdDate ? new Date(data.createdDate) : new Date(),
        treatmentName: data.treatmentName || "",
        startDate: data.startDate ? new Date(data.startDate) : new Date(),
        timeSlot: data.timeSlot || 0,
        rescheduleCount: data.rescheduleCount || 0,
        status: data.status || "",
      }));
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getAppointmentId();
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <Box component="form" onSubmit={handleSubmit} p={3}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Patient"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Dentist"
            name="dentistName"
            value={formData.dentistName}
            onChange={handleInputChange}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Created Date"
            name="createdDate"
            value={formatDate(formData.createdDate)}
            onChange={handleInputChange}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Started Date"
            name="startDate"
            value={formatDate(formData.startDate)}
            onChange={handleInputChange}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Treatment"
            name="treatmentName"
            value={formData.treatmentName}
            onChange={handleInputChange}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Time Slot"
            name="timeSlot"
            value={formData.timeSlot}
            onChange={handleInputChange}
            fullWidth
            type="number"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Reschedule Count"
            name="rescheduleCount"
            value={formData.rescheduleCount}
            onChange={handleInputChange}
            fullWidth
            type="number"
            disabled
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <MyTextField
            outsideLabel="Status"
            name="status"
            value={formData.status}
            onChange={handleInputChange}
            fullWidth
            disabled
          />
        </Grid>
        <Grid item xs={12}>
          <MyCKEditor
            onChange={(data) => setFormData({ ...formData, note: data })}
          />
        </Grid>
        {user?.role !== 5 && (
          <Grid item xs={12}>
            <Button
              type="submit"
              sx={{
                display: "flex",
                mt: 2,
                backgroundColor: (theme) => theme.palette.primary.main,
                color: (theme) => theme.palette.primary.contrastText,
                "&:hover": {
                  backgroundColor: (theme) => theme.palette.primary.dark,
                },
              }}
            >
              Submit
            </Button>
          </Grid>
        )}
      </Grid>
    </Box>
  );
}

export default AppointmentDetail;
