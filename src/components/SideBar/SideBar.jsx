import CampersList from '../CampersList/CampersList.jsx';
import Filters from './Filters/Filters.jsx';
import Location from './Location/Location.jsx';
import SearchBtn from './SearchBtn/SearchBtn.jsx';
import VehicleType from './VehicleType/VehicleType.jsx';

const SideBar = () => {
  return (
    <>
      <div>
        <Location />
        <Filters />
        <VehicleType />
        <SearchBtn />
      </div>
      {/* <CampersList /> */}
    </>
  );
};

export default SideBar;
