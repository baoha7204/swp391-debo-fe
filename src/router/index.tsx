import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";

import ErrorPage from "@/pages/404";
import AuthenticationPage from "@/pages/Authentication";
import CircularIndeterminate from "@/components/CircularIndeterminate";
import UnauthorizedPage from "@/pages/403";

const RouterComponent = () => {
  const router = createBrowserRouter([
    { index: true, element: <Navigate to="login" /> },
    { path: "unauthorized", element: <UnauthorizedPage /> },
    { path: "login", element: <AuthenticationPage /> },
    { path: "*", element: <ErrorPage /> },
  ]);
  return (
    <RouterProvider
      fallbackElement={<CircularIndeterminate />}
      router={router}
    />
  );
};

export default RouterComponent;
