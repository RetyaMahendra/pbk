import { Outlet, Navigate } from 'react-router-dom';
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';

const PrivateRoute = () => {
  const { isAuthenticated } = useAuth0();
  if (isAuthenticated) {
    return <Outlet />;
  } else {
    return <Navigate to='/' />;
  }
};

export default PrivateRoute;
