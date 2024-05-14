import Admin from "@/pages/Admin";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
const RouterComponent = () => {
  const router = createBrowserRouter([
    { index: true, element: <Navigate to="login" /> },
    { element: <Admin /> },
  ]);
};

export default RouterComponent;
