import React from "react";
import Header from "../components/Header";
import SideBarFilter from "../components/SideBarFilter";
import Footer from "../components/Footer";
import FeaturedApartments from "../components/FeaturedApartments";

const PropertyListing = () => {
  return (
    <div className="block  mt-8 desktop:mx-0 desktop:mt-0">
      <Header className="mx-2" />


      <SideBarFilter />
      <FeaturedApartments />

      <Footer />
    </div>
  );
};

export default PropertyListing;
