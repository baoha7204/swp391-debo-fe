import List from "@mui/material/List";
import SidebarItem, { SidebarItemProps } from "../SidebarItem";

export type SidebarItemGroupProps = SidebarItemProps[];

const SidebarItemGroup = ({ group }: { group: SidebarItemGroupProps }) => (
  <List>
    {group.map((value) => (
      <SidebarItem {...value} />
    ))}
  </List>
);

export default SidebarItemGroup;
