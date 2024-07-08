import DefaultLayout from "@/components/Layout/DefaultLayout";
import ChecklistIcon from "@mui/icons-material/Checklist";
import GroupIcon from "@mui/icons-material/Group";
import { Outlet } from "react-router-dom";
import { useContext } from "react";
import { UserContext } from "../User/user.context";

const SidebarManagerBody = [
    { title: "Appointment List", path: "appointments", icon: <ChecklistIcon /> },
    { title: "Employees", path: "managerAllStaffList", icon: <GroupIcon />, },
];

const ManagerRoutes = [
    { path: "appointments", breadcrumb: "Appointments" },
    { path: "appointments/:id", breadcrumb: "Appointment Detail" },
    { path: "appointments/:id/info", breadcrumb: "Info" },
    { path: "appointments/:id/notes", breadcrumb: "Notes" },
    { path: "managerAllStaffList", breadcrumb: "Employees" },
]

function ManagerLayout() {
    const { user } = useContext(UserContext);

    return (
        <DefaultLayout
            sidebarBody={SidebarManagerBody}
            header={{
                info: {
                    username: user?.username || "user",
                    role: user?.roleName as string,
                    avt: user?.avt || "/broken-image.jpg",
                }, routes: ManagerRoutes, isAllowedBooking: false
            }}
        >
            <Outlet />
        </DefaultLayout>
    );
}

export default ManagerLayout;