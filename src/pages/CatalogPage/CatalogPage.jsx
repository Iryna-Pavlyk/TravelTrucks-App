import { useDispatch } from 'react-redux';
import AppBar from '../../components/AppBar/AppBar.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <div className={css.containerCatalogPage}>
        <SideBar />
      </div>
      <CampersList />
    </>
  );
};

export default CatalogPage;
