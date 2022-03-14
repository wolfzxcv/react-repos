import React from 'react';
import NavLaptop from './NavLaptop';
import NavMobile from './NavMobile';

const Nav: React.FC<{}> = () => (
  <>
    <NavLaptop /> <NavMobile />
  </>
);

export default Nav;
