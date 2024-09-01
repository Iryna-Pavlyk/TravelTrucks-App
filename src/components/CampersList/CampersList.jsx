import { useSelector } from 'react-redux';
import { selectCampers } from '../../redux/campers/selectors.js';
import Camper from '../Camper/Camper.jsx';

const CampersList = () => {
  const campers = useSelector(selectCampers);

  return (
    <ul>
      {campers.map(item => (
        <li key={item.id}>
          <Camper item={item} />
        </li>
      ))}
    </ul>
  );
};

export default CampersList;
