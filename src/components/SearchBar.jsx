import React from "react";
import searchIcon from "../assets/search.svg";
import filter from "../assets/filter.svg";

const SearchBar = () => {
  return (
    <div className="flex justify-between gap-4 mt-6 desktop:mt-0 desktop:ml-6 w-full">
      <div className="flex grow desktop:grow-0 border desktop:border-none outline-[#F5F4F4] desktop:outline-0  bg-[#F4F5F6] items-center  desktop:w-sm p-2 rounded-xl gap-2">
        <img
          src={searchIcon}
          alt="icon"
          className="hidden desktop:block size-5"
        />
        <input
          type="text"
          id="search"
          placeholder="Search by apartment or location"
          className="outline-none w-full"
        />
      </div>
      <div className="flex border outline-[#F5F4F4] border-solid bg-[#F4F5F6] items-center desktop:hidden p-2 rounded-xl gap-2 ">
        <img src={filter} alt="filter" className="size-5" />
        <p>Filters</p>
      </div>
    </div>
  );
};

export default SearchBar;
