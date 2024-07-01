import { GenericAbortSignal } from "axios";
import { get } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "..";
import { errorToastHandler } from "@/utils/toast/actions";
import { DentistCardProps } from "@/components/Dentist/DentistCard";

const dentistApi = {
  getListByTreatmentId: async (id?: number, signal?: GenericAbortSignal) => {
    return await get<DentistCardProps[]>(
      API_ENDPOINTS.DENTIST.LIST,
      {
        treatment: id,
      },
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

export default dentistApi;
