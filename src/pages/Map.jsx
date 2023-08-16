import React from "react";
import MainNav from "../components/MainNav";
import Navbar from "../components/Navbar";
import Maps from "../components/Maps";
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const Map = () => {
  const navigate = useNavigate();

  return (
    <div className="">
         <LoadingBar
        color='#f11946'
        progress={100}
        loaderSpeed={500}
        
      />
      <Navbar />
      <div className="w-full h-auto border relative">
        <Maps />
        <div
          className=" bottom-16 left-[46%] sticky z-10  flex items-center justify-center gap-2 h-[48px] rounded-full
        cursor-pointer hover:scale-105 active:scale-95 shadow-lg
        w-[140px] bg-[#20262E] text-white"
          onClick={() => navigate("/")}
        >
          <p className="text-[14px] font-semibold">Show list</p>
          <span className="mt-1">
          <ion-icon name="reorder-four"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Map;
