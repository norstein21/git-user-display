import React from 'react';
import styled from 'styled-components';
import { useAuth0 } from '@auth0/auth0-react';

const Navbar = () => {
  const {
    loginWithRedirect,
    isLoading,
    logout,
    user,
    isAuthenticated} = useAuth0();
    console.log('auth0',{isLoading,user,isAuthenticated})

    const adaUser  = user && isAuthenticated
 
  return (
    <Wrapper>
      {adaUser && user.picture && <img src={user.picture} alt={user.name}></img>}
      {adaUser && user.name && <h4>Welcome, {user.name.toUpperCase()}</h4>}
      {adaUser ? <button onClick={() => logout({returnTo: window.location.origin})}>Logout</button> :
      <button onClick={() => loginWithRedirect()}>Login</button>
      }
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  padding: 1.5rem;
  margin-bottom: 4rem;
  background: var(--clr-white);
  text-align: center;
  display: grid;
  grid-template-columns: auto auto 100px;
  justify-content: center;
  align-items: center;
  gap: 1.5rem;
  h4 {
    margin-bottom: 0;
    font-weight: 400;
  }
  img {
    width: 35px !important;
    height: 35px;
    border-radius: 50%;
    object-fit: cover;
  }
  button {
    background: transparent;
    border: transparent;
    font-size: 1.2rem;
    text-transform: capitalize;
    letter-spacing: var(--spacing);
    color: var(--clr-grey-5);
    cursor: pointer;
  }
`;

export default Navbar;
