import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useLocation, useNavigate } from "react-router-dom";
import { staffSchema } from "./staffSchema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import useAuth from "@/hooks/useAuth";
import { post } from "@/utils/apiCaller";
import { errorToastHandler } from "@/utils/toast/actions";
import { AuthResponseType } from "@/pages/Authentication/types/core";
import { API_ENDPOINTS } from "@/utils/api";
import { getRoles } from "@/utils/jwt";
import { z } from "zod";

export type StaffInputs = z.infer<typeof staffSchema>;


export default function useStaff() {
    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();

    const { handleSubmit, reset, control, formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<StaffInputs>({
        resolver: zodResolver(staffSchema),
        defaultValues: {
            username: '',
            password: '',
            role: '',
            phone: '',
            email: '',
            firstName: '',
            lastName: '',
            gender: '',
        },
    });

    const onSubmit: SubmitHandler<StaffInputs> = (data) => {
        const result = handleSubmitForm(data, staffSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        post<AuthResponseType>(
            API_ENDPOINTS.AUTH.LOGIN_CREDENTIALS,
            false,

        ).then((res) => {
            const { data } = res;
            const accessToken = data.data?.accessToken;
            const refreshToken = data.data?.refreshToken;
            if (!data.success || !accessToken || !refreshToken) {
                return errorToastHandler(data);
            }

            setAuth({ accessToken, refreshToken });
            const from = location.state?.from?.pathname;
            if (from) {
                return navigate(from, { replace: true });
            }

            const result = getRoles(accessToken);
            if (!result.success) {
                return;
            }

            navigate("/" + result.data);
        });
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return [handleSubmit(onSubmit), isSubmitting, control] as const;
}
