import { Route, Routes } from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
import HomePage from '../pages/HomePage/HomePage.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/catalog" element={<CatalogPage />} />
      {/* <Route
          path="/catalog:id"
          element={<CamperPage />}
        /> */}
      {/* <Route path="*" element={<NotFound />} /> */}
    </Routes>
  );
}

export default App;
