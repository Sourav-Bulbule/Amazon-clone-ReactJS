import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation} from 'swiper/modules';
import { useNavigate, createSearchParams } from 'react-router-dom';

import "swiper/css";
import "swiper/css/navigation";

const SliderCategory = () => {

  const navigate = useNavigate();
  const searchCategory = (category)=>{
    navigate({
      pathname: "search",
      search: `${
        createSearchParams({
          category: `${category}`,
          searchTerm: ``
        })
      }`
    })

  }

  return (
    <div className="bg-white m-2 p-2">
      <div className="text-[18px] font-semibold">Shop by Category</div>
      <Swiper
            slidesPerView={5}
            spaceBetween={10}
            navigation = {true}
            modules={[Navigation]}
      >
          <SwiperSlide onClick={()=>searchCategory("Deals")}>
            <img className="hover:cursor-pointer" src={"../images/category_0.jpg"}  />
          </SwiperSlide>
          <SwiperSlide onClick={()=>searchCategory("Amazon")}>
            <img className="hover:cursor-pointer" src={"../images/category_1.jpg"}  />
          </SwiperSlide>
          <SwiperSlide onClick={()=>searchCategory("Fashion")}>
            <img className="hover:cursor-pointer" src={"../images/category_2.jpg"}  />
          </SwiperSlide>
          <SwiperSlide onClick={()=>searchCategory("Computers")}>
            <img className="hover:cursor-pointer" src={"../images/category_3.jpg"}  />
          </SwiperSlide>
          <SwiperSlide onClick={()=>searchCategory("Home")}>
            <img className="hover:cursor-pointer" src={"../images/category_4.jpg"}  />
          </SwiperSlide>
          <SwiperSlide onClick={()=>searchCategory("Mobiles")}>
            <img className="hover:cursor-pointer" src={"../images/category_5.jpg"}  />
          </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default SliderCategory