import { useContext, useState } from "react";
import { UserContext } from "@/pages/User/user.context";
import { errorToastHandler } from "@/utils/toast/actions";
import userApi from "@/utils/api/userApi";

const useUploadMedRec = () => {
  const { user, setUser } = useContext(UserContext);
  const [isUploading, setIsUploading] = useState(false);
  const value = user?.medRec || "";

  const onUpload = async (data: File | null) => {
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
      setUser(result.data);

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
