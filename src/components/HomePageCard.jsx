import React from 'react'

const HomePageCard = ({title, img, link}) => {
  return (
    <div className="h-[220px] bg-white z-30 m-2">
      <div className="text-sm xl:text-lg font-semibold ml-2 mt-2 ">
        {title}
        </div>
      <div className="h-[150px] m-2">
        <img className="h-[100%] w-[100%] object-cover"  src={img} />
      </div>
      <div className="text-xs xl:text-sm text-blue-400 ml-2">
        {title}
      </div>
    </div>
  )
}

export default HomePageCard