import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableFooter,
  TableHead,
  TablePagination,
  TableRow,
} from "@mui/material";
import { AppointmentListColumn, AppointmentListProps } from "./types/core";
import { formatDate, formatDentistName } from "@/utils/helper";
import useTableControl from "@/hooks/useControlTable";
import useFetchAppointmentList from "@/hooks/useFetchAppointmentList";
import TablePaginationActions from "@/components/Table/TablePaginationActions";
import LinkRouter from "@/components/LinkRouter";

const columns: readonly AppointmentListColumn[] = [
  { id: "name", label: "Name", isDetail: true, minWidth: 170 },
  { id: "status", label: "Status", minWidth: 100 },
  { id: "treatment", label: "Treatment", minWidth: 170 },
  {
    id: "dentist",
    label: "Dentist",
    minWidth: 170,
    format: formatDentistName,
  },
  {
    id: "date",
    label: "Date",
    minWidth: 200,
    format: formatDate,
  },
];

const AppointmentList = ({ url }: AppointmentListProps) => {
  const [controller, handlePageChange, handleChangeRowsPerPage] =
    useTableControl({ page: 0, rowsPerPage: 5 });
  const [list, count] = useFetchAppointmentList({ url, controller });

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {list.map((row) => (
              <TableRow hover tabIndex={-1} key={row.id}>
                {columns.map((column) => {
                  let formattedValue = row[column.id];
                  if (column.format) {
                    formattedValue = column.format(formattedValue);
                  }
                  return (
                    <TableCell key={column.id} align={column.align}>
                      {column.isDetail ? (
                        <LinkRouter to={row.id + ""}>
                          {formattedValue as string}
                        </LinkRouter>
                      ) : (
                        (formattedValue as string)
                      )}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { value: -1, label: "All" }]}
              page={controller.page}
              count={count}
              rowsPerPage={controller.rowsPerPage}
              onPageChange={handlePageChange}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </TableContainer>
    </Paper>
  );
};

export default AppointmentList;
