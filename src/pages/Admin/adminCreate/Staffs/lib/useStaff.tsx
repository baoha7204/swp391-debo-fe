import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { staffSchema } from "./staffSchema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { z } from "zod";

export type StaffInputs = z.infer<typeof staffSchema>;


export default function useStaff() {

    const { handleSubmit, reset, control, formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<StaffInputs>({
        resolver: zodResolver(staffSchema),
        defaultValues: {
            createUsername: '',
            createPassword: '',
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
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    return [handleSubmit(onSubmit), isSubmitting, control] as const;
}
