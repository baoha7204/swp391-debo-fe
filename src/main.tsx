import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import themes from "./config/themes/index.ts";
import { UserProvider } from "./context/user.context.tsx";
import App from "./app/App.tsx";
import "./styles/globals.css";
import Toast from "./components/Toast/index.tsx";
import { SidebarProvider } from "./context/sidebar.context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ThemeProvider theme={themes}>
      <UserProvider>
        <SidebarProvider>
          <App />
          <Toast />
        </SidebarProvider>
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>
);
