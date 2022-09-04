import { FC, Fragment, lazy, Suspense } from 'react';

// React Routing Dom Library
import { Route, Routes } from "react-router-dom";

// Include App.css
import './App.css';

// Dashboard Page
import ForecastPage from './pages/Home/Forecast';

// Dynamic Imports(Code Splittings)
const NotFoundPage = lazy(() => import("./pages/404/NotFound"));

const App: FC = () => {
  return (
    <Fragment>
      <Suspense fallback={<><p>Loading....</p></>}>
        <Routes>
          <Route path="/" element={<ForecastPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </Suspense>
    </Fragment>
  )
}

export default App;