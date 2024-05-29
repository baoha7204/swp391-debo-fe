import * as React from 'react';
import Box from '@mui/material/Box';
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
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import DeleteIcon from '@mui/icons-material/Delete';
import FilterListIcon from '@mui/icons-material/FilterList';
import { visuallyHidden } from '@mui/utils';
import ButtonGroup from '@mui/material/ButtonGroup';
import Button from '@mui/material/Button';
import MyTextField from '@/components/MyTextField';
import Grid from '@mui/material/Grid';
import Tooltip from '@mui/material/Tooltip';

interface Data {
    id: number,
    address: string,
    mail: string,
    phoneN: number,
    altphoneN: number,
}

function createData(
    id: number,
    address: string,
    mail: string,
    phoneN: number,
    altphoneN: number,
): Data {
    return {
        id,
        address,
        mail,
        phoneN,
        altphoneN,
    };
}

const rows = [
    createData(1, '92 an duong vuong, long thanh bac, hoa thanh, tay ninh', 'huynhtd97@gmail.com', 827693877878, 123456789),
    createData(2, '92 an duong vuong, long thanh bac, hoa thanh, tay ninh', 'huynhtd97@gmail.com', 827693878, 123456789),
    createData(3, '92 an duong vuong, long thanh bac, hoa thanh, tay ninh', 'huynhtd97@gmail.com', 827693878, 123456789),
    createData(4, '92 an duong vuong, long thanh bac, hoa thanh, tay ninh', 'huynhtd97@gmail.com', 827693878, 123456789),

];

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
        id: 'address',
        numeric: false,
        disablePadding: true,
        label: 'Branch Address',
    },
    {
        id: 'mail',
        numeric: false,
        disablePadding: true,
        label: 'Branch Mail',
    },
    {
        id: 'phoneN',
        numeric: false,
        disablePadding: true,
        label: 'Mobile Phone',
    },
    {
        id: 'altphoneN',
        numeric: false,
        disablePadding: true,
        label: 'Alt Mobile Phone',
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
                            sx={{

                            }}
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

function CreateBranch() {

    const [order, setOrder] = React.useState<Order>('asc');
    const [orderBy, setOrderBy] = React.useState<keyof Data>('mail');
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

    return (
        <Box>
            <Box sx={{ m: 2 }}>
                <h1 >Branch Information</h1>
            </Box>
            <Grid
                container
                // component=''
                className='create-screen'
            >
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                    >
                        <h3>Branch Address: </h3>
                        <Box
                            component="form"
                            noValidate
                            autoComplete="off"
                        >
                            <MyTextField outsideLabel='' required fullWidth id="branch-address" label="Address" sx={{ m: 1, p: 0 }} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'row',
                            alignItems: 'center'
                        }}
                    >
                        <h3>Branch Mobile Number:</h3>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',

                            }}
                        >
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                            >

                                <MyTextField required fullWidth
                                    outsideLabel='' id="branch-mobile" label="Mobile Phone" variant="outlined" sx={{ m: 1, p: 0 }} />
                            </Box>
                            <Box
                                component="form"
                                noValidate
                                autoComplete="off"
                            >
                                <MyTextField required fullWidth
                                    outsideLabel='' id="branch-alt-mobile" label="Alt Mobile Phone" variant="outlined" sx={{ m: 1, p: 0 }} />
                            </Box>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    item
                    xs={false}
                    sm={false}
                    md={6}
                >
                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: 'center'
                        }}
                    >
                        <h3>Branch Mail:</h3>
                        <Box
                            component="form"
                            sx={{
                                '& > :not(style)': { m: 0, width: '100%' },

                            }}
                            noValidate
                            autoComplete="off"
                        >
                            <MyTextField required
                                fullWidth outsideLabel='' id="branch-mail" label="Mail" variant="outlined" sx={{ m: 1, p: 0 }} />
                        </Box>
                    </Box>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center'
                        }}
                    >
                        <ButtonGroup
                            disableElevation
                            variant="contained"
                            aria-label="Disabled button group"
                            sx={{
                                '& > :not(style)': { mt: 2, width: '15ch', },
                            }}
                        >
                            <Button>Add</Button>
                        </ButtonGroup>
                    </Box>
                </Grid>
            </Grid>
            <Box sx={{ width: '100%' }}>
                <Paper sx={{
                    width: '100%', mb: 2,
                }}>
                    <EnhancedTableToolbar numSelected={selected.length} />
                    <TableContainer >
                        <Table
                            aria-labelledby="tableTitle"
                            size={dense ? 'small' : 'medium'}
                            sx={{

                            }}
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
                                            sx={{ cursor: 'pointer', }}
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
                                                sx={{
                                                    maxWidth: '200px',
                                                    whiteSpace: 'nowrap',
                                                    overflow: 'hidden',
                                                    textOverflow: 'ellipsis',
                                                }}
                                            >
                                                {row.address}
                                            </TableCell>
                                            <TableCell align="left" sx={{
                                                maxWidth: '100px',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                p: 0
                                            }}>{row.mail}</TableCell>
                                            <TableCell align="left" sx={{
                                                maxWidth: '70px',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                p: 0
                                            }}>{row.phoneN}</TableCell>
                                            <TableCell align="left" sx={{
                                                maxWidth: '70px',
                                                whiteSpace: 'nowrap',
                                                overflow: 'hidden',
                                                textOverflow: 'ellipsis',
                                                p: 0
                                            }}>{row.altphoneN}</TableCell>

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
        </Box>
    );
}

export default CreateBranch;