import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { employeeUpdateSchema } from "./lib/employeeUpdateSchema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { z } from "zod";
import { put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "@/utils/api";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { useNavigate, useParams } from "react-router-dom";

export type StaffInputs = z.infer<typeof employeeUpdateSchema>;

export default function useEmployeeUpdate() {
    const navigate = useNavigate();

    const { id } = useParams<{ id: string }>();

    console.log(id);

    const {
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<StaffInputs>({
        resolver: zodResolver(employeeUpdateSchema),
        defaultValues: {
            id: id,
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
        const result = handleSubmitForm(data, employeeUpdateSchema);

        console.log('3');

        if (!result || !result.success || result.error) {
            return;
        }

        const { id, address, username, password, phone, email, firstName, lastName, gender } = data;

        console.log(`${API_ENDPOINTS.USERS.USER}/${id}`);

        put(`${API_ENDPOINTS.USERS.USER}/${id}`, {
            id,
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
                    return errorToastHandler(data);
                }
                // successfully
                toastSuccess("Update successfully!");
                navigate('/adminTest/adminAllStaffList');
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
