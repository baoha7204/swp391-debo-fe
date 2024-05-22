import Loading from "@/components/Loading";
import ErrorPage from "@/pages/404";
import AuthenticationPage from "@/pages/Authentication";
import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
const RouterComponent = () => {
  const router = createBrowserRouter([
    { index: true, element: <Navigate to="login" /> },
    { path: "login", element: <AuthenticationPage /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return <RouterProvider fallbackElement={<Loading />} router={router} />;
};

export default RouterComponent;
