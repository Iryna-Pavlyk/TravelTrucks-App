import css from './VehicleType.module.css';

const VehicleType = () => {
  return (
    <>
      <h3 className={css.vehicleTypeTitle}>Vehicle type</h3>
      <ul className={css.vehicleTypeList}>
        <li className={css.vehicleTypeItem}>
          <div></div>
        </li>
        <li className={css.vehicleTypeItem}>
          <div></div>
        </li>
        <li className={css.vehicleTypeItem}>
          <div></div>
        </li>
      </ul>
    </>
  );
};

export default VehicleType;
