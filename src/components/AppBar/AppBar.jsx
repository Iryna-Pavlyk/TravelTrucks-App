import clsx from 'clsx';
import css from './AppBar.module.css';
import { NavLink } from 'react-router-dom';

const buildHomeLinkClass = ({ isActive }) => {
  return clsx(
    css.navLinkHome,
    isActive && css.navLinkIsActive
  );
};
const buildCatalogLinkClass = ({ isActive }) => {
  return clsx(
    css.navLinkCatalog,
    isActive && css.navLinkIsActive
  );
};

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.mainHeaderContainer}>
        <nav className={css.nav}>
          <a className={css.navLogoLink} href="/">
            <svg
              className={css.iconLogo}
              width="136"
              height="16"
            >
              <use href="/src/assets/logo.svg#TravelTrucks"></use>
            </svg>
          </a>
          <ul className={css.navList}>
            <li className={css.navListHome}>
              <NavLink
                className={buildHomeLinkClass}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                className={buildCatalogLinkClass}
                to="/catalog"
              >
                Catalog
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
