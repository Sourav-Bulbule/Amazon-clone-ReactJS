import React from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/outline'

const Search = () => {
  return (
    <div className="w-[100%]">
      <div className="flex items-center h-10 bg-amazonclon-yellow rounded">
        <select className="p-[7px] bg-gray-300 text-black border tect-xs xl:text-sm">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fasion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input className=" flex grow items-center h-[100%] text-black "  type="text" />
        <button className="w-[45px]">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-black" />
        </button>
      </div>
    </div>
  )
}

export default Search