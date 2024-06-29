import MyTabs from "@/components/MyTabs";
import Profile from "./components/Profile";
import Account from "./components/Account";
import MedicalRecord from "./components/MedicalRecord";

const tabs = [
  {
    label: "public profile",
    component: <Profile />,
  },
  {
    label: "account",
    component: <Account />,
  },
  {
    label: "medical record",
    component: <MedicalRecord />,
  },
];

const SettingsPage = () => {
  return <MyTabs tabs={tabs} />;
};
export default SettingsPage;
