import { useMemo } from "react";
import {
  MRT_Table,
  type MRT_ColumnDef,
  useMaterialReactTable,
} from "material-react-table";
import { Box, ListItemIcon, MenuItem } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import CancelIcon from "@mui/icons-material/Cancel";
import NotificationImportantIcon from "@mui/icons-material/NotificationImportant";

import LinkRouter from "@/components/LinkRouter";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import useFetchRescheduleReq from "./hooks/useFetchRescheduleReq";
import useRowAction from "./hooks/useRowAction";
import { formatDateSlotString } from "@/utils/helper";

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
  const { data, setData } = useFetchRescheduleReq();
  const handleAction = useRowAction();
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
        Cell: ({ row }) => {
          const value = row.original.customerFullName;
          return (
            <p>
              {!value || value.trim().length === 0 ? "Patient" : value.trim()}
            </p>
          );
        },
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
    columnFilterDisplayMode: "popover",
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
    renderRowActionMenuItems: ({ row }) => [
      <MenuItem
        key={0}
        onClick={() =>
          handleAction(row.original.appointmentId, setData, "approve")
        }
        sx={{ m: 0, color: "green" }}
      >
        <ListItemIcon sx={{ color: "green" }}>
          <CheckCircleIcon />
        </ListItemIcon>
        Approve
      </MenuItem>,
      <MenuItem
        key={1}
        onClick={() =>
          handleAction(row.original.appointmentId, setData, "reject")
        }
        sx={{ m: 0, color: "red" }}
      >
        <ListItemIcon sx={{ color: "red" }}>
          <CancelIcon />
        </ListItemIcon>
        Reject
      </MenuItem>,
    ],
  });

  return (
    <Box sx={{ p: "24px" }}>
      <MiniHeader
        content="Dentist Reschedule Request"
        IconComponent={NotificationImportantIcon}
      />
      <MRT_Table table={table} />
    </Box>
  );
};

export default RescheduleRequest;
