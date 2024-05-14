import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";

import App from "./app/App.tsx";
import "./styles/globals.css";
import themes from "./config/themes/index.ts";
import { UserProvider } from "./context/user.context.tsx";
import Toast from "./components/Toast/index.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <UserProvider>
        <App />
        <Toast />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
