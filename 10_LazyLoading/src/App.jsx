import React, { lazy, Suspense } from 'react';

// Define a component using React.lazy
const LazyLoadedComponent = lazy(() => import('./LazyLoadedComponent'))

const App = () => {
  return (
    <div>
      <h1>My App</h1>
      {/* Use Suspense to handle loading state */}
      <Suspense fallback={<div>Loading...</div>}>
        {/* Lazy load the component */}
        <LazyLoadedComponent />
      </Suspense>
    </div>
  );
};

export default App;
