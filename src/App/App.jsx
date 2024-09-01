import { Route, Routes } from 'react-router-dom';
// import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
// import HomePage from '../pages/HomePage/HomePage.jsx';
// import NotFoundPage from '../pages/NotFoundPage/NotFoundPage.jsx';
// import CamperPage from '../pages/CamperPage/CamperPage.jsx';
import { lazy, Suspense } from 'react';
import Loader from '../components/Loader/Loader.jsx';
// import Features from '../components/Features/Features.jsx';

const HomePage = lazy(() =>
  import('../pages/HomePage/HomePage.jsx')
);
const CamperPage = lazy(() =>
  import('../pages/CamperPage/CamperPage.jsx')
);
const CatalogPage = lazy(() =>
  import('../pages/CatalogPage/CatalogPage.jsx')
);
const NotFoundPage = lazy(() =>
  import('../pages/NotFoundPage/NotFoundPage.jsx')
);

function App() {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/catalog" element={<CatalogPage />} />
        <Route
          path="/catalog/:id"
          element={<CamperPage />}
        />
        {/* <Route path="features" element={<Features />} />
        <Route path="reviews" element={{}} /> */}
        {/* </Route> */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
}

export default App;
