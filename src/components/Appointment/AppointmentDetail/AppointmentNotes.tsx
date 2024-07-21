import { toastSuccess } from "@/utils/toast";
import { put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "@/utils/api";
import { Box } from "@mui/material";
import AppointmentDetail from "./AppointmentDetail";

export type AppointmentProp = {
  id: string | undefined;
  note: string | null;
  customerName: string;
  dentistName: string;
  treatmentName: string;
  createdDate: Date;
  startDate: Date;
  timeSlot: number;
  rescheduleCount: number;
  status: string;
};

function AppointmentNotes() {
  const handleEditorSubmit = (editorData: AppointmentProp) => {
    const { id, note, customerName } = editorData;

    put(`${API_ENDPOINTS.APPOINTMENT.UPDATEAPPOINTMENTNOTES}/${id}`, {
      id,
      note,
      customerName,
    })
      .then((res) => {
        const { data } = res;
        if (!data.success) {
          console.log(data.message);
          return;
        }
        toastSuccess("Update successfully!");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  return (
    <Box>
      <AppointmentDetail onSubmit={handleEditorSubmit} />
    </Box>
  );
}

export default AppointmentNotes;
