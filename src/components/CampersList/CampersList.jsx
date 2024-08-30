import { useSelector } from 'react-redux';
import css from './CampersList.module.css';
import { selectCampers } from '../../redux/campers/selectors.js';

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <>
      <ul className={css.campersList}>
        {campers.map(item => {
          return (
            <li className={css.campersItem} key={item.id}>
              Camper
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default CampersList;
