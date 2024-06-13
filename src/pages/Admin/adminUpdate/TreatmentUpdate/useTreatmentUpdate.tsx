import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { z } from "zod";
import { put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "@/utils/api";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { useNavigate } from "react-router-dom";
import { treatmentSchema } from "../../adminCreate/Treatments/lib/treatmentSchema";

export type TreatmentInputs = z.infer<typeof treatmentSchema>;

export default function useTreatmentUpdate() {
    const navigate = useNavigate();

    const {
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { isSubmitSuccessful, isSubmitting },
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

    console.log("0");

    const onSubmit: SubmitHandler<TreatmentInputs> = (data) => {
        console.log("1");

        const result = handleSubmitForm(data, treatmentSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        const { id, category, name, description, price, } = data;

        console.log(data);

        put(`${API_ENDPOINTS.TREATMENT.TREATMENT}/${id}`, {
            id,
            category,
            name,
            description,
            price,
        })
            .then((res) => {
                const { data } = res;
                if (!data.success) {
                    return errorToastHandler(data);
                }
                // successfully
                toastSuccess("Create successfully!");
                navigate("/adminTest/treatments");
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

    const setValues = (values: TreatmentInputs) => {
        setValue("id", values.id);
        setValue("category", values.category);
        setValue("name", values.name);
        setValue("description", values.description);
        setValue("price", values.price);
    };

    return [handleSubmit(onSubmit), isSubmitting, control, setValues] as const;
}
