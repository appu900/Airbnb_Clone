import React from "react";
import Modals from "./Modals";
import { useState } from "react";

const Offers = () => {
  const[showModal,setModal] = useState(false);  
  const handleClose = ()=>{
    setModal(false)
  }
  return (
    <div className="w-full ">
      <div className="mt-5 text-xl font-semibold text-left">
        <h1>What this place offers</h1>
      </div>

      <div className="flex items-center gap-44 mt-7">
        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <img src="/images/slider/s1.jpg" alt="" className="h-[27px]" />
            <p>Garden View</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s2.jpg" alt="" className="h-[27px]" />
            <p>Waterfront</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s3.jpg" alt="" className="h-[27px]" />
            <p>Dedicated workspace</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s4.jpg" alt="" className="h-[27px]" />
            <p>Private Pool</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s5.jpg" alt="" className="h-[27px]" />
            <p>Temple</p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <div className="flex items-center gap-4">
            <img src="/images/slider/s6.jpg" alt="" className="h-[27px]" />
            <p>Night View</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s7.jpg" alt="" className="h-[27px]" />
            <p>Outdoor View View</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s8.jpg" alt="" className="h-[27px]" />
            <p>Flexible Room</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s9.jpg" alt="" className="h-[27px]" />
            <p>Garden View</p>
          </div>

          <div className="flex items-center gap-4">
            <img src="/images/slider/s10.jpg" alt="" className="h-[27px]" />
            <p>Outdoor breakfast</p>
          </div>
        </div>
      </div>

      <div className="mt-9 mr-2 hover:bg-gray-100  w-[280px] px-4 py-3 rounded-lg text-center cursor-pointer border border-gray-800" onClick={()=>setModal(true)}>
        <p className="font-semibold">Show all 42 amienities</p>
      </div>
      <Modals onClose={handleClose} visible={showModal} />
    </div>
  );
};

export default Offers;
