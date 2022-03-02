import Loader from './components/Loader';
import React, { Suspense } from 'react';
import { DateProvider } from './context/Date';

const ListaTareas = React.lazy(
  () => import('./components/ListaTareas'))

function App() {
  return (
    <DateProvider>
      <Suspense fallback={<Loader />}>
        <ListaTareas />
      </Suspense>
    </DateProvider>
  );
}

export default App;
