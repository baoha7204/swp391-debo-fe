import { useContext, useState } from "react";
import { UserContext } from "@/pages/User/user.context";
import { errorToastHandler } from "@/utils/toast/actions";
import userApi from "@/utils/api/userApi";
import { UploadFunction } from "@/components/ImagePicker/types/core";

const useUploadMedRec = () => {
  const { user, setUser } = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false);
  const value = {
    url: user?.medRec || null,
    metadata: user?.medRecMetaData
      ? {
          name: user.medRecMetaData.nameFile,
          size: user.medRecMetaData.fileSize,
          lastModified: user.medRecMetaData.lastModified,
          contentType: user.medRecMetaData.contentType,
        }
      : null,
  };

  const onUpload: UploadFunction = async (data: File | null, config) => {
    setIsUploading(true);
    if (!user?.id) {
      errorToastHandler({ message: "User not found" });
      setIsUploading(false);
      return;
    }

    try {
      const response = await userApi.uploadMedRec(user.id, data);
      const result = response.data;
      if (!result.success) {
        errorToastHandler(result);
        return;
      }

      const returnData = result.data.medRec;

      const medRecMetaData = config || null;

      setUser({ ...result.data, medRecMetaData });

      return returnData;
    } catch (error) {
      if (error.name !== "CanceledError") {
        errorToastHandler(error.response);
      }
    } finally {
      setIsUploading(false);
    }
  };

  return [value, onUpload, isUploading] as const;
};

export default useUploadMedRec;
