// import AppointmentNotes from "./AppointmentNotes";
// import MyTabs from "@/components/MyTabs";

import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import { Box } from "@mui/material";
import ChecklistIcon from "@mui/icons-material/Checklist";
import AppointmentNotes from "./AppointmentNotes";

// const tabs = [
//   {
//     label: "notes",
//     component: <AppointmentNotes />,
//   },
// ];

// const AppointmentDetail = () => {
//   // const { id } = useParams();
//   return <MyTabs tabs={tabs} />;
// };
// export default AppointmentDetail;

function AppointmentDetail() {
  return (
    <Box sx={{ p: '24px' }}>
      <MiniHeader content="Appointment Notes" IconComponent={ChecklistIcon} />
      <AppointmentNotes />
    </Box>
  );
}

export default AppointmentDetail;
