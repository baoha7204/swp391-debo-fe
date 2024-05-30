import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { Box, IconButton, Typography } from "@mui/material";
import ClearRoundedIcon from "@mui/icons-material/ClearRounded";
import EventNoteRoundedIcon from "@mui/icons-material/EventNoteRounded";
import { format } from "date-fns";
import { enUS } from "date-fns/locale";

import { PopperInner } from "./style";
import { getHourFormat } from "@/utils/helper";
import EventActions from "./EventActions";
import { toastInfo } from "@/utils/toast";

export type MyCustomViewerProps = {
  event: ProcessedEvent;
  close: () => void;
};

const MyCustomViewer = ({ event, close }: MyCustomViewerProps) => {
  const hFormat = getHourFormat("12");
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
            onDelete={() => {
              toastInfo("Cancel event");
            }}
            onEdit={() => {
              close();
              toastInfo("Reschedule event");
            }}
          />
        </div>
        <Typography style={{ padding: "5px 0" }} noWrap>
          {event.title}
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
          {`${format(event.start, `dd MMMM yyyy ${hFormat}`, {
            locale: enUS,
          })} - ${format(event.end, `dd MMMM yyyy ${hFormat}`, {
            locale: enUS,
          })}`}
        </Typography>
      </div>
    </PopperInner>
  );
};

export default MyCustomViewer;
