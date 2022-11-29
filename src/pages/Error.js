import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const Error = () => {
  return (
  <Wrapper>
    <div>
    <h2>Page Not Found</h2>
    <h3>Sorry, please navigate to the homepage.</h3>
    <Link to='/' className='btn'>
      Return Home
    </Link>
    </div>
  </Wrapper>
  
  );
};
const Wrapper = styled.section`
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: var(--clr-primary-10);
  text-align: center;
  h1 {
    font-size: 10rem;
  }
  h3 {
    color: var(--clr-grey-3);
    margin-bottom: 1.5rem;
  }
`;
export default Error;
