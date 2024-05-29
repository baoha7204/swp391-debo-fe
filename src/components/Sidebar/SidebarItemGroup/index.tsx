import List from "@mui/material/List";
import SidebarItem from "../SidebarItem";

export type ItemGroupProps = {
  text: string;
  icon: JSX.Element;
};

const SidebarItemGroup = ({ group }: { group: ItemGroupProps[] }) => (
  <List>
    {group.map((value) => (
      <SidebarItem text={value.text} icon={value.icon} />
    ))}
  </List>
);

export default SidebarItemGroup;
