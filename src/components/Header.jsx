import React, { useState, useRef, useEffect } from "react";
import Navbar from "./Navbar";
import Logo from "../assets/logo.svg";
import Menu from "../assets/hamburger-menu.svg";
import SearchBar from "./SearchBar";
import NavBarMobile from "./NavBarMobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef(null);

  function toggleMenu() {
    setIsMenuOpen((prev) => !prev);
  }

  // below code will close the menu bar starts
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        isMenuOpen 
        // menuRef.current &&
        // !menuRef.current.contain(event.target)
      ) {
        console.log("you click outside the menu bar");
        console.log(menuRef.current);
        // setIsMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);

    // return(
    //   document.removeEventListener("mousedown", handleClickOutside)
    // )
  }, [isMenuOpen]);
  // menu close ends

  return (
    <div className="relative mx-2 desktop:flex  desktop:justify-between desktop:bg-[#FFFFFF] desktop:p-8 desktop:items-center">
      {isMenuOpen ? <NavBarMobile ref={menuRef} /> : null}

      <div className="flex items-center gap-2">
        {/* toggle menu start */}
        <img
          src={Menu}
          alt="open & close"
          className="size-10 desktop:hidden" 
          onClick={toggleMenu}
        />
        {/* toggle menu start */}

        {/* note you can move the menu bar to the NavBarMobile component */}

        {/* reside base Logo start */}
        <img
          src={Logo}
          alt="Residebase Logo"
          className="w-21 h-6.5 desktop:w-24 desktop:h-7.5"
        />
        {/* reside base Logo end */}
      </div>
      <SearchBar  className="desktop:ml-6" />

      <Navbar />
    </div>
  );
};

export default Header;
