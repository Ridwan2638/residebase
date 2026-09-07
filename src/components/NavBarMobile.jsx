import React, {useState, useEffect, useRef} from "react";
import { Link } from "react-router";

const NavBarMobile = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)

  function toggleMenu(){
    setIsMenuOpen(prev => !prev)
  }


  return (
    <div className="absolute left-0 top-10 bg-[#F4F5F5] p-4 rounded-md" onClick={toggleMenu}>
      <nav className=" font-roboto font-medium">
        {/* nav for mobile start  */}
        <ul className="flex flex-col gap-4 desktop:hidden">
          <Link to="#">LandLord</Link>
          <Link to="#">Tenant</Link>
          <Link to="#">Agent</Link>
          <Link to="#">Property Buyer</Link>
          <Link to="#">Property Seller</Link>
        </ul>
        {/* nav for mobile ends  */}
      </nav>
    </div>
  );
};

export default NavBarMobile;
