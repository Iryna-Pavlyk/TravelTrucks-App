import css from "./HomePage.module.css";

const HomePage = () => {
  return (
    <>
      <header>
        <div className={css.mainHeaderContainer}>
          <nav className={css.nav}>
            <a href="./index.html">
              <svg className={css.iconLogo} width="136" height="16">
                <use href="/src/components/assets/logo.svg#TravelTrucks"></use>
              </svg>
            </a>
            <ul className={css.navList}>
              <li>
                <a href="/index.html">Home</a>
              </li>
              <li>
                <a href="">Catalog</a>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
};

export default HomePage;
