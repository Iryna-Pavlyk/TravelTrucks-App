import css from './Features.module.css';
import { TbGasStation } from 'react-icons/tb';
import { BsDroplet } from 'react-icons/bs';
import { PiWindLight } from 'react-icons/pi';
import { BsCupHot } from 'react-icons/bs';
import { MdTv } from 'react-icons/md';
import { BsDiagram3 } from 'react-icons/bs';

const Features = ({ item }) => {
  return (
    <>
      <div className={css.container}>
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
    </>
  );
};

export default Features;
