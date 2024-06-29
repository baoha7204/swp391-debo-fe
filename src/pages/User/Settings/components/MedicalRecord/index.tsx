import { Box } from "@mui/material";
import useUploadMedRec from "./hooks/useUploadMedRec";
import FilePicker from "@/components/FilePicker";

const MedicalRecord = () => {
  const [value, onUpload, isUploading] = useUploadMedRec();
  return (
    <Box>
      <FilePicker value={value} onUpload={onUpload} disabled={isUploading} />
    </Box>
  );
};

export default MedicalRecord;
