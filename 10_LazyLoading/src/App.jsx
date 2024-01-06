import React, { lazy, Suspense } from 'react';

// Lazy-loaded component
const LazyComponent = lazy(() => import('./component/LazyComponent'));

// Non-lazy-loaded component
import NonLazyComponent from './component/NonLazyComponent';

const App = () => {
  return (
    <div>
      <h1>Lazy Loading Example</h1>

      {/* Non-lazy-loaded component */}
      <NonLazyComponent />

      <hr />

      {/* Lazy-loaded component wrapped in Suspense */}
      {/* Use Suspense to handle loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        <LazyComponent />
      </Suspense>
    </div>
  );
};

export default App;





