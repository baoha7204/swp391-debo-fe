import { useMemo } from "react";
import {
  MRT_Table, //import alternative sub-component if we do not want toolbars
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { formatDateSlotString } from "@/utils/helper";
import useFetchRescheduleReq from "./hooks/useFetchRescheduleReq";
import { ListItemIcon, MenuItem } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import LinkRouter from "@/components/LinkRouter";

export type AppRescheduleRequest = {
  appointmentId: string;
  treatmentName: string;
  dentistId: string;
  dentistFullName: string;
  customerFullName: string;
  startDate: Date;
  timeSlot: number;
};

const RescheduleRequest = () => {
  const { data } = useFetchRescheduleReq();
  const columns = useMemo<MRT_ColumnDef<AppRescheduleRequest>[]>(
    () => [
      {
        accessorKey: "treatmentName",
        header: "Name",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <LinkRouter
            to={`/manager/appointments/${row.original.appointmentId}`}
          >
            {renderedCellValue}
          </LinkRouter>
        ),
      },
      {
        accessorKey: "dentistFullName",
        header: "Dentist",
        size: 250,
        Cell: ({ renderedCellValue, row }) => (
          <LinkRouter
            to={`/manager/managerAllStaffList/${row.original.dentistId}`}
          >
            {renderedCellValue}
          </LinkRouter>
        ),
      },
      {
        accessorKey: "customerFullName",
        header: "Patient",
        size: 250,
      },
      {
        accessorFn: (row) => formatDateSlotString(row.timeSlot, row.startDate),
        id: "date",
        header: "Date",
        size: 250,
      },
    ],
    []
  );

  const table = useMaterialReactTable({
    columns,
    data,
    enableColumnActions: true,
    enableColumnFilters: true,
    enablePagination: false,
    enableRowActions: true,
    enableSorting: true,
    initialState: {
      showColumnFilters: true,
      showGlobalFilter: true,
      columnPinning: {
        left: ["mrt-row-expand", "mrt-row-select"],
        right: ["mrt-row-actions"],
      },
    },
    mrtTheme: (theme) => ({
      baseBackgroundColor: theme.palette.background.paper,
    }),
    muiTableBodyRowProps: { hover: false },
    muiTableProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        caption: {
          captionSide: "top",
        },
      },
    },
    muiTableHeadCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
        fontWeight: "bold",
      },
    },
    muiTableBodyCellProps: {
      sx: {
        border: "1px solid rgba(81, 81, 81, .5)",
      },
    },
    renderRowActionMenuItems: ({ closeMenu }) => [
      <MenuItem
        key={0}
        onClick={() => {
          // View profile logic...
          closeMenu();
        }}
        sx={{ m: 0, color: "green" }}
      >
        <ListItemIcon sx={{ color: "green" }}>
          <CheckCircleIcon />
        </ListItemIcon>
        Approve
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() => {
          // Send email logic...
          closeMenu();
        }}
        sx={{ m: 0, color: "red" }}
      >
        <ListItemIcon sx={{ color: "red" }}>
          <CancelIcon />
        </ListItemIcon>
        Reject
      </MenuItem>,
    ],
  });

  return <MRT_Table table={table} />;
};

export default RescheduleRequest;
