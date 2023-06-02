import React from 'react';
import { useGlobalContext } from '../Context';
import { FaBars } from 'react-icons/fa';
import NavLinks from './NavLinks';
import sublinks from '../data';

function Navbar() {
  const { openSidebar, setPageId } = useGlobalContext();
  const handleSubmit = (e) => {
    console.log(e.target);
  };
  return (
    <nav onMouseOver={handleSubmit} className="nav-center">
      <h3 className="logo">strapi</h3>
      <button onClick={openSidebar} className="toggle-btn">
        <FaBars />
      </button>
      <NavLinks />
    </nav>
  );
}

export default Navbar;
