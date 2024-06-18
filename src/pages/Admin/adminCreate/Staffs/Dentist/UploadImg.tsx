import MyTextField from "@/components/MyTextField";
import { Box } from "@mui/material";
import { useEffect, useState } from "react";
import { set } from "react-hook-form";

function UploadImg() {

    const [img, setImg] = useState<string>("");

    const postImg = async () => {
        const formData = new FormData();
        formData.append("file", img);
        // const res = await axios.post("http://localhost:5000/upload", formData);
        // console.log(res);
    }

    useEffect(() => {
        postImg();
    }, [img]);

    return (
        <Box>
            <img src={'https://swp391-bucket.s3.amazonaws.com/a8409ce183cc806ab245cbc5067713cd.jpg'}></img>
            <MyTextField

                type="file"
            >

            </MyTextField>
        </Box>
    );
}

export default UploadImg;