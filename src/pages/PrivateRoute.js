import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth0 } from '@auth0/auth0-react';
import Dashboard from './Dashboard';

const PrivateRoute = ({children,...rest}) => {
  const {isAuthenticated,user} = useAuth0();
  const adaUser = isAuthenticated && user;

  return (
    <Route 
    {...rest} 
    render={()=>{
      return adaUser ? children : <Redirect to='/login'></Redirect>
    }}>
    </Route>
  )
};
export default PrivateRoute;
