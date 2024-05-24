import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./app/App.tsx";
import { AuthProvider } from "./context/auth.context.tsx";
import themes from "./config/themes/index.ts";
import Toast from "./components/Toast/index.tsx";
import "./styles/globals.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider theme={themes}>
    <AuthProvider>
      <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID!}>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </GoogleOAuthProvider>
      <Toast />
    </AuthProvider>
  </ThemeProvider>
);
