import { toastError, toastSuccess } from "@/utils/toast";
import MyCKEditor from "@/components/CKEditor/MyCKEditor";

function AppointmentNotes(url: any) {
  const handleEditorSubmit = (editorData: any) => {

    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ content: editorData }),
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        toastSuccess('Note saved successfully');
      })
      .catch((error) => {
        toastError('Failed to save note');
        console.error('Error:', error);
      });
  };
  return (
    <MyCKEditor onSubmit={handleEditorSubmit} />
  );
}

export default AppointmentNotes;