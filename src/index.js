import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import {
  DateProvider,
  FormContextProvider,
  TareasContextProvider,
} from "./context";

const container = document.getElementById("root");

const root = ReactDOM.createRoot(container);

root.render(
  <DateProvider>
    <TareasContextProvider>
      <FormContextProvider>
        <App />;
      </FormContextProvider>
    </TareasContextProvider>
  </DateProvider>
);
