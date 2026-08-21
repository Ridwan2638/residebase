import React, { useState } from "react";
import Navbar from "./Navbar";
import Logo from "../assets/logo.svg";
import Menu from "../assets/hamburger-menu.svg";
import SearchBar from "./SearchBar";
import NavBarMobile from "./NavBarMobile";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function toggleMenu() {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <div
      className="relative desktop:flex  desktop:justify-between desktop:bg-[#F5F4F4] desktop:p-8 desktop:items-center"
    >
      {isMenuOpen ? <NavBarMobile /> : null}

      <div className="flex items-center gap-2">
        <img
          src={Menu}
          alt="open & close"
          className="size-10 desktop:hidden"
          onClick={toggleMenu}
        />
        <img
          src={Logo}
          alt="Residebase Logo"
          className="w-21 h-6.5 desktop:w-24 desktop:h-7.5"
        />
      </div>
      <SearchBar />

      <Navbar />
    </div>
  );
};

export default Header;
