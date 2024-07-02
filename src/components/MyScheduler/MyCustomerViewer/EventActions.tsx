import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import { Button, Grow, IconButton, Slide } from "@mui/material";
import { useState } from "react";
import { ProcessedEvent } from "@aldabil/react-scheduler/types";
import { EventActions as Actions } from "./style";

export type EventActionsProps = {
  event: ProcessedEvent;
  onDelete?: (event: ProcessedEvent) => void;
  onEdit: (event: ProcessedEvent) => void;
  role: "dentist" | "patient";
};

const EventActions = ({ event, onDelete, onEdit, role }: EventActionsProps) => {
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const handleDelete = () => {
    if (!deleteConfirm) {
      return setDeleteConfirm(true);
    }
    if (onDelete && role === "patient") onDelete(event);
  };

  return (
    <Actions>
      <Grow in={!deleteConfirm} exit={false} timeout={400} unmountOnExit>
        <div>
          {/* reschedule appointment */}
          <IconButton size="small" onClick={() => onEdit(event)}>
            <EditRounded />
          </IconButton>
          {/* cancel appointment */}
          {role === "patient" && (
            <IconButton size="small" onClick={handleDelete}>
              <DeleteRounded />
            </IconButton>
          )}
        </div>
      </Grow>
      {role === "patient" && (
        <Slide
          in={deleteConfirm}
          direction="right"
          unmountOnExit
          timeout={400}
          exit={false}
        >
          <div>
            <Button className="delete" size="small" onClick={handleDelete}>
              CONFIRM
            </Button>
            <Button
              className="cancel"
              size="small"
              onClick={() => setDeleteConfirm(false)}
            >
              CANCEL
            </Button>
          </div>
        </Slide>
      )}
    </Actions>
  );
};

export default EventActions;
