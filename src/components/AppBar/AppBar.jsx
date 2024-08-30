import clsx from 'clsx';
import css from './AppBar.module.css';

const AppBar = () => {
  return (
    <header className={css.header}>
      <div className={css.mainHeaderContainer}>
        <nav className={css.nav}>
          <a
            className={css.navLogoLink}
            href="./index.html"
          >
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
              <a
                className={clsx(
                  css.navLinkHome,
                  css.navLinkIsActive
                )}
                href="./index.html"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className={clsx(
                  css.navLinkCatalog,
                  css.navLinkIsActive
                )}
                href=""
              >
                Catalog
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default AppBar;
