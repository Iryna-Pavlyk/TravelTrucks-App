import AppBar from '../../components/AppBar/AppBar.jsx';
import css from './HomePage.module.css';

const HomePage = () => {
  return (
    <>
      <AppBar />
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
