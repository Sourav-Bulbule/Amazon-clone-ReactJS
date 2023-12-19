import { useSelector,useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { ProductDetails } from './';
import { GB_CURRENCY } from '../utils/constants';
import { removeFromCart,incrementInCart, decrementInCart } from '../redux/cartSlice';

const Checkout = () => {

  const products = useSelector((state)=>state.cart.products);
  const itemsNumber = useSelector((state)=> state.cart.productsNumber);
  const subtotal = useSelector((state)=>state.cart.products.reduce((subtotal,product)=> subtotal+ (product.price * product.quantity),0));

  const dispatch = useDispatch();

  return (
    <div className=" h-screen  bg-amazonclon-background">
      <div className="min-w-[500px] max-w-[1000px] m-auto pt-8 ">
          <div className="grid grid-cols-8 gap-5">
              {/* Products */}
              <div className="col-span-6 bg-white rounded">
                  <div className="text-2xl xl:text-3xl m-2">Shopping Cart</div>
                  {
                    products.map(product=>{
                      return(
                        <div key={product.id}>
                          <div className="grid grid-cols-12 divide-y one: Simple One-Pan Wondersby Jamie OliverPaperbackAmazon's ChoiceDelete-1+%C2%A313.00divide-gray-400  mr-4">
                              <div className="col-span-10 grid grid-cols-8 h-[250px] pl-4 divide-y divide-gray-400 ">
                                  <div className="col-span-2">
                                    <Link to={`/product/${product.id}`}>
                                        <img className=" m-3 " src={product.image_small} a/>
                                    </Link>
                                  </div>
                                  <div className="col-span-6 ml-7 pt-2">
                                      <div className=" font-medium text-black  ">
                                      <Link to={`/product/${product.id}`}>
                                        <ProductDetails product={product} ratings={false}/>
                                    </Link>
                                      </div>
                                      <div>
                                        <button className="text-sm xl:text-base font-semibold rounded text-red-500 mt-2 mb-2" onClick={()=> dispatch(removeFromCart(product.id))}>Delete</button>
                                      </div>
                                      <div className="grid grid-cols-3 w-20 text-center">
                                        <div onClick={()=>dispatch(decrementInCart(product.id))} className="text-xl xl:2xl bg-gray-300 cursor-pointer hover:bg-gray-400">-</div>
                                        <div className="text-lg xl:xl bg-gray-200">{product.quantity}</div>
                                        <div onClick={()=>dispatch(incrementInCart(product.id))} className="text-xl xl:2xl bg-gray-300 cursor-pointer hover:bg-gray-400">+</div>
                                      </div>
                                  </div>
                                  
                              </div>
                              <div className="col-span-2 ">
                                  <div className="text-lg xl:text-xl mt-2 ml-8 font-semibold">
                                    {GB_CURRENCY.format(product.price)}
                                  </div>
                              </div>
                          </div>
                        </div>
                      )
                    })
                  }
                  <div className="text-lg xl:text-xl text-right mb-4 mr-2"> Subtotal ({itemsNumber} items) :  <span className="font-semibold">{GB_CURRENCY.format(subtotal
                    )}</span></div>
              </div>
              {/* Checkout */}
              <div className="col-span-2 bg-white rounded h-auto p-2 ">
                    <div className="text-xs xl:text-sm text-green-700 mb-2">
                      Your order qualifies for <span className="font-bold">FREE DELIVERY</span>. Deliver Details
                    </div>
                    <div className="text-base xl:text-lg  mb-4 "> Subtotal ({itemsNumber} items) :  <span className="font-semibold">{GB_CURRENCY.format(subtotal
                    )}</span></div>
                    <button className="btn">Procced to Checkout</button>
              </div>
          </div>

      </div>
    </div>
  )
}

export default Checkout