import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Workspace from "./Workspace";
import Line from "./Line";
import RoomSlider from "./RoomSlider";
import Offers from "./Offers";
import DateCard from "./DateCard";
import Calander from "./Calander";
import {BsFillKeyboardFill} from 'react-icons/bs'

const MiddleSection = () => {
  const select = useSelector((state) => state.redirect);
  const item = select[select.length - 1];
  console.log(item);
  return (
    <div className="w-full flex ">
      {/* scroll section */}
      <div className="w-[60%] h-auto pr-24 pl-2 pt-10    scrollbar-hide">
        {/* heading section */}
        <div className="">
          <Header />
          <div className="w-full h-[1px] bg-gray-300 mt-7"></div>
        </div>

        {/* work space section */}

        <div className="mt-9">
          <Workspace />
          <div className="w-full border-b border-gray-300 h-[1px] mt-9"></div>
        </div>

        {/* aircover section */}

        <div className="mt-7 flex flex-col gap-3 text-left">
          <img src="/images/aircover.jpg" alt="" className="w-[120px]" />
          <p>
            Every booking includes free protection from Host cancellations,
            listing inaccuracies, and other issues like trouble checking in.
          </p>
          <p className=" text-[17px] font-semibold underline">Learn more</p>
        </div>
        <div className="mt-9">
          <Line />
        </div>
        {/* aircover second section */}
        <div className="mt-7 flex flex-col gap-5 text-left">
          <p>
            Jannat blends the most luxurious backdrop of your fantasy with
            nature’s incredible marvels to create a tranquil utopia that caters
            to your comfort where Breakfast is complimentary! This 3Bed pool
            villa in Nashik is a hidden paradise waiting to dazzle you with its
            tranquil charm.
          </p>
          <p className=" text-[17px] font-semibold underline">Learn more</p>
        </div>

        {/* RoomSlider section */}
        <div className="mt-5 ">
          <RoomSlider />
        </div>

        <div className="mt-9">
          <Line />
        </div>

        {/* what this place offers section */}

        <div className="mt-9">
          <Offers />
        </div>

        <div className="mt-10">
          <Line />
        </div>

        {/* calendar section */}
        <div className="mt-9">
          <div className="text-left font-semibold text-[22px] ml-6">
            <p>Select check-in date</p>
            <p className="font-normal text-[14px]">Add your travel dates for exact pricing</p>
          </div>
          <div className="mt-7">
            <Calander />
          </div>
          <div className="flex justify-between px-7 mt-2">
              <span className="mt-1"><BsFillKeyboardFill className="text-xl"/></span>
              <p className="underline font-bold">Clear</p>
          </div>
        </div>
      </div>

      {/* sticky section */}
      <div className="w-[40%] h-[600px] mt-10 sticky top-40 pl-14   ">
        {/* <div className=" w-full h-full  pr-20"> */}
        <DateCard />
        {/* </div> */}
        <div className="w-[440px] h-[100px] border border-gray-400 mt-3 shadow-md rounded-lg flex gap-4 px-4 py-4 text-left">
          <p className="text-black font-semibold text-[17px]">
            Lower Price
            <span className="text-gray-600 font-normal">
              {" "}
              Your dates are ₹20475 less than the avg. nightly rate of the last
              60 days.
            </span>
          </p>
          <span className="text-3xl text-pink-600 mb-10">
            <ion-icon name="clipboard"></ion-icon>
          </span>
        </div>
      </div>
    </div>
  );
};

export default MiddleSection;
