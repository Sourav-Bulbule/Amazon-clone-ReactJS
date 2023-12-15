import React, { useState } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { callApi } from '../utils/CallApi'
import ProductDetails from './ProductDetails';
import { GB_CURRENCY } from '../utils/constants';

const SearchResults = () => {

  const [searchParams] = useSearchParams();

  const [products, setProducts]=useState(null);

  const getSearchResults = () => {  
    const searchTerms = searchParams.get("searchTerm");
    const category = searchParams.get("category");

    callApi(`data/search.json`).then((searchResult)=>{
      const categoryResults = searchResult[category];
      if(searchTerms){
        const results = categoryResults.filter(product => product.title.toLowerCase().includes(searchTerms.toLowerCase()));
        setProducts(results);
      }else{
        setProducts(categoryResults);
      }
    })
  };

  useEffect(()=>{
    getSearchResults();
  },[searchParams])

  return (
    <div className="min-w-[800px] max-w-[1000px] m-auto">
      { products && products.map((product, key)=>{
        return(
          <Link key={key} to={`/product/${product.id}`}>
            <div className="h-[200px] grid grid-cols-12 mt-2 mb-2 ml-2">
              <div className="col-span-2 p-4 bg-gray-200 ">
                  <img className="m-auto" src={product.image_small} />
              </div>
              <div className="col-span-10 border bg-gray-50 hover:bg-slate-100">
                <div className="font-medium text-black p-2">
                  <ProductDetails product={product} ratings={true}/>
                  <div className="text-xl xl:text-2xl pt-1">{GB_CURRENCY.format(product.price)}</div>
                </div>
              </div>
            </div>
          </Link>
        )
      })

      }
    </div>
  )
}

export default SearchResults