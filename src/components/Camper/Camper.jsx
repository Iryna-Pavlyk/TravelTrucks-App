import css from './Camper.module.css';
import { BsDiagram3 } from 'react-icons/bs';
import { TbGasStation } from 'react-icons/tb';
import { BsDroplet } from 'react-icons/bs';
import { PiWindLight } from 'react-icons/pi';
import { BsCupHot } from 'react-icons/bs';
import { MdTv } from 'react-icons/md';
import ShowMoreBtn from '../ShowMoreBtn/ShowMoreBtn.jsx';

const Camper = ({ item }) => {
  return (
    <div className={css.camperContainer}>
      <div className={css.camperContainerImg}>
        <img
          className={css.camperImg}
          width={292}
          height={320}
          src={item.gallery[0].thumb}
          alt={item.description}
        />
      </div>
      <div>
        <h2>{item.name}</h2>
        <p className={css.camperDescription}>
          {item.description}
        </p>
        <div className={css.camperEquipment}>
          {item.transmission ? (
            <div className={css.camperEquipmentItem}>
              <BsDiagram3 width={20} height={20} />
              automatic
            </div>
          ) : null}
          {item.engine ? (
            <div className={css.camperEquipmentItem}>
              <TbGasStation width={20} height={20} />
              {item.engine}
            </div>
          ) : null}
          {item.kitchen ? (
            <div className={css.camperEquipmentItem}>
              <BsCupHot width={20} height={20} />
              kitchen
            </div>
          ) : null}
          {item.bathroom ? (
            <div className={css.camperEquipmentItem}>
              <BsDroplet width={20} height={20} />
              bathroom
            </div>
          ) : null}
          {item.AC ? (
            <div className={css.camperEquipmentItem}>
              <PiWindLight width={20} height={20} />
              AC
            </div>
          ) : null}
          {item.TV ? (
            <div className={css.camperEquipmentItem}>
              <MdTv width={20} height={20} />
              TV
            </div>
          ) : null}
        </div>
      </div>
      <ShowMoreBtn />
    </div>
  );
};

export default Camper;
