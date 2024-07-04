import FormInputText from "@/components/Form/FormInputText";
import axios from "@/config/axios";
import { API_ENDPOINTS } from "@/utils/api";
import { Box, Grid } from "@mui/material";
import { useEffect, useState } from "react";
import FormSelect from "@/components/Form/FormSelect";
import useUpdateBranchForEmployee from "./useUpdateBranchForEmployee";
import MyButton from "@/components/MyButton";

type BranchProps = {
    id: string;
    name: string;
}

type EmployeeWithBranchProps = {
    id: string;
    name: string;
}

function UpdateBranchForEmployee() {

    const [handleSubmit, isSubmitting, control] = useUpdateBranchForEmployee();

    // Branches
    const [branches, setBranches] = useState<BranchProps[]>([]);

    const getListBranch = async () => {
        const res = await axios.get(API_ENDPOINTS.BRANCH.LIST);
        setBranches(res.data.data.list);
    }

    console.log(branches);

    const branchOptions = branches.map(branch => ({
        value: branch.id,
        label: branch.name,
    }));

    // Employees
    const [employees, setEmployees] = useState<EmployeeWithBranchProps[]>([]);

    const getListEmployee = async () => {
        const res = await axios.get(API_ENDPOINTS.USERS.EMPLOYEE_WITH_BRANCH);
        setEmployees(res.data.data.list);
    }

    console.log(employees);

    const emplOptions = employees.map(employee => ({
        value: employee.id,
        label: employee.name,
    }));

    useEffect(() => {
        getListEmployee();
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
                    md={6}
                >
                    <FormSelect
                        name="id"
                        label="Employee"
                        outsideLabel="Employee:"
                        control={control}
                        options={emplOptions}
                    />
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <FormSelect
                        name="brId"
                        outsideLabel="Branch: "
                        label="Branch"
                        control={control}
                        options={branchOptions}
                    />
                    <FormInputText
                        control={control}
                        id="salary"
                        name="salary"
                        outsideLabel="Employee Salary: "
                        required
                        fullWidth
                        label="Salary"
                        inputProps={{ "data-testid": "treatmentPrice" }}
                    />
                </Grid>
            </Grid>
            <Box
                sx={{
                    display: 'flex',
                    justifyContent: 'left',
                    m: 1,
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
        </Box>
    );
}

export default UpdateBranchForEmployee;