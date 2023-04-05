import React, { useState, useEffect, useRef } from "react";
import useScrollUp from "../utilities/useScrollUp";

import Styles from "../styles/comp-styles/navbar.module.scss";
import "../styles/import-styles/MenuIcon.css";

import MenuIcon from "@mui/icons-material/Menu";
import AnchorIcon from "@mui/icons-material/Anchor";


const Navbar = () => {
  const [scroll, setScroll] = useState(false);
  const [reveal, setReveal] = useState(false);
  const [clicked, setClicked] = useState(false);

  let menuRef = useRef();
  const { scrollUp } = useScrollUp();

  useEffect(() => {
    if (window.scrollY >= 120) {
      setScroll(true);
    } else {
      setScroll(false);
    }
  });

  useEffect(() => {
    const closeMenu = (e) => {
      if (!menuRef.current.contains(e.target)) {
        setReveal(false);
        setClicked(false);
      }
    };

    document.addEventListener("mousedown", closeMenu);
    return () => {
      document.removeEventListener("mousedown", closeMenu);
    };
  });

  const toggleMenu = () => {
    setReveal((prev) => !prev);
    setClicked((prev) => !prev);
  };

  const menuHandler = () => {
    toggleMenu();
    scrollUp();
  };

  return (
    <div
      className={`${Styles.Navbar_Wrapper} ${scroll ? Styles.NavScroll : ""}`}
    >
      <nav className={Styles.Navbar}>
        <a href={"/"} onClick={scrollUp}>
          <div className={Styles.LeftSide}>
          <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M5 20h14v2H5v-2M17 2v3h-2V2h-2v3h-2V2H9v3H7V2H5v6h2v10h10V8h2V2h-2Z"/></svg>
            {/* <AnchorIcon sx={{ color: "white", fontSize: 30 }} /> */}
          </div>
        </a>

        <div className={Styles.RightSide}>
          <ul className={Styles.Navlink_Container}>
            <li>
              <a href={"/"} className={Styles.Navlink} onClick={scrollUp}>
                Home
              </a>
            </li>
            <li>
              <a
                href={"/post/"}
                className={Styles.Navlink}
                onClick={scrollUp}
              >
                Posts
              </a>
            </li>
            <li>
              <a
                href={"/contact"}
                className={Styles.Navlink}
                onClick={scrollUp}
              >
                Contact
              </a>
            </li>
          </ul>

          <span
            className={`${Styles.MenuIcon} ${
              clicked ? Styles.MenuIcon_Clicked : ""
            }`}
            onClick={toggleMenu}
            ref={menuRef}
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24"><path fill="white" d="M3 6h18v2H3V6m0 5h18v2H3v-2m0 5h18v2H3v-2Z"/></svg>
            {/* <MenuIcon sx={{ color: "white", fontSize: 30 }} /> */}
            <ul
              className={`${Styles.Menu} ${reveal ? Styles.Reveal : ""}`}
              onClick={toggleMenu}
            >
              <li>
                <a
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  href={"/"}
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  href={"/post/"}
                >
                  Posts
                </a>
              </li>
              <li>
                <a
                  className={Styles.Menu_NavLink}
                  onClick={menuHandler}
                  href={"/contact"}
                >
                  Contact
                </a>
              </li>
            </ul>
          </span>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
