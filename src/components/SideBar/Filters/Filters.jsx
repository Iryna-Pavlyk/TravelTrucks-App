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
          <div className={css.containerDescription}>
            <svg width={32} height={32}>
              <use
                href={`/src/assets/sprite.svg#icon-ac`}
              />
            </svg>
            <p className={css.filterDescription}>AC</p>
          </div>
        </li>
        <li className={css.filtersItem}>
          <div className={css.containerDescription}>
            <svg width={32} height={32}>
              <use href="/src/assets/icons/icons.svg#icon-automatic"></use>
            </svg>
            <p className={css.filterDescription}>
              Automatic
            </p>
          </div>
        </li>
        <li className={css.filtersItem}>
          <div className={css.containerDescription}>
            <svg width={32} height={32}>
              <use href="/src/assets/icons/icons.svg#icon-kitchen"></use>
            </svg>
            <p className={css.filterDescription}>Kitchen</p>
          </div>
        </li>
        <li className={css.filtersItem}>
          <div className={css.containerDescription}>
            <svg width={32} height={32}>
              <use href="/src/assets/icons/icons.svg#icon-tv"></use>
            </svg>
            <p className={css.filterDescription}>TV</p>
          </div>
        </li>
        <li className={css.filtersItem}>
          <div className={css.containerDescription}>
            <svg width={32} height={32}>
              <use href="/src/assets/icons/icons.svg#icon-bathroom"></use>
            </svg>
            <p className={css.filterDescription}>
              Bathroom
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default Filters;
