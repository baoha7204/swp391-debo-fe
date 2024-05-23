import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./app/App.tsx";
import { UserProvider } from "./context/user.context.tsx";
import themes from "./config/themes/index.ts";
import Toast from "./components/Toast/index.tsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={themes}>
    <UserProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </GoogleOAuthProvider>
      <Toast />
    </UserProvider>
  </ThemeProvider>
);
