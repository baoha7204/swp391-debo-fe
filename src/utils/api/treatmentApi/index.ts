import { GenericAbortSignal } from "axios";
import { get } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";
import { TreatmentCardProps } from "@/components/Treatment/TreatmentCard";

const treatmentApi = {
  getListByBranchId: async (id?: number, signal?: GenericAbortSignal) => {
    return await get<TreatmentCardProps[]>(
      `${API_ENDPOINTS.TREATMENT.LIST.BY_BRANCH}/${id}`,
      undefined,
      {
        signal,
      }
    )
      .then((res) => res.data)
      .catch((err) => {
        errorToastHandler(err.response);
        return err;
      });
  },
};

export default treatmentApi;
