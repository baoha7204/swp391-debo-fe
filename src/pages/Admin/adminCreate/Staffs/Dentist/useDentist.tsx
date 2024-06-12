import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { allStaffSchema } from "../lib/staffSchema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { z } from "zod";
import { post } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "@/utils/api";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

export type StaffInputs = z.infer<typeof allStaffSchema>;

export default function useDentist() {
    const navigate = useNavigate();

    const { handleSubmit, reset, control, formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<StaffInputs>({
        resolver: zodResolver(allStaffSchema),
        defaultValues: {
            username: '',
            password: '',
            phone: '',
            email: '',
            firstName: '',
            lastName: '',
            address: '',
            gender: false,
        },
    });

    const onSubmit: SubmitHandler<StaffInputs> = (data) => {
        const result = handleSubmitForm(data, allStaffSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        const { address, username, password, phone, email, firstName, lastName, gender } = data;

        console.log(gender);

        post(API_ENDPOINTS.USERS.CREATE_DENTIST, {
            username,
            email,
            password,
            firstName,
            lastName,
            gender,
            phone,
            address,
        })
            .then((res) => {
                const { data } = res;
                if (!data.success) {
                    console.log('1');

                    return errorToastHandler(data);
                }
                // successfully
                toastSuccess("Create successfully!");
                navigate('/adminTest/adminStaffList');
            })
            .catch((err) => {
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
