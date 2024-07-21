import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { updateEmployeeSchema } from "./schema";
import { z } from "zod";
import { API_ENDPOINTS } from "@/utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { toastSuccess } from "@/utils/toast";
import { put } from "@/utils/apiCaller";

export type UpdateBranchForEmployeeInputs = z.infer<
  typeof updateEmployeeSchema
>;

export default function useUpdateBranchForEmployee() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();
  console.log("getEmployee ID:", id);

  const {
    handleSubmit,
    reset,
    control,
    setValue,
    formState: { isSubmitSuccessful, isSubmitting },
  } = useForm<UpdateBranchForEmployeeInputs>({
    resolver: zodResolver(updateEmployeeSchema),
    defaultValues: {
      id: id,
      brId: 0,
      salary: 0,
    },
  });

  console.log("Join");

  const onSubmit: SubmitHandler<UpdateBranchForEmployeeInputs> = (data) => {
    const result = handleSubmitForm(data, updateEmployeeSchema);

    if (!result || !result.success || result.error) {
      return;
    }

    const { id, brId, salary } = data;

    put(`${API_ENDPOINTS.USERS.UPDATE_BRANCH_FOR_EMPLOYEE}/${id}`, {
      id,
      brId,
      salary,
    })
      .then((res) => {
        const { data } = res;
        if (!data.success) {
          console.log(data);
          return;
        }
        // successfully
        toastSuccess("Add successfully!");
        navigate("/admin/adminAllStaffList");
      })
      .catch((err) => {
        console.log(err.response);
      });
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  const setValues = (value: UpdateBranchForEmployeeInputs) => {
    setValue("brId", value.brId);
    setValue("salary", value.salary);
  };

  return [handleSubmit(onSubmit), isSubmitting, control, setValues] as const;
}
