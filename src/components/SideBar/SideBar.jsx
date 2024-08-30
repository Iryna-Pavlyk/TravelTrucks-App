import Filters from './Filters/Filters.jsx';
import Location from './Location/Location.jsx';
import SearchBtn from './SearchBtn/SearchBtn.jsx';
import VehicleType from './VehicleType/VehicleType.jsx';

const SideBar = () => {
  return (
    <>
      <Location />
      <Filters />
      <VehicleType />
      <SearchBtn />
    </>
  );
};

export default SideBar;
