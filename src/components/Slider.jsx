import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';

import "swiper/css";
import "swiper/css/navigation";


const Slider = () => {
  return (
    <div className="h-[400px] bg-white">
    <Swiper
          loop={true}
          spaceBetween={0}
          navigation = {true}
          modules={[Navigation, Autoplay]}
          autoplay={{
            delay: 4500
          }}
          className="h-[50%]"
    >
        <SwiperSlide>
          <img src="../images/carousel_1.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_2.jpg" />
        </SwiperSlide>
        <SwiperSlide className="bg-black">
          <video controls muted="muted" src={"../images/carousel_vid.mp4"} type="video/mp4">

          </video>
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_4.jpg" />
        </SwiperSlide>
        <SwiperSlide>
          <img src="../images/carousel_5.jpg" />
        </SwiperSlide>
    </Swiper>
    <div className="h-[70%] bg-gradient-to-b from-black"/>
    </div>
  )
}

export default Slider