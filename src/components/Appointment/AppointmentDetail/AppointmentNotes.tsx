import { toastSuccess } from "@/utils/toast";
import { put } from "@/utils/apiCaller";
import MyCKEditor from "@/components/CKEditor/MyCKEditor";
import { errorToastHandler } from "@/utils/toast/actions";
import { API_ENDPOINTS } from "@/utils/api";

export type AppointmentProp = {
  id: string | undefined;
  note: string | null;
};

function AppointmentNotes() {

  const handleEditorSubmit = (editorData: AppointmentProp) => {

    const { id, note } = editorData;

    put(`${API_ENDPOINTS.APPOINTMENT.UPDATEAPPOINTMENTNOTES}/${id}`, {
      id,
      note
    })
      .then((res) => {
        const { data } = res;
        if (!data.success) {
          return errorToastHandler(data);
        }
        // successfully
        toastSuccess("Update successfully!");
      })
      .catch((err) => {
        console.log(err.response);
        errorToastHandler(err.response);
      });
  };
  return (
    <MyCKEditor onSubmit={handleEditorSubmit} />
  );
}

export default AppointmentNotes;