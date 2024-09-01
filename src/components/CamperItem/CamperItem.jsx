import { useSelector } from 'react-redux';
import css from './CamperItem.module.css';
import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { selectCamperById } from '../../redux/campers/selectors.js';
// import Features from '../Features/Features.jsx';
// import { Link } from 'react-router-dom';

const CamperItem = () => {
  const camper = useSelector(selectCamperById);

  return (
    <div className={css.camperItemContainer}>
      <div className={css.camperNameContainer}>
        <h2 className={css.camperName}>{camper.name}</h2>
      </div>
      <div className={css.camperReviewsContainer}>
        <div className={css.camperReviews}>
          <FaStar fill="#FFC531" />
          <p>
            {camper.rating}
            <span>({camper.reviews.length} Reviews)</span>
          </p>
        </div>
        <div className={css.camperLocation}>
          <BsMap width={16} height={16} />
          <p>{camper.location}</p>
        </div>
      </div>
      <p className={css.camperPrice}>€{camper.price}</p>
      <div className={css.camperContainerImg}>
        <img
          className={css.camperImg}
          width={350}
          height={350}
          src={camper.gallery[0].thumb}
          alt={camper.description}
        />
        <img
          className={css.camperImg}
          width={350}
          height={350}
          src={camper.gallery[1].thumb}
          alt={camper.description}
        />
        <img
          className={css.camperImg}
          width={350}
          height={350}
          src={camper.gallery[2].thumb}
          alt={camper.description}
        />
      </div>
      <p className={css.camperDescription}>
        {camper.description}
      </p>
      {/* <Link to="features">
        <h2>Features</h2>
      </Link>
      <Link to="reviews">
        <h2>Reviews</h2>
      </Link> */}
    </div>
  );
};

export default CamperItem;
