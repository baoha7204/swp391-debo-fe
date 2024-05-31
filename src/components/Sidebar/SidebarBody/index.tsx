import { useMemo } from "react";

import Divider from "@mui/material/Divider";
import SidebarItemGroup, { SidebarItemGroupProps } from "../SidebarItemGroup";

const SidebarBody = ({ body }: { body: SidebarItemGroupProps }) => {
  const result = useMemo(() => {
    const tempArray = [];
    for (let i = 0; i < body.length; i += 2) {
      tempArray.push(body.slice(i, i + 2));
    }
    return tempArray;
  }, [body]);
  return (
    <div>
      {result.map((subItem, index) => (
        <>
          <SidebarItemGroup group={subItem} />
          {index !== result.length - 1 && <Divider />}
        </>
      ))}
    </div>
  );
};
export default SidebarBody;
