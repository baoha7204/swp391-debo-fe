import Box from '@mui/material/Box';
import '@/styles/globals.css'
import Grid from '@mui/material/Grid';
import FormInputText from '@/components/Form/FormInputText';
import useBranch from './lib/useBranch';
import MyButton from '@/components/MyButton';
import FormSelect from '@/components/Form/FormSelect';
import { API_ENDPOINTS } from '@/utils/api';
import axios from '@/config/axios';
import { useEffect, useState } from 'react';

type ManagerProps = {
    id: string;
    firstName: string;
    lastName: string;
}

function CreateBranchBody() {

    const [handleSubmit, isSubmitting, control] = useBranch();

    const [managers, setManagers] = useState<ManagerProps[]>([]);

    const getListManager = async () => {
        const res = await axios.get(API_ENDPOINTS.USERS.AVAILABLE_MANAGER);
        setManagers(res.data.data.list);
    }

    useEffect(() => {
        getListManager();
    }, []);

    const managerOptions = managers.map(manager => ({
        value: manager.id,
        label: `${manager.firstName} ${manager.lastName}`,
    }));

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
                        outsideLabel="Branch ID: "
                        required
                        fullWidth
                        label="Must input integer number"
                        autoFocus
                    />
                    <FormInputText
                        control={control}
                        id="name"
                        name="name"
                        outsideLabel="Branch Name: "
                        required
                        fullWidth
                        label="Name"
                    />
                    <FormInputText
                        control={control}
                        id="address"
                        name="address"
                        outsideLabel="Address:"
                        required
                        fullWidth
                        label="Address"
                    />

                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}>
                    <FormInputText
                        control={control}
                        id="phone"
                        name="phone"
                        outsideLabel="Phone Number:"
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
                        label="Manager"
                        name="mngId"
                        outsideLabel='Manager:'
                        options={managerOptions}
                        sx={{
                            width: '13ch',
                        }}
                    />
                </Grid>
            </Grid>
            <MyButton
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                }}
                type="submit"
                variant="contained"
                disabled={isSubmitting}
            >
                Create
            </MyButton>
        </Box>
    );
}

export default CreateBranchBody;