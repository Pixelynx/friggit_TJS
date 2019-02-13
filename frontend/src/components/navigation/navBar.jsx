import React from 'react';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return(
    <>
      <nav>
          <Link to='/'>Home</Link>
      </nav>
      <select className='site_nav'>
        <option>Test</option>
      </select>
    </>
  )
}
