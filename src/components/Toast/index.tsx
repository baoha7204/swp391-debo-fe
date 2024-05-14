import { ToastContainer } from "react-toastify";
import { toastContainerConfig as config } from "@/utils/toast";
import "react-toastify/dist/ReactToastify.css";

const Toast = () => <ToastContainer {...config} />;

export default Toast;
