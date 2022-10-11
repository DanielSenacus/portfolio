import React from "react";

import { images } from "../../constants";
import "./Navbar.scss";

const Navbar = () => {
  const links = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className='app__navbar'>
      <div className='app_navbar-logo'>
        <img src={images.logo} alt='logo' />
      </div>
      <ul className='app__navbar-links'>
        {links.map((link) => (
          <li className='app__flex p-text' key={`link-${link}`}>
            <div></div>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
