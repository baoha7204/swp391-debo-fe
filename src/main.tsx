import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "@emotion/react";
import { GoogleOAuthProvider } from "@react-oauth/google";

import App from "./app/App.tsx";
import { AuthProvider } from "./context/auth.context.tsx";
import themes from "./config/themes/index.ts";
import Toast from "./components/Toast/index.tsx";
import "./styles/globals.css";

async function enableMocking() {
  // eslint-disable-next-line no-undef
  if (process.env.NODE_ENV !== "development") {
    return;
  }
  const { worker } = await import("./mocks/browser");
  return worker.start();
}

enableMocking().then(() => {
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
});
