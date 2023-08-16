import React from "react";
import Line from "./Line";

const Modals = ({ visible, onClose }) => {
  const handleOnclose = (e) => {
    if (e.target.id === "container") {
      onClose();
    }
  };
  if (!visible) return null;
  return (
    <div 
      id="container"
      className="fixed transition duration-500 inset-0 z-50 h-[100vh] w-full bg-black bg-opacity-30   flex justify-center items-center "
      onClick={handleOnclose}
    >
      <div className="modal w-[800px] h-[700px]  bg-white rounded-lg border">
        <div className="text-left pl-5 mt-3">
          <button onClick={onClose}>X</button>
        </div>
        <div className="w-full h-full overflow-y-scroll">
        <div className="mt-9 pl-5 text-left text-[22px]  font-semibold  ">
          <p>Whats this place Offers</p>
        </div>

        <h1 className="text-left pl-5 mt-5 font-semibold text-[18px]">
          Scenic views
        </h1>

        <div className="flex flex-col pl-4 pr-10 mt-7">
          <div className="flex items-center gap-5">
            <img src="/images/slider/s1.jpg" alt="" className="h-[30px]" />
            <p>Garden View</p>
          </div>

          <div className="mt-5">
            <Line />
          </div>

          <div className="flex items-center gap-5 mt-5">
            <img src="/images/slider/s4.jpg" alt="" className="h-[30px]" />
            <p>Garden View</p>
          </div>

          <div className="mt-5">
            <Line />
          </div>

          <div className="flex items-center gap-5 mt-5">
            <img src="/images/slider/s2.jpg" alt="" className="h-[30px]" />
            <p>Garden View</p>
          </div>

          <div className="mt-5">
            <Line />
          </div>

          <div className="flex items-center gap-5 mt-5">
            <img src="/images/slider/s6.jpg" alt="" className="h-[30px]" />
            <p>Garden View</p>
          </div>

          <div className="mt-5">
            <Line />
          </div>

          <div className="flex items-center gap-5 mt-5">
            <img src="/images/slider/s7.jpg" alt="" className="h-[30px]" />
            <p>Garden View</p>
          </div>
          </div>



        </div>
      </div>
    </div>
  );
};

export default Modals;
