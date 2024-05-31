import DeleteRounded from "@mui/icons-material/DeleteRounded";
import EditRounded from "@mui/icons-material/EditRounded";
import { Button, Grow, IconButton, Slide } from "@mui/material";
import { useState } from "react";
import { EventActions as Actions } from "./style";

type EventActionsProps = {
  onDelete(): void;
  onEdit(): void;
};

const EventActions = ({ onDelete, onEdit }: EventActionsProps) => {
  const [deleteConfirm, setDeleteConfirm] = useState(false);

  const handleDelete = () => {
    if (!deleteConfirm) {
      return setDeleteConfirm(true);
    }
    onDelete();
  };

  return (
    <Actions>
      <Grow in={!deleteConfirm} exit={false} timeout={400} unmountOnExit>
        <div>
          {/* reschedule appointment */}
          <IconButton size="small" onClick={onEdit}>
            <EditRounded />
          </IconButton>
          {/* cancel appointment */}
          <IconButton size="small" onClick={handleDelete}>
            <DeleteRounded />
          </IconButton>
        </div>
      </Grow>
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
    </Actions>
  );
};

export default EventActions;
