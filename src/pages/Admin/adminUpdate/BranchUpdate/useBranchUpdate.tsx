import { useEffect, useState } from "react";
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
import axios from "@/config/axios";
import { GenericAbortSignal } from "axios";

export type BranchInputs = z.infer<typeof branchUpdateSchema>;

type BranchUpdate = {
    id: string;
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
        console.log(id);
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

    const [branch, setBranch] = useState<BranchInputs | any>('');
    const { id } = useParams<{ id: string }>();

    const getOneBranch = async () => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.BRANCH.LIST}/${id}`);
            if (res.status === 200) {
                const branchData = res.data.data;
                console.log(branchData);
                setBranch(branchData);
            }
        } catch (error) {
            console.error("Error fetching branch data:", error);
        }
    }

    console.log(id);

    useEffect(() => {
        getOneBranch();
    }, [id]);

    const navigate = useNavigate();

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
            mngId: "",
            name: "",
            address: "",
            phone: "",
            email: "",
            avt: "",
        },
    });

    const onSubmit: SubmitHandler<BranchInputs> = (data) => {

        const result = handleSubmitForm(data, branchUpdateSchema);

        if (!result || !result.success || result.error) {
            return;
        }

        const { id, mngId, name, address, phone, email } = data;

        console.log(data);

        put(`${API_ENDPOINTS.BRANCH.LIST}/${id}`, {
            id,
            mngId,
            name,
            address,
            phone,
            email,
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

    const onUpload = () => async (data: File | null) => {

        if (!id) {
            errorToastHandler({ message: "Branch not found" });
            return;
        }

        try {
            console.log('branch', branch.id);
            console.log('data', data);

            const response = await upload.uploadAvatar(branch.id, data);
            console.log('response', response);

            const result = response.data;
            if (!result.success) {
                errorToastHandler(result);
                return;
            }
            console.log('returnData', response.data);

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
        setValue("avt", values.avt);
        console.log(values);

    };

    return [handleSubmit(onSubmit), isSubmitting, control, setValues, onUpload] as const;
}
