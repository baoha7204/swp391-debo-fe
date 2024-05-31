import { useState } from "react";

const useAnchorEl = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return [anchorEl, handleClick, handleClose] as const;
};

export default useAnchorEl;
