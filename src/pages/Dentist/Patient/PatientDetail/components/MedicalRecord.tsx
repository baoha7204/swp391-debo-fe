import { useParams } from "react-router-dom";
import FilePicker from "@/components/FilePicker";
import useFetchUser from "../hooks/useFetchUser";
import CircularIndeterminate from "@/components/CircularIndeterminate";

const ReadOnlyMedicalRecord = () => {
  const { id } = useParams();
  const { user, isLoading } = useFetchUser(id);
  return isLoading ? (
    <CircularIndeterminate />
  ) : (
    <FilePicker
      value={{
        url: user?.medRec || null,
        metadata: user?.medRecMetaData
          ? {
              name: user.medRecMetaData.nameFile,
              size: user.medRecMetaData.fileSize,
              lastModified: user.medRecMetaData.lastModified,
              contentType: user.medRecMetaData.contentType,
            }
          : null,
      }}
      disabled={false}
      readonly={true}
    />
  );
};

export default ReadOnlyMedicalRecord;
