import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { Link } from 'react-router-dom'

import "swiper/css";
import "swiper/css/navigation";

const SliderProduct = () => {
  return (
    <div className="bg-white m-2 p-2 ">
      <div className=" text-[18px] font-semibold ">Best Seller</div>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation = {true}
        modules={[Navigation]}
        >

            {Array.from({length:9},(_, i)=>
              <SwiperSlide key={i}>
                  <Link to={`/product/${i}`}>
                  <img src={`../images/product_${i}_small.jpg`} />
                  </Link>
              </SwiperSlide>
              )
            }
        
        </Swiper>
  </div>
  )
}

export default SliderProduct