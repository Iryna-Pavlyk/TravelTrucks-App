import css from './HomePage.module.css';
import clsx from 'clsx';

const HomePage = () => {
  return (
    <>
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
                <use href="./src/components/assets/logo.svg#TravelTrucks"></use>
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
                    css.navLinkHome,
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
      <body>
        <div className={css.heroSection}>
          <div className={css.titleContainer}>
            <h1 className={css.heroTitle}>
              Campers of your dreams
            </h1>
            <h2 className={css.heroSectionTitle}>
              You can find everything you want in our
              catalog
            </h2>
          </div>
          <button className={css.heroBtn}>View Now</button>
        </div>
      </body>
    </>
  );
};

export default HomePage;
