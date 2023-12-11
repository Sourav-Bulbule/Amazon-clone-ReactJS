import { ShoppingCartIcon } from "@heroicons/react/24/outline";
import { Search } from './';

const NavBar = () => {
  return (
    <header className="min-w-[500px]">
      <div className="flex bg-amazonclon text-white h-[50px]">
          {/* {left} */}
          <div className="flex items-center m-2">
              <img className="h-[35px] w-[110px] m-2" src={"../images/amazon.png"}  />
              <div className="pr-2 pl-2">
                <div className="text-xs xl:text-sm">Deliver to</div>
                <div className="text-sm xl:text-base font-bold">United Kingdom</div>
              </div>
          </div>
        {/* {middle} */}
        <div className="flex grow relative items-center">
          <Search/>
        </div>
        {/* {right} */}
        <div className="flex items-center m-2">
              <div className="pr-2 pl-2">
                <div className="text-xs xl:text-sm">Hello, sign in</div>
                <div className="text-sm xl:text-base font-bold">Accounts & Lists</div>
              </div>
              <div className="pr-2 pl-2">
                <div className="text-xs xl:text-sm">Returns</div>
                <div className="text-sm xl:text-base font-bold">& Orders</div>
              </div>
              <div className="flex pr-2 pl-2">
              <ShoppingCartIcon className="h-[40px]"/>
              <div className="mt-6 text-xs xl:text-sm font-bold" >Cart</div>
              </div>
        </div>
      </div>
      <div className="flex bg-amazonclon-light_blue text-white space-x-3 text-xs xl:test-sm p-2 pl-6">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Gift Cards</div>
        <div>Sell</div>
      </div>
    </header>
  )
}

export default NavBar