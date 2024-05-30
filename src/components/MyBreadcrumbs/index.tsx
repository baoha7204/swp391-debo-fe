/* eslint-disable @typescript-eslint/no-explicit-any */
import { Breadcrumbs } from "@mui/material";
import LinkRouter from "../LinkRouter";

const MyBreadcrumbs = ({ breadcrumbs }: any) => (
  <Breadcrumbs separator=">" aria-label="breadcrumb">
    <LinkRouter underline="hover" color="inherit" to={""}>
      Home
    </LinkRouter>
    {breadcrumbs.map(({ breadcrumb, match }: any) => {
      const path = match.pathname.substring(1);
      return (
        <LinkRouter underline="hover" color="inherit" to={path} key={path}>
          {breadcrumb}
        </LinkRouter>
      );
    })}
  </Breadcrumbs>
);
export default MyBreadcrumbs;
