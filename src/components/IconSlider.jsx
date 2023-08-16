import React from "react";
import iconsdata from "../Data/icondata";

const IconSlider = () => {
  return (
    <div className="flex items-center justify-between gap-2 bg-white">
      <div className="flex gap-10 items-center overflow-scroll scrollbar-hide w-[90%] ">
        <div className="flex flex-col gap-1 items-center text-black">
          <img src="images/slider/s6.jpg" alt="" className="w-[27px] " />
          <p className="text-[14px] font-semibold">Night</p>
          <div className="w-12 h-[2px] bg-black "></div>
        </div>

        {iconsdata.map((item) => (
          <div className="flex flex-col gap-1 items-center text-black opacity-70 cursor-pointer hover:shadow-lg p-2 hover:opacity-90">
            <img src={item.img} alt="" className="w-[24px] " />
            <p className="text-[14px] font-semibold">{item.title}</p>
          </div>
        ))}
      </div>
      <div className="border border-gray-400 h-12 flex gap-2 items-center w-28 justify-center rounded-2xl">
        <span className=" text-xl">
        <ion-icon name="options-outline"></ion-icon>
        </span>
        <p className="font-semibold text-sm mb-1">Filters</p>
      </div>
    </div>
  );
};

export default IconSlider;
