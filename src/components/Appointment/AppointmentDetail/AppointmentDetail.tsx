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
import { jsPDF } from "jspdf"; // Import jsPDF
import html2canvas from "html2canvas"; // Import html2canvas

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
        note: data.note || "",
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

  console.log("Notes: ", formData.note);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const exportToPDF = async () => {
    const doc = new jsPDF();

    const convertHtmlToPlainText = (html: string) => {
      // Replace newlines and carriage returns with spaces
      let text = html.replace(/(\r\n|\n|\r)/gm, " ");

      // Replace <br> and <br/> with newlines
      text = text.replace(/<br\s*\/?>/gi, "\n");

      // Handle <b>, <i>, and <u> tags
      text = text.replace(/<\/?(b|i|u)>/gi, "");

      // Remove all other HTML tags
      text = text.replace(/<\/?[^>]+(>|$)/g, "");

      return text;
    };

    // Define styles
    const titleStyle = { fontSize: 16, fontStyle: "bold" };
    const headerStyle = { fontSize: 14, fontStyle: "bold" };
    const textStyle = { fontSize: 12 };

    try {
      // Strip HTML tags from formData.note
      const plainTextNote = convertHtmlToPlainText(formData.note as string);

      // Add title
      doc.setFontSize(titleStyle.fontSize);
      doc.setFont("helvetica", "bold");
      doc.text("Medical Record", 10, 10);

      // Add patient and appointment details
      doc.setFontSize(headerStyle.fontSize);
      doc.setFont("helvetica", "bold");
      doc.text(`Patient: ${formData.customerName}`, 10, 30);
      doc.text(`Dentist: ${formData.dentistName}`, 10, 40);
      doc.setFontSize(textStyle.fontSize);
      doc.setFont("helvetica", "normal");
      doc.text(`Created Date: ${formatDate(formData.createdDate)}`, 10, 50);
      doc.text(`Treatment: ${formData.treatmentName}`, 10, 60);
      doc.text(`Started Date: ${formatDate(formData.startDate)}`, 10, 70);
      doc.text(`Time Slot: ${formData.timeSlot}`, 10, 80);
      doc.text(`Reschedule Count: ${formData.rescheduleCount}`, 10, 90);
      doc.text(`Status: ${formData.status}`, 10, 100);

      // Add a line for separation
      doc.setDrawColor(0, 0, 0);
      doc.line(10, 110, 200, 110); // Adjust line position as needed

      // Add notes section
      doc.setFontSize(headerStyle.fontSize);
      doc.setFont("helvetica", "bold");
      doc.text("Notes", 10, 120);

      // Add the plain text note
      doc.setFontSize(textStyle.fontSize);
      doc.setFont("helvetica", "normal");
      const lines = doc.splitTextToSize(plainTextNote, 180); // Split long text into multiple lines
      doc.text(lines, 10, 130);

      // Save the PDF
      doc.save("medical-record.pdf");
    } catch (error) {
      console.error("Error generating PDF: ", error);
    }
  };

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
        <Grid
          item
          xs={12}
          sx={{
            display: "flex",
            flexDirection: "row",
            gap: 2,
          }}
        >
          {user?.role !== 5 && (
            <Grid>
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
          <Grid>
            <Button
              onClick={exportToPDF}
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
              Export to PDF
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
}

export default AppointmentDetail;
