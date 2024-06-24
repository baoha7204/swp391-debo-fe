import { ChangeEvent, useState } from "react";
import { Avatar, Box } from "@mui/material";
import { ImagePickerProps } from "./types/core";
import EditMenu from "./EditMenu";

const ImagePicker = ({ ref, image }: ImagePickerProps) => {
  const [uploadState, setUploadState] = useState<"initial" | "uploaded">(
    "initial"
  );

  const handleUploadClick = (event: ChangeEvent<HTMLInputElement>) => {
    const { files } = event.target;
    const selectedFiles = files as FileList;
    const file = selectedFiles[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setImage(reader.result);
        setUploadState("uploaded");
      };
    }
  };

  const handleResetClick = () => {
    setImage(null);
    setUploadState("initial");
    reset({ logo: null });
  };

  const onUpload = (data: any) => {
    console.log(data.logo[0]);
  };

  return (
    <Box>
      <Avatar
        alt="dummy"
        sx={{
          width: 200,
          height: 200,
          position: "relative",
          overflow: "visible",
        }}
      >
        <Box sx={{ position: "absolute", left: 20, bottom: 0 }}>
          <EditMenu image={image} />
        </Box>
      </Avatar>
    </Box>
  );
};

export default ImagePicker;
