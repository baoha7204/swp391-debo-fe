import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { updateEmployeeSchema } from "./schema";
import { z } from "zod";
import { API_ENDPOINTS } from "@/utils/api";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import { put } from "@/utils/apiCaller";

export type UpdateBranchForEmployeeInputs = z.infer<typeof updateEmployeeSchema>;

export default function useUpdateBranchForEmployee() {

    const navigate = useNavigate();

    const { handleSubmit, reset, control, formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<UpdateBranchForEmployeeInputs>({
        resolver: zodResolver(updateEmployeeSchema),
        defaultValues: {
            id: '',
            brId: 0,
            salary: '',
        },
    });

    const onSubmit: SubmitHandler<UpdateBranchForEmployeeInputs> = (data) => {

        const result = handleSubmitForm(data, updateEmployeeSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        const { id, brId, salary } = data;

        console.log(id);
        console.log(brId);

        console.log(`${API_ENDPOINTS.USERS.UPDATE_BRANCH_FOR_EMPLOYEE}/${id}`);

        put(`${API_ENDPOINTS.USERS.UPDATE_BRANCH_FOR_EMPLOYEE}/${id}`, {
            id,
            brId,
            salary,
        })
            .then((res) => {
                const { data } = res;
                if (!data.success) {
                    console.log('1');
                    return errorToastHandler(data);
                }
                // successfully
                toastSuccess("Add successfully!");
                navigate('/adminTest/adminAllStaffList');
            })
            .catch((err) => {
                console.log('2');
                console.log(err.response);
                errorToastHandler(err.response);
            });
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return [handleSubmit(onSubmit), isSubmitting, control] as const;
}
