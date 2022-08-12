import React, { Suspense } from "react";
import Loader from "./components/Loader";

const ListaTareas = React.lazy(() =>
  import("./components/ListaTareas/ListaTareas")
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <ListaTareas />
    </Suspense>
  );
}

export default App;
