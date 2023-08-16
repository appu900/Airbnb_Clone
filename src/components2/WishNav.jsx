import React from "react";
import { useNavigate } from "react-router-dom";
import Dropdown from "../components/Dropdown";

const WishNav = () => {
  const navigate = useNavigate();
  return (
    <div className=" w-full  px-28 py-4 border  bg-white flex  justify-between  items-center shadow-sm ">
      {/* logo section */}
      <div className="cursor-pointer">
        <img
          src="/images/logo.png"
          alt=""
          className="w-[100px]"
          onClick={() => navigate("/")}
        />
      </div>

      {/*  third section*/}

      <div className="mb-1 flex items-center space-x-7">
        {/* sub part 1 */}
        <div className=" flex items-center space-x-7 text-gray-800">
          <p className="text-gray-800 font-semibold tracking-tight">
            Airbnb your home
          </p>
          <span className="text-xl mt-1">
            <ion-icon name="globe-outline"></ion-icon>
          </span>
        </div>

        {/* account section */}
        <div className="flex justify-center items-center border border-gray-300 w-20 h-10 gap-3 rounded-full hover:shadow-lg cursor-pointer">
          <span className="text-xl font-bold">
            <ion-icon name="menu-outline"></ion-icon>
          </span>

          {/* start here */}

          <Dropdown />

          {/* end here */}
        </div>
      </div>
    </div>
  );
};

export default WishNav;
