import React from "react";
import logoWhite from "../assets/logoWhite.png";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="bg-[#003366] text-white p-6 desktop:p-12 w-full desktop:flex justify-between font-inter">

      {/* this section only for mobile screen display starts */}
      <section className="w-full desktop:hidden mb-6">
        <img src={logoWhite} className="h-11.5 w-25 mb-4" alt="" />
        <p>
          Nigeria's most trusted platform for finding, listing, and managing
          residential properties for landlords, tenants, and agents alike.
        </p>
      </section>
      {/* ends */}

      <section className="flex justify-between">
        <section className="w-[25%] hidden desktop:block">
        <img src={logoWhite} className="h-11.5 w-25 mb-4" alt="" />
        <p>
          Nigeria's most trusted platform for finding, listing, and managing
          residential properties for landlords, tenants, and agents alike.
        </p>
      </section>
        <div>
          <h2 className="footer-heading">Explore</h2>
          <nav className="footer-link">
            <Link to="#">Apartments for rent</Link>
            <Link to="#">Home for sale</Link>
            <Link to="#">Commercial spaces</Link>
            <Link to="#">New developments</Link>
          </nav>
        </div>
        <div>
          <h2 className="footer-heading">Service</h2>
          <nav className="footer-link">
            <Link to="#">For LandLord</Link>
            <Link to="#">For Tenant</Link>
            <Link to="#">For Agent</Link>
            <Link to="#">For Property Buyer</Link>
          </nav>
        </div>
        <div>
          <h2 className="footer-heading">Company</h2>
          <nav className="footer-link">
            <Link to="#">About Residebase</Link>
            <Link to="#">Contact Us</Link>
            <Link to="#" className="block">
              Help Center
            </Link>
          </nav>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
