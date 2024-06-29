import AppointmentInfo from "./AppointmentInfo";
import AppointmentNotes from "./AppointmentNotes";
import MyTabs from "@/components/MyTabs";

const tabs = [
  {
    label: "basic info",
    component: <AppointmentInfo />,
  },
  {
    label: "notes",
    component: <AppointmentNotes />,
  },
];

const AppointmentDetail = () => {
  // const { id } = useParams();
  return <MyTabs tabs={tabs} />;
};
export default AppointmentDetail;
