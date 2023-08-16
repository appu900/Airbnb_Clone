import React from "react";
import { useSelector } from "react-redux";
import Line from "../components/Line";

const FinalPriceCard = () => {
  const data = useSelector((state) => state.redirect);
  const item = data[data.length - 1];
  const MainPrice = item.price;
  const NumericPrice = Number(MainPrice);
  return (
    <div className="w-[480px] h-[570px] p-5 border border-gray-300 shadow-lg rounded-lg">
      <div className="flex text-left items-center justify-between mt-6 ">
        <div className="">
          <img src={item.img1} alt="" className="w-[120px] h-[90px] rounded-lg" />
        </div>
        <div>
          <p className="text-xs">Entire home</p>
          <p className="text-[15px]">{item.hotel}</p>
          <p className="mt-9 text-sm font-semibold">
            <span className="mt-1">
              <ion-icon name="star"></ion-icon>
            </span>
            {item.rating}{" "}
            <span className="text-xs text-gray-400">(115 reviews)</span>
          </p>
        </div>
      </div>

      <div className="mt-5">
        <Line />
      </div>

      <div className="flex items-center gap-1 mt-6">
        <p>Your booking is protected by</p>
        <span>
          <img src="/images/aircover.jpg" alt="" className="h-[12px]" />
        </span>
      </div>

      <div className="mt-6">
        <Line />
      </div>

      {/* price details */}

      <div>
        <div className="text-[22px] font-semibold text-gray-800 text-left mt-5">
          <p>Price Details</p>
        </div>
        <div className="mt-5 flex justify-between text-[17px] text-gray-700">
          <div>
            <p>${item.price} x 5 nights</p>
          </div>
          <div>
            <p>${NumericPrice * 5}</p>
          </div>
        </div>
        <div className="mt-5 flex justify-between text-[17px] text-gray-700">
          <div>
            <p className="underline">Cleaning fee</p>
          </div>
          <div>
            <p>$2,030.4</p>
          </div>
        </div>
        <div className="mt-5 flex justify-between text-[17px] text-gray-700">
          <div>
            <p className="underline">Airbnb service fee</p>
          </div>
          <div>
            <p>$8,717.41</p>
          </div>
        </div>
      </div>
      <div className="mt-7">
        <Line />
      </div>
      {/* final price */}
      <div className="flex justify-between mt-7">
          <div className="text-xl font-semibold">
            <p>Total (INR)</p>
          </div>
          <div className="text-xl">
            <p>${NumericPrice * 5 + 2030 + 8717}</p>
          </div>
      </div>
    </div>
  );
};

export default FinalPriceCard;
