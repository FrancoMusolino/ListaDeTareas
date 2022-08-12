import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  DateContextProvider,
  FormContextProvider,
  TareasContextProvider,
} from "./context";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <DateContextProvider>
    <TareasContextProvider>
      <FormContextProvider>
        <App />
      </FormContextProvider>
    </TareasContextProvider>
  </DateContextProvider>
);
