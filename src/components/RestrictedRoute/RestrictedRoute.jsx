import { Navigate } from 'react-router-dom';

const PublicRoute = ({ redirectTo }) => {
  return <Navigate to={redirectTo} />;
};

export default PublicRoute;
