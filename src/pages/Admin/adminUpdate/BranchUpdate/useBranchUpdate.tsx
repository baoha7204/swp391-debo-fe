import { useContext, useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { branchUpdateSchema } from "./branchUpdateSchema";
import { handleSubmitForm } from "@/usecases/handleSubmitForm";
import { z } from "zod";
import { put } from "@/utils/apiCaller";
import { API_ENDPOINTS } from "@/utils/api";
import { errorToastHandler } from "@/utils/toast/actions";
import { toastSuccess } from "@/utils/toast";
import { useNavigate, useParams } from "react-router-dom";
import { GenericAbortSignal } from "axios";
import { BranchContext } from "./branch.context";

export type BranchInputs = z.infer<typeof branchUpdateSchema>;

type BranchUpdate = {
    id: number;
    mngId: string | null;
    name: string;
    address: string | null;
    phone: string | null;
    email: string;
    avt: string | null;
};

const upload = {
    uploadAvatar: async (
        id: string,
        data: File | null,
        signal?: GenericAbortSignal
    ) => {
        const formData = new FormData();
        formData.append("file", data as unknown as Blob);
        formData.append("id", id);
        return await put<NonNullable<BranchUpdate>>(
            `${API_ENDPOINTS.BRANCH.LIST}/${id}/upload-pic-branch`,
            formData,
            undefined,
            {
                signal,
                "Content-Type": "multipart/form-data",
            }
        );
    },
}

export default function useBranchUpdate() {
    const { branch, setBranch } = useContext(BranchContext);
    console.log('useBranchUpdate:', branch);
    const {
        handleSubmit,
        reset,
        control,
        setValue,
        formState: { isSubmitSuccessful, isSubmitting },
    } = useForm<BranchInputs>({
        resolver: zodResolver(branchUpdateSchema),
        defaultValues: {
            id: 0,
            mngId: '',
            name: '',
            address: '',
            phone: '',
            email: '',
            avt: branch?.avt || '',
        },
    });

    const { id } = useParams<{ id: string }>();

    const navigate = useNavigate();

    const onSubmit: SubmitHandler<BranchInputs> = (data) => {

        const result = handleSubmitForm(data, branchUpdateSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        const { avt, ...rest } = data;

        put(`${API_ENDPOINTS.BRANCH.LIST}/${id}`, {
            ...rest,
        })
            .then((res) => {
                const { data } = res;
                if (!data.success) {
                    return errorToastHandler(data);
                }
                // successfully
                toastSuccess("Update successfully!");
                navigate("/adminTest/branch");
            })
            .catch((err) => {
                console.log(err.response);
                errorToastHandler(err.response);
            });
    };

    const onUpload = async (data: File | null) => {

        if (!id) {
            errorToastHandler({ message: "Branch not found" });
            return;
        }

        try {
            const response = await upload.uploadAvatar(id, data);
            const result = response.data;
            if (!result.success) {
                errorToastHandler(result);
                return;
            }

            const returnData = result.data.avt;
            setBranch(result.data);

            return returnData;
        } catch (error) {
            if (error.name !== "CanceledError") {
                errorToastHandler(error.response);
            }
        }
    };

    useEffect(() => {
        if (isSubmitSuccessful) {
            reset();
        }
    }, [isSubmitSuccessful, reset]);

    const setValues = (values: BranchInputs) => {
        setValue("id", values.id);
        setValue("mngId", values.mngId);
        setValue("name", values.name);
        setValue("address", values.address);
        setValue("phone", values.phone);
        setValue("email", values.email);
    };

    return [handleSubmit(onSubmit), isSubmitting, control, setValues, onUpload] as const;
}

