import AppBar from '../../components/AppBar/AppBar.jsx';
import SideBar from '../../components/SideBar/SideBar.jsx';
import css from './CatalogPage.module.css';

const CatalogPage = () => {
  return (
    <>
      <AppBar />
      <div className={css.containerCatalogPage}>
        <SideBar />
      </div>
    </>
  );
};

export default CatalogPage;
