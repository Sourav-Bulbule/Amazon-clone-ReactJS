import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";

const SliderProduct = () => {
  return (
    <div className="bg-white m-2 p-2 -mt-[38px]">
      <div className=" text-[18px] font-semibold ">Best Seller</div>
        <Swiper
        slidesPerView={5}
        spaceBetween={10}
        navigation = {true}
        modules={[Navigation]}
        >

            {Array.from({length:9},(_, i)=>
              <SwiperSlide key={i}>
                  <img src={`../images/product_${i}_small.jpg`} />
              </SwiperSlide>
              )
            }
        
        </Swiper>
  </div>
  )
}

export default SliderProduct