import css from './Location.module.css';

const Location = () => {
  return (
    <div className={css.containerLocation}>
      <h3 className={css.textLocation}>Location</h3>
      <input className={css.inputLocation} type="text" />
    </div>
  );
};

export default Location;
