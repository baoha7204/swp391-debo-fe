import { useForm } from "react-hook-form";
import { ChangeEvent, useState } from "react";
import {
  Avatar,
  Button,
  Card,
  CardActionArea,
  CardContent,
  Fab,
  Grid,
} from "@mui/material";
import AddPhotoAlternateIcon from "@mui/icons-material/AddPhotoAlternate";
import ImagePickerStyles from "./style";
import { ImagePickerProps } from "./types/core";

const ImagePicker = ({ name, file }: ImagePickerProps) => {
  const { register, handleSubmit, reset } = useForm();
  const [uploadState, setUploadState] = useState<"initial" | "uploaded">(
    "initial"
  );
  const [image, setImage] = useState<string | ArrayBuffer | null>(
    () => file || null
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
    <ImagePickerStyles>
      <div className="root">
        <Card className="cardContainer">
          <CardContent
            className={uploadState !== "uploaded" ? "cardRoot" : "cardRootHide"}
          >
            <Grid container justifySelf="center" alignItems="center">
              {/* <input
                accept="image/jpeg,image/png,image/gif"
                className="input"
                id="contained-button-file"
                name="logo"
                ref={register({ required: true })}
                type="file"
                onChange={handleUploadClick}
              /> */}
              <label
                htmlFor="contained-button-file"
                className={uploadState === "uploaded" ? "input" : undefined}
              >
                <Fab component="span" className="button">
                  <AddPhotoAlternateIcon />
                </Fab>
              </label>
            </Grid>
          </CardContent>
          {uploadState === "uploaded" && (
            <CardActionArea onClick={handleResetClick}>
              {/* <Avatar className="logo" src={image} alt="LOGO">
                {name}
              </Avatar> */}
              <Avatar className="logo" alt="LOGO">
                Bao
              </Avatar>
            </CardActionArea>
          )}
        </Card>
        <Button
          variant="contained"
          color="primary"
          className="submit"
          onClick={handleSubmit(onUpload)}
        >
          Upload
        </Button>
      </div>
    </ImagePickerStyles>
  );
};

export default ImagePicker;
