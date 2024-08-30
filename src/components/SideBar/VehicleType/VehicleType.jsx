import css from './VehicleType.module.css';

const VehicleType = () => {
  return (
    <>
      <h3 className={css.vehicleTypeTitle}>Vehicle type</h3>
      <ul className={css.vehicleTypeList}>
        <li className={css.vehicleTypeItem}>
          <div className={css.vehicleTypeContainer}>
            <svg width={32} height={32}>
              <use href="/src/assets/icons/icons.svg#icon-van"></use>
            </svg>
            <p className={css.vehicleTypeDescription}>
              Van
            </p>
          </div>
        </li>
        <li className={css.vehicleTypeItem}>
          <div className={css.vehicleTypeContainer}>
            <svg width={32} height={32}>
              <use href="/src/assets/icons/icons.svg#icon-fully-integrated"></use>
            </svg>
            <p className={css.vehicleTypeDescription}>
              Fully Integrated
            </p>
          </div>
        </li>
        <li className={css.vehicleTypeItem}>
          <div className={css.vehicleTypeContainer}>
            <svg width={32} height={32}>
              <use href="/src/assets/icons/icons.svg#icon-alcove"></use>
            </svg>
            <p className={css.vehicleTypeDescription}>
              Alcove
            </p>
          </div>
        </li>
      </ul>
    </>
  );
};

export default VehicleType;
