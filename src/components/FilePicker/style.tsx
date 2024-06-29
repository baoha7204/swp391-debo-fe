import { Typography, TypographyProps, styled } from "@mui/material";

export const StyledContainer: React.FC<TypographyProps> = styled(Typography)(
  () => ({
    "&::-webkit-scrollbar": {
      width: 7,
      height: 6,
    },
    "&::-webkit-scrollbar-track": {
      WebkitBoxShadow: "inset 0 0 6px rgb(125, 161, 196, 0.5)",
    },
    "&::-webkit-scrollbar-thumb": {
      WebkitBorderRadius: 4,
      borderRadius: 4,
      background: "rgba(0, 172, 193, .5)",
      WebkitBoxShadow: "inset 0 0 6px rgba(25, 118, 210, .5)",
    },
    "&::-webkit-scrollbar-thumb:window-inactive": {
      background: "rgba(125, 161, 196, 0.5)",
    },
  })
);
