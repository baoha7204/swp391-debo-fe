import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import DrawerHeaderStyle from "@/components/Sidebar/DrawerHeader/style";
import Header, { HeaderProps } from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import SidebarBody from "@/components/Sidebar/SidebarBody";
import { SidebarItemGroupProps } from "@/components/Sidebar/SidebarItemGroup";

export type DefaultLayoutProps = {
  sidebarBody: SidebarItemGroupProps;
  header: HeaderProps;
  children: JSX.Element;
};

const DefaultLayout = ({
  children,
  sidebarBody,
  header,
}: DefaultLayoutProps) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Header {...header} />
      <Sidebar>
        <SidebarBody body={sidebarBody} />
      </Sidebar>
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeaderStyle />
        {children}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
