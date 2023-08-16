import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Photogrid = () => {
  const navigate = useNavigate();  
  const place = useSelector((state) => state.redirect);
  const item = place[place.length - 1];
  return (
    <div className="w-full h-[380px] relative">
    <div className="w-full flex h-[380px] ">
      <div className=" h-[380px] w-[45%] ">
        <img
          src={item.img1}
          alt=""
          className="h-full w-full  rounded-l-2xl object-fill hover:brightness-75 cursor-pointer"
        />
      </div>
      <div className="grid grid-cols-2  gap-4  overflow-hidden px-4 hover:brightness-75 cursor-pointer ">
        <img src={item.img5} alt="" className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer " />
        <img src={item.img9} alt="" className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer" />
        <img src={item.img10} alt="" className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer " />
        <img src={item.img3} alt="" className="h-48 w-96 rounded-tr-2xl hover:brightness-75 cursor-pointer"/>
        
      </div>
    </div>
    <div className="absolute z-10 gap-2 border bottom-6 right-16 px-4 py-2 bg-white text-black font-semibold rounded-md cursor-pointer items-center flex"
    onClick={()=>navigate('/photos')}
    >
        <span className="mt-1"><ion-icon name="apps-outline"></ion-icon></span>
         <p>View all Pictures</p>
    </div>
    </div>
  );
};

export default Photogrid;
