import DefaultLayout from "@/components/Layout/DefaultLayout";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupIcon from "@mui/icons-material/Group";
import EventIcon from "@mui/icons-material/Event";
import { Outlet } from "react-router-dom";

const SidebarManagerBody = [
    { title: "Calendar", path: "calendar", icon: <EventIcon /> },
    { title: "Appointment List", path: "appointments", icon: <ChecklistIcon /> },
    { title: "Employees", path: "managerAllStaffList", icon: <GroupIcon />, },
];

const ManagerRoutes = [
    { path: "calendar", breadcrumb: "Calendar" },
    { path: "appointments", breadcrumb: "Appointments" },
    { path: "appointments/:id", breadcrumb: "Appointment Detail" },
    { path: "appointments/:id/info", breadcrumb: "Info" },
    { path: "appointments/:id/notes", breadcrumb: "Notes" },
    { path: "managerAllStaffList", breadcrumb: "Employees" },
]

const ManagerInfo = {
    username: "Duong",
    role: "Manager",
    avt: "/static/images/avatar/1.jpg",
};

function ManagerLayout() {
    return (
        <DefaultLayout
            sidebarBody={SidebarManagerBody}
            header={{ info: ManagerInfo, routes: ManagerRoutes, isAllowedBooking: false }}
        >
            <Outlet />
        </DefaultLayout>
    );
}

export default ManagerLayout;