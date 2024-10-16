import { Navigate, Outlet } from 'react-router-dom';

// const isUser = localStorage.getItem('authToken');

const PrivateRoute = () => {
  const authenticated = true;
  return authenticated ? (
    <Outlet/>
  ) : (
    <Navigate to="/admin"/>
  );
};

export default PrivateRoute;