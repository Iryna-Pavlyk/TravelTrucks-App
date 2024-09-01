import { useSelector } from 'react-redux';
import css from './CamperItem.module.css';
import { FaStar } from 'react-icons/fa';
import { BsMap } from 'react-icons/bs';
import { selectCamperById } from '../../redux/campers/selectors.js';
import { NavLink, Outlet } from 'react-router-dom';
import Loader from '../Loader/Loader.jsx';
import { Suspense } from 'react';
import clsx from 'clsx';

const CamperItem = () => {
  const camper = useSelector(selectCamperById);

  const buildCamperLinkClass = ({ isActive }) => {
    return clsx(
      css.camperLink,
      isActive && css.camperLinkIsActive
    );
  };

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

      <div className={css.camperLinksContainer}>
        <NavLink
          className={buildCamperLinkClass}
          to="features"
        >
          <h3>Features</h3>
        </NavLink>
        <NavLink
          className={buildCamperLinkClass}
          to="reviews"
        >
          <h3>Reviews</h3>
        </NavLink>
      </div>
      <hr className={css.line} />

      <Suspense fallback={<Loader />}>
        <Outlet />
      </Suspense>
    </div>
  );
};

export default CamperItem;
