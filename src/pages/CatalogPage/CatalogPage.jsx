import { useDispatch } from 'react-redux';
import AppBar from '../../components/AppBar/AppBar.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import CampersList from '../../components/CampersList/CampersList.jsx';
import css from './CatalogPage.module.css';
import { useEffect } from 'react';
import { fetchCampers } from '../../redux/campers/operations.js';
import LoadMoreBtn from '../../components/LoadMoreBtn/LoadMoreBtn.jsx';

const CatalogPage = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCampers());
  }, [dispatch]);

  return (
    <>
      <AppBar />
      <div className={css.containerCatalog}>
        <div className={css.containerCatalogPage}>
          <div className={css.containerSideBar}>
            <SideBar />
          </div>
          <CampersList />
        </div>
        <div className={css.containerBtn}>
          <LoadMoreBtn />
        </div>
      </div>
    </>
  );
};

export default CatalogPage;
