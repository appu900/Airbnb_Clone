import React from "react";

const RoomSlider = () => {
  return (
    <div className="w-full ">
      <div className=" flex justify-between items-center">
        <p className="text-[22px] font-semibold">Where you'll sleep</p>
        <span className="mr-5 cursor-pointer border px-4 py-3 text-center mt-1 bg-white shadow-lg rounded-full">
          <ion-icon name="chevron-forward-outline"></ion-icon>
        </span>
      </div>

      <div className="w-full flex gap-4 overflow-x-scroll scrollbar-hide mt-6">
        

        
          <img
            src="/images/room1.jpg"
            alt=""
            className="h-[200px] rounded-lg"
          />
           <img
            src="/images/room2.jpg"
            alt=""
            className="h-[200px] rounded-lg"
          />
           <img
            src="/images/room3.jpg"
            alt=""
            className="h-[200px] rounded-lg"
          />
           <img
            src="/images/room4.jpg"
            alt=""
            className="h-[200px] rounded-lg"
          />
       
        
       
      </div>
    </div>
  );
};

export default RoomSlider;
