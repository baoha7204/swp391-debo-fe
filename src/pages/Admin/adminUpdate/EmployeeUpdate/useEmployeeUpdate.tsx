import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { allStaffSchema } from "../../adminCreate/Staffs/lib/staffSchema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { z } from "zod";
import { put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "@/utils/api";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";

export type StaffInputs = z.infer<typeof allStaffSchema>;

export default function useEmployeeUpdate() {
    const navigate = useNavigate();

    const { handleSubmit, reset, control, setValue,
        formState: { isSubmitSuccessful, isSubmitting },
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

        put(`${API_ENDPOINTS.USERS.USERS}`, {
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

    const setValues = (values: StaffInputs) => {
        setValue("username", values.username);
        setValue("password", values.password);
        setValue("phone", values.phone);
        setValue("email", values.email);
        setValue("firstName", values.firstName);
        setValue("lastName", values.lastName);
        setValue("address", values.address);
        setValue("gender", values.gender);
    };
    return [handleSubmit(onSubmit), isSubmitting, control, setValues] as const;
}
