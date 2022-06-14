import React, { Suspense } from "react";
import Loader from "./components/Loader";
import { DateProvider } from "./context/Date";
import { TareasReducerProvider } from "./context/TareasReducer";

const ListaTareas = React.lazy(() =>
  import("./components/ListaTareas/ListaTareas")
);

function App() {
  return (
    <DateProvider>
      <TareasReducerProvider>
        <Suspense fallback={<Loader />}>
          <ListaTareas />
        </Suspense>
      </TareasReducerProvider>
    </DateProvider>
  );
}

export default App;
