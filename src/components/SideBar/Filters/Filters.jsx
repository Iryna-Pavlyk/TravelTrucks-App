import css from './Filters.module.css';

const Filters = () => {
  return (
    <>
      <p className={css.filtersText}>Filters</p>
      <h3 className={css.filtersTitle}>
        Vehicle equipment
      </h3>
      <ul className={css.filtersList}>
        <li className={css.filtersItem}>
          <div>
            <svg>
              <use href="/src/assets/logo.svg#TravelTrucks"></use>
            </svg>
          </div>
        </li>
        <li className={css.filtersItem}>
          <div></div>
        </li>
        <li className={css.filtersItem}>
          <div></div>
        </li>
        <li className={css.filtersItem}>
          <div></div>
        </li>
        <li className={css.filtersItem}>
          <div></div>
        </li>
      </ul>
    </>
  );
};

export default Filters;
