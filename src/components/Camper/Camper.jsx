import css from './Camper.module.css';
import { BsDiagram3 } from 'react-icons/bs';
import { TbGasStation } from 'react-icons/tb';
import { BsDroplet } from 'react-icons/bs';
import { PiWindLight } from 'react-icons/pi';
import { BsCupHot } from 'react-icons/bs';
import { MdTv } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';
import { IoMdHeartEmpty } from 'react-icons/io';
import { BsMap } from 'react-icons/bs';
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
      <div className={css.camperContainerText}>
        <div>
          <div className={css.camperNameContainer}>
            <h2 className={css.camperName}>{item.name}</h2>
            <div className={css.camperPriceContainer}>
              <p className={css.camperPrice}>
                €{item.price}
              </p>
              <IoMdHeartEmpty
                className={css.iconHeart}
                width={26}
                height={24}
              />
            </div>
          </div>
          <div className={css.camperReviewsContainer}>
            <div className={css.camperReviews}>
              <FaStar fill="#FFC531" />
              <p>
                {item.rating}
                <span>({item.reviews.length} Reviews)</span>
              </p>
            </div>
            <div className={css.camperLocation}>
              <BsMap width={16} height={16} />
              <p>{item.location}</p>
            </div>
          </div>

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
    </div>
  );
};

export default Camper;
