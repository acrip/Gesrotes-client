import "./font.css";
import "./index.css";
import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./Pages/App";
import { SnackbarProvider } from "notistack";
import { ConfirmProvider } from "material-ui-confirm";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SnackbarProvider />
    <ConfirmProvider
      defaultOptions={{
        confirmationText: "Aceptar",
        cancellationText: "Cancelar",
      }}
    >
      <App />
    </ConfirmProvider>
  </React.StrictMode>
);
