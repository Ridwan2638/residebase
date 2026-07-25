import React from "react";
import residebase from "../assets/residebase.gif";

const Preloader = () => {
  return (
    <div className="relative h-screen w-screen justify-center flex items-center">
      <div className=" relative flex flex-col items-center mx-4">
        <img
          src={residebase}
          className="w-2xs h-3xs desktop:w-lg desktop:h-md"
          alt="Reside Project Ongoing"
        />
        <p className="font-inter font-semibold text-2xl mt-10 text-center">
          Watch Out, Our developer are working on the Project
        </p>
      </div>
    </div>
  );
};

export default Preloader;
