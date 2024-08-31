// import { useState } from 'react'
// import css from "./App.module.css";
import { Route, Routes } from 'react-router-dom';
import CatalogPage from '../pages/CatalogPage/CatalogPage.jsx';
// import HomePage from '../pages/HomePage/HomePage.jsx';
import SideBarForm from '../components/SideBar/SideBarForm/SideBarForm.jsx';

function App() {
  return (
    <Routes>
      <Route path="/" element={<SideBarForm />} />
      {/* <Route path="/" element={<HomePage />} /> */}
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
