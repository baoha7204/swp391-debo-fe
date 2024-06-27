import MyTabs from "@/components/MyTabs";
import Profile from "./components/Profile";
import Account from "./components/Account";
import MedicalRecord from "./components/MedicalRecord";
import { useContext } from "react";
import { UserContext } from "../user.context";
import { sanitizeString } from "@/utils/helper";

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
  const { user } = useContext(UserContext);
  if (user?.roleName && sanitizeString(user.roleName) === "patient")
    return <MyTabs tabs={tabs} />;
  return <MyTabs tabs={tabs.slice(0, 2)} />;
};
export default SettingsPage;
