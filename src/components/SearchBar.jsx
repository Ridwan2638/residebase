import React from 'react'
import searchIcon from '../assets/search.svg'
import filter from '../assets/filter.svg'

const SearchBar = () => {
  return (
    <div className='flex justify-between' >
      <div className='flex bg-[#F4F5F6] items-center desktop:bg-[#FFFFFF]  desktop:w-sm p-2 rounded-xl gap-2 border border-[#F5F4F4]'>
        <img src={searchIcon} alt="icon"className='hidden desktop:block size-5' />
        <input type="text" placeholder='Search by apartment or location' className='outline-none w-full ' />
        </div>
        <div className='flex bg-[#F4F5F6] items-center desktop:bg-[#FFFFFF]  desktop:w-sm p-2 rounded-xl gap-2 border border-[#F5F4F4]'>
        <img src={filter} alt="filter" className='size-5' />
        <p>Filters</p>
        </div>
    </div>
  )
}

export default SearchBar