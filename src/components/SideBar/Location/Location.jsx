import css from './Location.module.css';
import { BsMap } from 'react-icons/bs';

const Location = () => {
  return (
    <div className={css.containerLocation}>
      <h3 className={css.textLocation}>Location</h3>
      <div className={css.containerIcon}>
        <input className={css.inputLocation} type="text" />
        <BsMap
          className={css.iconLocation}
          width={20}
          height={20}
        />
      </div>
    </div>
  );
};

export default Location;
