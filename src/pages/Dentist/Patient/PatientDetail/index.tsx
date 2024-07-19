import MyTabs from "@/components/MyTabs";
import ReadOnlyMedicalRecord from "./components/MedicalRecord";
import { Box } from "@mui/material";
import MiniHeader from "@/pages/Admin/components/MiniHeader/MiniHeader";
import PersonIcon from "@mui/icons-material/Person";

const tabs = [
  {
    label: "medical record",
    component: <ReadOnlyMedicalRecord />,
  },
];

const DentistPatientDetail = () => {
  return (
    <Box sx={{ p: "24px" }}>
      <MiniHeader content="Patient" IconComponent={PersonIcon} />
      <MyTabs tabs={tabs} />;
    </Box>
  );
};

export default DentistPatientDetail;
