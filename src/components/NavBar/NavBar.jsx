import React from 'react';
import { Nav, Link } from './style';
import { AiOutlineHome, AiOutlineHeart, AiOutlineUser } from 'react-icons/ai';

const Size = '30px';

const NavBar = () => {
  return (
    <Nav>
      <Link to="/">
        <AiOutlineHome size={Size} />
      </Link>
      <Link to="/favs">
        <AiOutlineHeart size={Size} />
      </Link>
      <Link to="/user">
        <AiOutlineUser size={Size} />
      </Link>
    </Nav>
  );
};

export default NavBar;
