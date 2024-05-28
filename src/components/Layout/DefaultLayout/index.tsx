import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import DrawerHeaderStyle from "@/components/Sidebar/DrawerHeader/style";

const DefaultLayout = ({ children }: any) => {
  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      {children[0]}
      {children[1]}
      <Box component="main" sx={{ flexGrow: 1, p: 1 }}>
        <DrawerHeaderStyle />
        {children[2]}
      </Box>
    </Box>
  );
};

export default DefaultLayout;
