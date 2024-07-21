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
import { Key, useContext } from "react";
import TablePaginationActions from "@/components/Table/TablePaginationActions";
import LinkRouter from "@/components/LinkRouter";
import useTableControl from "@/hooks/useControlTable";
import useFetchTableList from "@/hooks/useFetchTableList";
import { TableProps } from "./types/core";
import {
  formatDateOnlyString,
  formatDateSlotString,
  formatStatus,
} from "@/utils/helper";
import { UserContext } from "@/pages/User/user.context";
import { formatRole } from "@/utils/jwt";
import CircularIndeterminate from "../CircularIndeterminate";

type RowData = {
  id: Key;
  timeSlot?: number;
  cusId?: string;
  startDate?: Date;
  start?: Date;
};

const MyTable = <T extends RowData>({ url, columns }: TableProps<T>) => {
  const { user, isLoading } = useContext(UserContext);
  const [controller, handlePageChange, handleChangeRowsPerPage] =
    useTableControl({ page: 0, rowsPerPage: 5 });
  const [list, count] = useFetchTableList<T>({ url, controller });

  return isLoading ? (
    <CircularIndeterminate />
  ) : (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id as Key}
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
                  const value = row[column.id];
                  const formattedValue = column.isDate
                    ? formatDateSlotString(row.timeSlot!, value as Date)
                    : column.isDateOnly
                    ? formatDateOnlyString(value as Date)
                    : column.isStatus
                    ? formatStatus(
                        row.startDate || row.start!,
                        row.timeSlot!,
                        value as string
                      )
                    : column.format
                    ? column.format(value as string)
                    : value;
                  return (
                    <TableCell key={column.id as Key} align={column.align}>
                      {column.isDetail ? (
                        <LinkRouter to={row.id + ""}>
                          {(formattedValue as string) || "User"}
                        </LinkRouter>
                      ) : column.isPatientDetail ? (
                        <LinkRouter
                          to={
                            `/${formatRole(
                              user?.roleName || "dentist"
                            )}/patients/` + row.cusId
                          }
                        >
                          {(formattedValue as string) || "User"}
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

export default MyTable;
