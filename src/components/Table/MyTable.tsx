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
import { Key } from "react";
import TablePaginationActions from "@/components/Table/TablePaginationActions";
import LinkRouter from "@/components/LinkRouter";
import useTableControl from "@/hooks/useControlTable";
import useFetchTableList from "@/hooks/useFetchTableList";
import { TableProps } from "./types/core";
import { formatDateSlotString } from "@/utils/helper";

type RowData = {
  id: Key;
  timeSlot: number;
};

const MyTable = <T extends RowData>({ url, columns }: TableProps<T>) => {
  const [controller, handlePageChange, handleChangeRowsPerPage] =
    useTableControl({ page: 0, rowsPerPage: 5 });
  const [list, count] = useFetchTableList<T>({ url, controller });

  return (
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
                    ? formatDateSlotString(row.timeSlot, value as Date)
                    : column.format
                    ? column.format(value as string)
                    : value;
                  return (
                    <TableCell key={column.id as Key} align={column.align}>
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

export default MyTable;
