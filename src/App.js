import Loader from './components/Loader';
import React, { Suspense } from 'react';

const ListaTareas = React.lazy(
  () => import('./components/ListaTareas'))

function App() {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <ListaTareas />
      </Suspense>
    </>
  );
}

export default App;
