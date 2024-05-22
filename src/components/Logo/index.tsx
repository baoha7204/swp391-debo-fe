import { Typography } from "@mui/material";

import logoUrl from "/assets/Logo.png";
import LogoStyle from "./style";

const Logo = () => (
  <LogoStyle>
    <div className="logo-wrapper">
      <img className="logo" src={logoUrl} alt="logo" />
      <Typography className="logo-text">Debo</Typography>
    </div>
  </LogoStyle>
);
export default Logo;
