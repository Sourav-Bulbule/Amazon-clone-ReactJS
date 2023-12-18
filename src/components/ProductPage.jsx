import React from 'react';
import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { callApi } from '../utils/CallApi';
import {ProductDetails} from './';
import { GB_CURRENCY } from '../utils/constants';
import { addToCart } from '../redux/cartSlice';
import { useDispatch } from 'react-redux';

const ProductPage = () => {
  //useParam helps us get the day vaya Link which was saved in key
  const {id} = useParams();
  const [product, setProduct] = useState(null);

  const dispatch = useDispatch();

  //useing api call to get the data from the backend which in this case is the data saved in the product.json 
  const getProduct = ()=>{
    callApi(`data/products.json`).then((productResult)=>{
      setProduct(productResult[id]);
    })
  }

  //useEffect pre-runs the function while loading the screen for the first time 
  useEffect(()=>{
    getProduct();
  },[])

  // check if the data was fetched from the API as its a asyn call to the data base
  // if(!product?.title) return <h1>Looding Page...</h1>

  //here product && is checking if data is available which when turn true it will load the data into the page
  return (product &&
    <div className="h-screen bg-amazonclon-background">
    <div className="min-w-[500px] max-w-[1000px] m-auto p-4">
      <div className=" grid grid-cols-10 gap-2">
        {/* {left} */}
        <div className="col-span-3 bg-white p-4 rounded ">
          <img src={`${product.image}`} />
        </div>
        {/* {middle} */} 
        <div className="col-span-5 bg-white p-4 divide-y divide-gray-400 rounded">
          <div>
            <ProductDetails product={product} ratings={true} />
          </div>
          <div className="text-base xl:text-lg mt-2">
            {product.description}
          </div>
        </div>
        {/* {right} */}
        <div className="col-span-2 p-4 rounded bg-white">
          <div className="text-xl xl:text-2xl font-semibold text-red-700 text-right">{GB_CURRENCY.format(product.price)}</div>
          <div className="text-base xl:text-lg font-semibold text-gray-500 text-right">RRP: <span className="line-through">{GB_CURRENCY.format(product.oldPrice)}</span></div>
          <div className="text-sm xl:text-base font-semibold text-blue-500 mt-3">FREE Returns</div>
          <div className="text-sm xl:text-base font-semibold text-blue-500 mt-1">FREE Delivery</div>
          <div className="text-base xl:text-lg font-semibold text-green-700 mt-1">In Stock</div>
          <div className="text-base xl:text-lg mt-1">Quantity: 
            <select className="p-1 bg-white rounded-md border focus:border-indigo-600 ">
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>
          <button onClick={()=>dispatch(addToCart())} className="bg-yellow-400 w-full p-3 text-xs xl:text-sm rounded mt-3 hover:bg-yellow-500">Add to Cart</button>
        </div>
      </div>
    </div>
    </div>
  )
}

export default ProductPage