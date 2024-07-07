import FormInputText from "@/components/Form/FormInputText";
import axios from "@/config/axios";
import { API_ENDPOINTS } from "@/utils/api";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import FormSelect from "@/components/Form/FormSelect";
import useUpdateBranchForEmployee from "./useUpdateBranchForEmployee";
import MyButton from "@/components/MyButton";
import { useParams } from "react-router-dom";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';


type BranchProps = {
    id: string;
    name: string;
}

type EmployeeProps = {
    id: string;
    avt: string;
    firstName: string;
    lastName: string;
    phone: string;
    gender: number;
}

function UpdateBranchForEmployee() {

    const [handleSubmit, isSubmitting, control, setValues] = useUpdateBranchForEmployee();

    // Branches
    const [branches, setBranches] = useState<BranchProps[]>([]);
    const { id } = useParams<{ id: string }>();

    const getListBranch = async () => {
        const res = await axios.get(API_ENDPOINTS.BRANCH.LIST);
        setBranches(res.data.data.list);
    }

    const branchOptions = branches.map(branch => ({
        value: branch.id,
        label: branch.name,
    }));

    const getEmployeeWithBr = async () => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.USERS.EMPLOYEE_WITH_ID}/${id}`);
            console.log("Employee with branch: ", res.data.data);
            setValues(res.data.data);
        } catch (error) {
            console.error("Failed to fetch employee with branch:", error);
        }
    }

    // Employees
    const [employees, setEmployees] = useState<EmployeeProps>('' as unknown as EmployeeProps);

    const getEmployee = async () => {
        try {
            const res = await axios.get(`${API_ENDPOINTS.USERS.ONE}/${id}`);
            const employee = res.data.data;
            setEmployees(employee);
            console.log("Employee: ", employee);
        } catch (error) {
            console.error("Failed to fetch employee:", error);
        }
    }

    // console.log("Employee: ", employees);

    // const emplOptions = employees.map(employee => ({
    //     value: employee.id,
    //     label: employee.name,
    // }));

    useEffect(() => {
        getEmployee();
        getEmployeeWithBr();
        getListBranch();
    }, []);

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
                    md={4}
                >
                    <Card >
                        <CardMedia
                            component="img"
                            alt="Avatar"
                            height="auto"
                            image={employees.avt}
                            sx={{
                                mt: 2,
                            }}
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="div">
                                Name: {employees.firstName} {employees.lastName}
                            </Typography>
                            <Typography variant="body2" color="text.secondary">
                                Phone: {employees.phone} <br />
                                Gender: {employees.gender === 1 ? 'Male' : 'Female'}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid >

                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={8}
                >
                    <FormSelect
                        name="brId"
                        label="Branchs"
                        outsideLabel="Branchs:"
                        control={control}
                        options={branchOptions}
                    />
                    <FormInputText
                        control={control}
                        id="salary"
                        name="salary"
                        outsideLabel="Employee Salary:"
                        fullWidth
                        label="Salary"
                        autoFocus
                        inputProps={{ "data-testid": "treatmentPrice" }}
                    />
                </Grid >
            </Grid >
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    mt: 3,
                }}
            >
                <MyButton
                    type="submit"
                    variant="contained"
                    disabled={isSubmitting}
                    data-testid="create"
                >
                    Add
                </MyButton>
            </Box>
        </Box >
    );
}

export default UpdateBranchForEmployee;