import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { treatmentSchema } from "./treatmentSchema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";

import { z } from "zod";
import { API_ENDPOINTS } from "@/utils/api";
import { useNavigate } from "react-router-dom";
import { toastSuccess } from "@/utils/toast";
import { errorToastHandler } from "@/utils/toast/actions";
import { post } from "@/utils/apiCaller";

export type TreatmentInputs = z.infer<typeof treatmentSchema>;


export default function useTreatment() {

    const navigate = useNavigate();

    const { handleSubmit, reset, control, formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<TreatmentInputs>({
        resolver: zodResolver(treatmentSchema),
        defaultValues: {
            id: 0,
            name: '',
            description: '',
            price: 0,
            category: 1,
        },
    });

    const onSubmit: SubmitHandler<TreatmentInputs> = (data) => {

        const result = handleSubmitForm(data, treatmentSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        const { id, category, name, description, price, } = data;

        console.log(category);
        console.log(data);

        post(API_ENDPOINTS.TREATMENT.TREATMENT, {
            id,
            category,
            name,
            description,
            price,
        })
            .then((res) => {
                const { data } = res;
                if (!data.success) {
                    console.log('1');
                    return errorToastHandler(data);
                }
                // successfully
                toastSuccess("Create successfully!");
                navigate('/adminTest/treatmentList');
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
