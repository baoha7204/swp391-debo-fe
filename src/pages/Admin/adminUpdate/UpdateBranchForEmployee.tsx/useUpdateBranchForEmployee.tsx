import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { updateEmployeeSchema } from "./schema";
import { z } from "zod";
import { API_ENDPOINTS } from "@/utils/api";
import { useNavigate, useParams } from "react-router-dom";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import { put } from "@/utils/apiCaller";
import { formatVnMoney } from "@/utils/helper";

export type UpdateBranchForEmployeeInputs = z.infer<typeof updateEmployeeSchema>;

export default function useUpdateBranchForEmployee() {

    const navigate = useNavigate();
    const { id } = useParams<{ id: string }>();
    console.log("getEmployee ID:", id);

    const { handleSubmit, reset, control, setValue, formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<UpdateBranchForEmployeeInputs>({
        resolver: zodResolver(updateEmployeeSchema),
        defaultValues: {
            id: id,
            brId: 0,
            salary: 0,
        },
    });

    console.log('Join');

    const onSubmit: SubmitHandler<UpdateBranchForEmployeeInputs> = (data) => {

        const result = handleSubmitForm(data, updateEmployeeSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        const { id, brId, salary } = data;

        console.log('Employee ID:', id);
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

    const setValues = (value: UpdateBranchForEmployeeInputs) => {
        setValue("brId", value.brId);
        setValue("salary", formatVnMoney(value.salary) as any);
    }

    return [handleSubmit(onSubmit), isSubmitting, control, setValues] as const;
}
