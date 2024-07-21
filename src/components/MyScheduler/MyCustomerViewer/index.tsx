import { useContext } from "react";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { Box, IconButton, Typography } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";

import { PopperInner } from "./style";
import { formatDate } from "@/utils/helper";
import EventActions, { EventActionsProps } from "./EventActions";
import { UserContext } from "@/pages/User/user.context";
import LinkRouter from "@/components/LinkRouter";
import { formatRole } from "@/utils/jwt";

export type MyCustomViewerProps = {
  event: ProcessedEvent;
  close: () => void;
} & EventActionsProps;

const MyCustomViewer = ({
  event,
  close,
  onDelete,
  onEdit,
  role,
}: MyCustomViewerProps) => {
  const { user } = useContext(UserContext);
  return (
    <PopperInner>
      <Box
        sx={{
          bgcolor: (theme) => event.color || theme.palette.primary.main,
          color: (theme) => theme.palette.primary.contrastText,
        }}
      >
        <div className="rs__popper_actions">
          <div>
            <IconButton
              size="small"
              onClick={() => {
                close();
              }}
            >
              <ClearRoundedIcon color="secondary" />
            </IconButton>
          </div>
          <EventActions
            event={event}
            onDelete={onDelete}
            onEdit={onEdit}
            role={role}
          />
        </div>
        <Typography style={{ padding: "5px 0" }} noWrap>
          <LinkRouter
            to={`/${formatRole(user!.roleName)}/appointments/${event.id}`}
            color="inherit"
          >
            {event.title}
          </LinkRouter>
        </Typography>
      </Box>
      <div style={{ padding: "5px 10px" }}>
        <Typography
          style={{ display: "flex", alignItems: "center", gap: 8 }}
          color="textSecondary"
          variant="caption"
          noWrap
        >
          <EventNoteRoundedIcon />
          {`${formatDate(event.start)} - ${formatDate(event.end)}`}
        </Typography>
      </div>
    </PopperInner>
  );
};

export default MyCustomViewer;
