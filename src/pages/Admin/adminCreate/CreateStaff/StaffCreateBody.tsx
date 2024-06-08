import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '@/styles/globals.css'
import { alpha } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import TableSortLabel from '@mui/material/TableSortLabel';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Checkbox from '@mui/material/Checkbox';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import { create } from 'domain';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MyTextField from '@/components/MyTextField';

// interface Data {
//     id: number;
//     calories: number;
//     carbs: number;
//     fat: number;
//     name: string;
//     protein: number;
// }

// function createData(
//     id: number,
//     name: string,
//     calories: number,
//     fat: number,
//     carbs: number,
//     protein: number,
// ): Data {
//     return {
//         id,
//         name,
//         calories,
//         fat,
//         carbs,
//         protein,
//     };
// }

interface Data {
    id: number,
    username: string,
    password: string,
    fName: string,
    lName: string,
    mail: string,
    phoneN: number,
    gender: number,
    role: number,
}

function createData(
    id: number,
    username: string,
    password: string,
    fName: string,
    lName: string,
    mail: string,
    phoneN: number,
    gender: number,
    role: number,
): Data {
    return {
        id,
        username,
        password,
        fName,
        lName,
        mail,
        phoneN,
        gender,
        role,
    };
}

const rows = [
    createData(1, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(2, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(3, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(4, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(5, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(6, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(7, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(8, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
    createData(9, 'admin', '12345', 'Huynh', 'Thong Duong', 'huynhtd97@gmail.com', 827693878, 1, 0),
];

// const rows = [
//     createData(1, 'Cupcake', 305, 3.7, 67, 4.3),
//     createData(2, 'Donut', 452, 25.0, 51, 4.9),
//     createData(3, 'Eclair', 262, 16.0, 24, 6.0),
//     createData(4, 'Frozen yoghurt', 159, 6.0, 24, 4.0),
//     createData(5, 'Gingerbread', 356, 16.0, 49, 3.9),
//     createData(6, 'Honeycomb', 408, 3.2, 87, 6.5),
//     createData(7, 'Ice cream sandwich', 237, 9.0, 37, 4.3),
//     createData(8, 'Jelly Bean', 375, 0.0, 94, 0.0),
//     createData(9, 'KitKat', 518, 26.0, 65, 7.0),
//     createData(10, 'Lollipop', 392, 0.2, 98, 0.0),
//     createData(11, 'Marshmallow', 318, 0, 81, 2.0),
//     createData(12, 'Nougat', 360, 19.0, 9, 37.0),
//     createData(13, 'Oreo', 437, 18.0, 63, 4.0),
// ];

function descendingComparator<T>(a: T, b: T, orderBy: keyof T) {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

type Order = 'asc' | 'desc';

function getComparator<Key extends keyof any>(
    order: Order,
    orderBy: Key,
): (
    a: { [key in Key]: number | string },
    b: { [key in Key]: number | string },
) => number {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

// Since 2020 all major browsers ensure sort stability with Array.prototype.sort().
// stableSort() brings sort stability to non-modern browsers (notably IE11). If you
// only support modern browsers you can replace stableSort(exampleArray, exampleComparator)
// with exampleArray.slice().sort(exampleComparator)
function stableSort<T>(array: readonly T[], comparator: (a: T, b: T) => number) {
    const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) {
            return order;
        }
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

interface HeadCell {
    disablePadding: boolean;
    id: keyof Data;
    label: string;
    numeric: boolean;
}

const headCells: readonly HeadCell[] = [
    {
        id: 'username',
        numeric: false,
        disablePadding: true,
        label: 'Username',
    },
    {
        id: 'password',
        numeric: false,
        disablePadding: true,
        label: 'Password',
    },
    {
        id: 'fName',
        numeric: false,
        disablePadding: true,
        label: 'First Name',
    },
    {
        id: 'lName',
        numeric: false,
        disablePadding: true,
        label: 'Last Name',
    },
    {
        id: 'mail',
        numeric: false,
        disablePadding: true,
        label: 'Mail',
    },
    {
        id: 'phoneN',
        numeric: false,
        disablePadding: true,
        label: 'Mobile Phone',
    },

    {
        id: 'gender',
        numeric: false,
        disablePadding: true,
        label: 'Gender',
    },
    {
        id: 'role',
        numeric: false,
        disablePadding: true,
        label: 'Role',
    },
];

interface EnhancedTableProps {
    numSelected: number;
    onRequestSort: (event: React.MouseEvent<unknown>, property: keyof Data) => void;
    onSelectAllClick: (event: React.ChangeEvent<HTMLInputElement>) => void;
    order: Order;
    orderBy: string;
    rowCount: number;
}

function EnhancedTableHead(props: EnhancedTableProps) {
    const { onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } =
        props;
    const createSortHandler =
        (property: keyof Data) => (event: React.MouseEvent<unknown>) => {
            onRequestSort(event, property);
        };

    return (
        <TableHead>
            <TableRow>
                <TableCell padding="checkbox">
                    <Checkbox
                        color="primary"
                        indeterminate={numSelected > 0 && numSelected < rowCount}
                        checked={rowCount > 0 && numSelected === rowCount}
                        onChange={onSelectAllClick}
                        inputProps={{
                            'aria-label': 'select all desserts',
                        }}
                    />
                </TableCell>
                {headCells.map((headCell) => (
                    <TableCell
                        key={headCell.id}
                        align={headCell.numeric ? 'right' : 'left'}
                        padding={headCell.disablePadding ? 'none' : 'normal'}
                        sortDirection={orderBy === headCell.id ? order : false}
                    >
                        <TableSortLabel
                            active={orderBy === headCell.id}
                            direction={orderBy === headCell.id ? order : 'asc'}
                            onClick={createSortHandler(headCell.id)}
                        >
                            {headCell.label}
                            {orderBy === headCell.id ? (
                                <Box component="span" sx={visuallyHidden}>
                                    {order === 'desc' ? 'sorted descending' : 'sorted ascending'}
                                </Box>
                            ) : null}
                        </TableSortLabel>
                    </TableCell>
                ))}
            </TableRow>
        </TableHead>
    );
}

interface EnhancedTableToolbarProps {
    numSelected: number;
}

function EnhancedTableToolbar(props: EnhancedTableToolbarProps) {
    const { numSelected } = props;

    return (
        <Toolbar
            sx={{
                pl: { sm: 2 },
                pr: { xs: 1, sm: 1 },
                ...(numSelected > 0 && {
                    bgcolor: (theme) =>
                        alpha(theme.palette.primary.main, theme.palette.action.activatedOpacity),
                }),
            }}
        >
            {numSelected > 0 ? (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    color="inherit"
                    variant="subtitle1"
                    component="div"
                >
                    {numSelected} selected
                </Typography>
            ) : (
                <Typography
                    sx={{ flex: '1 1 100%' }}
                    variant="h6"
                    id="tableTitle"
                    component="div"
                >
                    Nutrition
                </Typography>
            )}
            {numSelected > 0 ? (
                <Tooltip title="Delete">
                    <IconButton>
                        <DeleteIcon />
                    </IconButton>
                </Tooltip>
            ) : (
                <Tooltip title="Filter list">
                    <IconButton>
                        <FilterListIcon />
                    </IconButton>
                </Tooltip>
            )}
        </Toolbar>
    );
}

function StaffCreateBody() {

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('lName');
    const [selected, setSelected] = React.useState<readonly number[]>([]);
    const [page, setPage] = React.useState(0);
    const [dense, setDense] = React.useState(false);
    const [rowsPerPage, setRowsPerPage] = React.useState(5);

    const handleRequestSort = (
        event: React.MouseEvent<unknown>,
        property: keyof Data,
    ) => {
        const isAsc = orderBy === property && order === 'asc';
        setOrder(isAsc ? 'desc' : 'asc');
        setOrderBy(property);
    };

    const handleSelectAllClick = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.checked) {
            const newSelected = rows.map((n) => n.id);
            setSelected(newSelected);
            return;
        }
        setSelected([]);
    };

    const handleClick = (event: React.MouseEvent<unknown>, id: number) => {
        const selectedIndex = selected.indexOf(id);
        let newSelected: readonly number[] = [];

        if (selectedIndex === -1) {
            newSelected = newSelected.concat(selected, id);
        } else if (selectedIndex === 0) {
            newSelected = newSelected.concat(selected.slice(1));
        } else if (selectedIndex === selected.length - 1) {
            newSelected = newSelected.concat(selected.slice(0, -1));
        } else if (selectedIndex > 0) {
            newSelected = newSelected.concat(
                selected.slice(0, selectedIndex),
                selected.slice(selectedIndex + 1),
            );
        }
        setSelected(newSelected);
    };

    const handleChangePage = (event: unknown, newPage: number) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    const handleChangeDense = (event: React.ChangeEvent<HTMLInputElement>) => {
        setDense(event.target.checked);
    };

    const isSelected = (id: number) => selected.indexOf(id) !== -1;

    // Avoid a layout jump when reaching the last page with empty rows.
    const emptyRows =
        page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0;

    const visibleRows = React.useMemo(
        () =>
            stableSort(rows, getComparator(order, orderBy)).slice(
                page * rowsPerPage,
                page * rowsPerPage + rowsPerPage,
            ),
        [order, orderBy, page, rowsPerPage],
    );

    const [role, setRole] = React.useState('');

    const handleChangeRole = (event: SelectChangeEvent) => {
        setRole(event.target.value as string);
    };

    const [gender, setGender] = React.useState('');

    const handleChangeGender = (event: SelectChangeEvent) => {
        setGender(event.target.value as string);
    };

    return (
        <>
            <div className="branchCreate-container">
                <div className="box-header">
                    <h1 style={{ marginBottom: 15 }}>Staff Information</h1>
                </div>
                <div className="box-body">

                    <div className="branch-address">
                        <h3>Username:</h3>
                        <div className="box">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' id="username" label="Username" variant="outlined" sx={{ m: 1, p: 0, width: '35ch' }} />
                            </Box>
                        </div>
                    </div>
                    <div className="branch-mail">
                        <h3>Password:</h3>
                        <div className="box">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' id="password" label="Password" variant="outlined" sx={{ m: 1, p: 0, width: '35ch' }} />
                            </Box>
                        </div>
                    </div>
                    <div className="branch-mobile">
                        <h3>Name:</h3>
                        <div className="box">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '17.5ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' id="first-name" label="First Name" variant="outlined" sx={{ m: 1, p: 0, width: '35ch' }} />
                            </Box>
                        </div>
                        <div className="box">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '17.5ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' id="last-name" label="Last Name" variant="outlined" sx={{ m: 1, p: 0, width: '35ch' }} />
                            </Box>
                        </div>
                    </div>
                    <div className="branch-mobile">
                        <h3>Mobile Phone:</h3>
                        <div className="box">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' id="mobile-phone" label="Mobile Phone" variant="outlined" sx={{ m: 1, p: 0, width: '35ch' }} />
                            </Box>
                        </div>
                    </div>
                    <div className="branch-mobile">
                        <h3>Mail:</h3>
                        <div className="box">
                            <Box
                                component="form"
                                sx={{
                                    '& > :not(style)': { m: 0, width: '35ch' },
                                }}
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField outsideLabel='' id="staff-mail" label="Mail" variant="outlined" sx={{ m: 1, p: 0, width: '35ch' }} />
                            </Box>
                        </div>
                    </div>
                    <div className="branch-mobile">
                        <h3>Gender:</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, p: 0, width: '33.5ch' },
                            }}
                            noValidate
                            autoComplete="off">
                            <FormControl fullWidth >
                                <InputLabel id="demo-simple-select-label">Gender</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={gender}
                                    label="Gender"
                                    onChange={handleChangeGender}
                                >
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    <MenuItem value={15}>Male</MenuItem>
                                    <MenuItem value={25}>Female</MenuItem>
                                    <MenuItem value={35}>Other</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="branch-mobile">
                        <h3>Role:</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 1, width: '33.5ch' },
                            }}
                            noValidate
                            autoComplete="off">
                            <FormControl fullWidth>
                                <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                <Select
                                    labelId="demo-simple-select-label"
                                    id="demo-simple-select"
                                    value={role}
                                    label="Role"
                                    onChange={handleChangeRole}
                                >
                                    {/* <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem> */}
                                    <MenuItem value={10}>Dentist</MenuItem>
                                    <MenuItem value={20}>General Staff</MenuItem>
                                    <MenuItem value={30}>Branch Manager</MenuItem>
                                </Select>
                            </FormControl>
                        </Box>
                    </div>
                    <div className="create-branch-button"
                        style={{
                            display: 'flex',
                            alignItems: 'center'
                        }}
                    >
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled button group"
                            sx={{
                                '& > :not(style)': { m: 0, width: '15ch', },
                            }}
                        >
                            <Button sx={{}}>Create</Button>
                        </ButtonGroup>
                    </div>
                </div>
                <div className="branch-create-table">
                    <Box sx={{ width: '100%' }}>
                        <Paper sx={{ width: '100%', mb: 2 }}>
                            <EnhancedTableToolbar numSelected={selected.length} />
                            <TableContainer>
                                <Table
                                    sx={{ minWidth: 750 }}
                                    aria-labelledby="tableTitle"
                                    size={dense ? 'small' : 'medium'}

                                >
                                    <EnhancedTableHead
                                        numSelected={selected.length}
                                        order={order}
                                        orderBy={orderBy}
                                        onSelectAllClick={handleSelectAllClick}
                                        onRequestSort={handleRequestSort}
                                        rowCount={rows.length}
                                    />
                                    <TableBody>
                                        {visibleRows.map((row, index) => {
                                            const isItemSelected = isSelected(row.id);
                                            const labelId = `enhanced-table-checkbox-${index}`;

                                            return (
                                                <TableRow
                                                    hover
                                                    onClick={(event) => handleClick(event, row.id)}
                                                    role="checkbox"
                                                    aria-checked={isItemSelected}
                                                    tabIndex={-1}
                                                    key={row.id}
                                                    selected={isItemSelected}
                                                    sx={{ cursor: 'pointer' }}
                                                >
                                                    <TableCell padding="checkbox">
                                                        <Checkbox
                                                            color="primary"
                                                            checked={isItemSelected}
                                                            inputProps={{
                                                                'aria-labelledby': labelId,
                                                            }}
                                                        />
                                                    </TableCell>
                                                    <TableCell
                                                        component="th"
                                                        id={labelId}
                                                        scope="row"
                                                        padding="none"
                                                    >
                                                        {row.username}
                                                    </TableCell>
                                                    <TableCell align="left" sx={{ padding: '0' }}>{row.password}</TableCell>
                                                    <TableCell align="left" sx={{ padding: '0' }}>{row.fName}</TableCell>
                                                    <TableCell align="left" sx={{ padding: '0' }}>{row.lName}</TableCell>
                                                    <TableCell align="left" sx={{ padding: '0' }}>{row.phoneN}</TableCell>
                                                    <TableCell align="left" sx={{ padding: '0' }}>{row.mail}</TableCell>
                                                    <TableCell align="left" sx={{ padding: '0' }}>{row.gender}</TableCell>
                                                    <TableCell align="left" sx={{ padding: '0' }}>{row.role}</TableCell>

                                                </TableRow>
                                            );
                                        })}
                                        {emptyRows > 0 && (
                                            <TableRow
                                                style={{
                                                    height: (dense ? 33 : 53) * emptyRows,
                                                }}
                                            >
                                                <TableCell colSpan={6} />
                                            </TableRow>
                                        )}
                                    </TableBody>
                                </Table>
                            </TableContainer>
                            <TablePagination
                                rowsPerPageOptions={[5, 10, 25]}
                                component="div"
                                count={rows.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>
                        <FormControlLabel
                            control={<Switch checked={dense} onChange={handleChangeDense} />}
                            label="Dense padding"
                        />
                    </Box>
                </div>
            </div >
        </>
    );
}

export default StaffCreateBody;