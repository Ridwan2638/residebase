import React from "react";

const SideBarFilter = () => {
  return (
    // this component will filter property base on the user checkboxes that are checked, for desktop display only
    <form className="hidden desktop:flex desktop:flex-col desktop:w-[12%] bg-white ml-4 p-5 text-[#737688] font-inter">
      <fieldset className="border-none mb-4">
        <legend className="font-bold mb-1">PROPERTY TYPE</legend>
        <div>
          <label htmlFor="duplex">
            <input type="checkbox" id="duplex" /> Duplex
          </label>
        </div>
        <div>
          <label htmlFor="condo">
            <input type="checkbox" id="condo" /> Condo
          </label>
        </div>
        <div>
          <label><input type="checkbox" /> Apartment</label>
        </div>
      </fieldset>

      <fieldset className="border-none mb-4">
        <legend className="font-bold mb-1">Price Range</legend>
        <div>
          <label><input type="checkbox" id="price-range1" /> #0 - #500K</label>
        </div>
        <div>
          <label><input type="checkbox" id="price-range2" /> #500K - #2M</label>
        </div>
        <div>
          <label><input type="checkbox" id="price-range3" /> #2M - #10M</label>
        </div>
        <div>
          <label><input type="checkbox" id="price-range4" />#10M - Above</label>
          
        </div>
      </fieldset>

      <fieldset className="border-none mb-4">
        <legend className="font-bold mb-1">Distance</legend>
        <div>
          <label>
            <input type="checkbox" id="distance-range1" /> 0 - 10km
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" id="distance-range2" /> 10km - 50km
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" id="distance-range3" /> 50km - 100km
          </label>
        </div>
        <div>
          <label>
            <input type="checkbox" id="distance-range4" /> 100km - More
          </label>
        </div>
      </fieldset>
      <fieldset className="border-none  mb-4">
        <legend className="font-bold mb-1">Bedrooms</legend>
        <div className="flex gap-1 mt-2 text-xs">
          <p className="checkbox" >1</p>
          <p className="checkbox">2</p>
          <p className="checkbox">3</p>
          <p className="checkbox">4</p>
          <p className="flex outline items-center justify-center rounded h-4 px-1 ">More</p>
        </div>
      </fieldset>
      <fieldset className="border-none mb-10">
        <label className="font-bold mb-1">
          <input type="checkbox" id="favourites" /> Favourites</label>
      </fieldset>

      <button className="bg-[#003366] text-[#FFFFFF] px-6 py-2 rounded">
        Use Filter
      </button>
    </form>
  );
};

export default SideBarFilter;
