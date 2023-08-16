import React from "react";

const Cards = ({ img, location, desc, rating, price,id }) => {
  return (
    <div className="w-[350px] rounded-lg h-auto hover:shadow-lg p-3 cursor-pointer relative mt-3">
      <div className="w-full   relative">
        <img src={img} alt="" className="rounded-lg w-full h-[300px] shadow-lg hover:brightness-95" />
        <div className="absolute  top-3 left-[90%]">
          <span className="text-xl text-gray-800">
            <ion-icon name="heart"></ion-icon>
          </span>
        </div>
      </div>

      {/* second section */}
      <div className="w-full flex items-center justify-between mt-3 font-semibold px-2">
        <p className="text-red-500">{location}</p>
        <div className="flex items-center gap-1">
          <ion-icon name="star"></ion-icon>
          <p>{rating}</p>
        </div>
      </div>
      {/* decriptin section */}
      <div className="text-left px-2 text-gray-500">
        <p>{desc}</p>
      </div>
      {/* price */}
      <div className="text-left px-2 mt-3">
        <p className="font-semibold">${price} <span className="font-normal">night</span></p>
      </div>
    </div>
  );
};

export default Cards;
