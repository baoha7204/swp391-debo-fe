import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import FormInputText from '@/components/Form/FormInputText';
import MyButton from '@/components/MyButton';
import useBranchUpdate from './useBranchUpdate';
import { useParams } from 'react-router-dom';
import axios from '@/config/axios';
import { useEffect, useState } from 'react';
import { API_ENDPOINTS } from '@/utils/api';
import FormSelect from '@/components/Form/FormSelect';
import FormImagePicker from '@/components/Form/FormImagePicker';

type ManagerProps = {
    id: string;
    firstName: string;
    lastName: string;
}

type BranchProps = {
    id: number;
    mngId: string;
    mngName: string;
}

function BranchUpdateBody() {
    const [handleSubmit, isSubmitting, control, setValues, onUpload] = useBranchUpdate();
    const { id } = useParams<{ id: string }>();

    const [branchesList, setBranchesList] = useState<BranchProps | any>('');

    const getOneCourse = async (id: string) => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.BRANCH.LIST}/${id}`);
            if (res.status === 200) {
                const branchData = res.data.data;
                setBranchesList(branchData);
                setValues(branchData);
            }
        } catch (error) {
            console.error("Error fetching branch data:", error);
        }
    };

    const [managers, setManagers] = useState<ManagerProps[]>([]);

    const getListManager = async () => {
        const res = await axios.get(API_ENDPOINTS.USERS.AVAILABLE_MANAGER);
        setManagers(res.data.data.list);
    }

    useEffect(() => {
        getListManager();
    }, []);

    useEffect(() => {
        if (branchesList || managers.length > 0) {
            const isCurrentManagerAvailable = managers.some(manager => manager.id === branchesList.mngId);
            if (!isCurrentManagerAvailable) {
                setManagers(prevManagers => [
                    ...prevManagers,
                    {
                        id: branchesList.mngId,
                        firstName: branchesList.mngName.split(' ')[0],
                        lastName: branchesList.mngName.split(' ')[1],
                    }
                ]);
            }
        }
    }, [branchesList, managers]);

    const managerOptions = managers.map(manager => ({
        value: manager.id,
        label: `${manager.firstName} ${manager.lastName}`,
    }));

    useEffect(() => {
        if (id) getOneCourse(id);
    }, [id]);

    return (
        <Box
            component="form"
            noValidate
            onSubmit={handleSubmit}
        >
            <Grid
                container
                className='create-screen'
                spacing={10}
            >
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <FormInputText
                        control={control}
                        id="id"
                        name="id"
                        outsideLabel="Branch ID:"
                        required
                        fullWidth
                        label="Must input integer number"
                        autoFocus
                    />
                    <FormInputText
                        control={control}
                        id="name"
                        name="name"
                        outsideLabel="Branch Name:"
                        required
                        fullWidth
                        label="Name"
                    />
                    <FormInputText
                        control={control}
                        id="address"
                        name="address"
                        outsideLabel="Address"
                        required
                        fullWidth
                        label="Address"
                    />
                    <FormInputText
                        control={control}
                        id="phone"
                        name="phone"
                        outsideLabel="Phone Number"
                        required
                        fullWidth
                        label="Mobile Phone"
                    />
                    <FormInputText
                        control={control}
                        id="email"
                        name="email"
                        label="example@gmail.com"
                        outsideLabel="Email:"
                        required
                        fullWidth
                    />
                    <FormSelect
                        control={control}
                        label='Manager'
                        name="mngId"
                        outsideLabel='Manager:'
                        options={managerOptions}
                    />
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <FormImagePicker
                        name="avt"
                        control={control}
                        onUpload={onUpload}
                    />
                </Grid>
            </Grid>
            <MyButton
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    m: 1
                }}
                type="submit"
                variant="contained"
                disabled={isSubmitting}
            >
                Submit
            </MyButton>
        </Box>
    );
}

export default BranchUpdateBody;
