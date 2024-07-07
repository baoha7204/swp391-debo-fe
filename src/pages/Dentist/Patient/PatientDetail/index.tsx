import MyTabs from "@/components/MyTabs";
import ReadOnlyMedicalRecord from "./components/MedicalRecord";

const tabs = [
  {
    label: "medical record",
    component: <ReadOnlyMedicalRecord />,
  },
];

const DentistPatientDetail = () => {
  return <MyTabs tabs={tabs} />;
};

export default DentistPatientDetail;
