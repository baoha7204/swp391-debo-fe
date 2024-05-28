import Divider from "@mui/material/Divider";
import SidebarItemGroup, { ItemGroupProps } from "../SidebarItemGroup";

const SidebarBody = ({ body }: { body: ItemGroupProps[] }) => {
  const subArrays2Els = [];
  for (let i = 0; i < body.length; i += 2) {
    subArrays2Els.push(body.slice(i, i + 2));
  }
  return (
    <div>
      {subArrays2Els.map((subArray, index) => (
        <>
          <SidebarItemGroup group={subArray} />
          {index !== subArrays2Els.length - 1 && <Divider />}
        </>
      ))}
    </div>
  );
};
export default SidebarBody;
