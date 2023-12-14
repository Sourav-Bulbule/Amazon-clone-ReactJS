
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { useState, useEffect } from "react";
import {callApi} from "../utils/CallApi"; 

const Search = () => {

  const [suggestions, setSuggestions] =useState(null);
  const [searchTerm, setSearchTerm] = useState("");

  const getSuggestions = ()=>{
    callApi(`data/suggestions.json`).then((suggestionResults)=>{ setSuggestions(suggestionResults);
    })
  };

  useEffect(()=>{
    getSuggestions();
  },[])

  return (
    <div className="w-[100%] relative">
      <div className="flex items-center h-10 bg-amazonclon-yellow rounded  " >
        <select className="p-2 bg-gray-300 text-black border tect-xs xl:text-sm">
          <option>All</option>
          <option>Deals</option>
          <option>Amazon</option>
          <option>Fasion</option>
          <option>Computers</option>
          <option>Home</option>
          <option>Mobiles</option>
        </select>
        <input className=" text-ellipsis flex items-center h-[100%] grow text-black "  type="text" value={searchTerm}  onChange={(e)=> setSearchTerm(e.target.value)}/>
        <button className="w-[45px] ">
          <MagnifyingGlassIcon className="h-[27px] m-auto stroke-black" />
        </button>
      </div>
     
      { suggestions &&
        <div className=" bg-white text-black w-full z-60 absolute ">
            {
              suggestions.filter((suggestion)=>{
                const currentSearchTerm = searchTerm.toLowerCase();
                const title = suggestion.title.toLowerCase();

                return (
                  currentSearchTerm &&
                  title.startsWith(currentSearchTerm) &&
                  title !== currentSearchTerm
                )
              })
              .slice(0, 10)
              .map((suggestion)=>
                  <div className="pl-2 hover:bg-slate-500 cursor-pointer" key={suggestion.id} onClick={()=>setSearchTerm(suggestion.title)}>
                  {suggestion.title}
                </div>
              )
            }
        </div>
      }
    </div>
  )
}

export default Search