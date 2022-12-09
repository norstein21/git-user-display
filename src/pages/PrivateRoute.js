import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Dashboard';

const PrivateRoute = ({children}) => {
  const {isAuthenticated, user} = useAuth0();
  const adaUser = isAuthenticated && user;

  if(!adaUser){
    return <Navigate to='/login' />
  }

  return children;
}
export default PrivateRoute;
