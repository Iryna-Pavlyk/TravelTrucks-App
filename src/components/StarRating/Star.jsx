import { FaStar } from 'react-icons/fa';
import css from './Star.module.css';

const Star = ({ filled }) => {
  const buildClass = `${css.star} ${
    filled ? css['starFilled'] : css['starEmpty']
  }`;

  return <FaStar className={buildClass} size={16} />;
};

export default Star;
