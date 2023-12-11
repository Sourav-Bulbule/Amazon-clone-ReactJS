import React from 'react';
import {HomePageCard, Slider, SliderCategory, SliderProduct} from './';

const HomePage = () => {
  return (
    <div className="bg-amazonclon-background">
      <div className="min-w-[500px] max-w-[1000px] m-auto">
        
        <Slider/>
        <div className="grid grid-cols-3 xl:grid-cols-4 -mt-[200px]">
            <HomePageCard title={"We have a suprise for you"}
            img={"../images/home_grid_1.jpg"}
            link={"See terms and conditions"}/>
            <HomePageCard title={"Watch The Rings of Power"}
            img={"../images/home_grid_2.jpg"}
            link={"See terms and conditions"}/>
            <HomePageCard title={"Unlimited Streaming"}
            img={"../images/home_grid_3.jpg"}
            link={"See terms and conditions"}/>
            <HomePageCard title={"More titles to explore"}
            img={"../images/home_grid_4.jpg"}
            link={"See terms and conditions"}/>
            <HomePageCard title={"Shop Pet Supplies"}
            img={"../images/home_grid_5.jpg"}
            link={"See terms and conditions"}/>
            <HomePageCard title={"Spring Sale"}
            img={"../images/home_grid_6.jpg"}
            link={"See terms and conditions"}/>
            <HomePageCard title={"Echo Buds"}
            img={"../images/home_grid_7.jpg"}
            link={"See terms and conditions"}/>
            <HomePageCard title={"Family Plan: 3 months free"}
            img={"../images/home_grid_8.jpg"}
            link={"See terms and conditions"}/>
            <div className="m-3 pt-4">
              <img className="xl:hidden" src="../images/banner_image_2.jpg" />
            </div>
        </div>
        <SliderProduct />
        <SliderCategory />
        <div className="h-[300px]">
          <img className="h-[84.4%] m-auto mt-3"
          src={"../images/banner_image.jpg"} />
        </div>
      </div>
    </div>
  )
}

export default HomePage