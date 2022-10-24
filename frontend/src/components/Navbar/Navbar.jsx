import React from "react";

import { HiMenuAlt4, HiX } from "react-icons/hi";
import { motion } from "framer-motion";

import { images } from "../../constants";
import Logo from "../../assets/svg/Logo";
import "./Navbar.scss";

const Navbar = () => {
  const [toggle, setToggle] = React.useState(false);
  const links = ["home", "about", "work", "skills", "contact"];

  return (
    <nav className='app__navbar'>
      <div className='app__navbar-logo'>
        <Logo color='#DADADA'></Logo>
      </div>
      <ul className='app__navbar-links'>
        {links.map((link) => (
          <li className='app__flex p-text' key={`link-${link}`}>
            <div></div>
            <a href={`#${link}`}>{link}</a>
          </li>
        ))}
      </ul>

      <div className='app__navbar-menu'>
        <HiMenuAlt4 onClick={() => setToggle(true)}></HiMenuAlt4>

        {toggle && (
          <motion.div
            whileInView={{ x: [300, 0] }}
            transition={{ duration: 0.85, ease: "easeInOut" }}
          >
            <HiX onClick={() => setToggle(false)}></HiX>
            <ul>
              {links.map((link) => (
                <li key={link}>
                  <a href={`#${link}`} onClick={() => setToggle(false)}>
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
