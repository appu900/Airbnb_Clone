import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const Photopage = () => {
  const place = useSelector((state) => state.redirect);
  const item = place[place.length - 1];
  const navigate = useNavigate();
  return (
    <div>
        <LoadingBar
        color='#f11946'
        progress={100}
        loaderSpeed={500}
        
      />
      <div className="flex justify-between py-4 text-[17px]">
        <span className="ml-10 cursor-pointer" onClick={()=>navigate('/reserve')}>
          <ion-icon name="chevron-back-outline"></ion-icon>
        </span>
        <div className="flex items-center gap-5 mr-10">
          <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
            <span>
              <ion-icon name="share-outline"></ion-icon>
            </span>
            <p className="mb-1 underline">share</p>
          </div>
          <div className="flex items-center gap-1 p-1 hover:bg-gray-100 cursor-pointer hover:rounded-md">
            <span>
              <ion-icon name="heart-outline"></ion-icon>
            </span>
            <p className="mb-1 underline">save</p>
          </div>
        </div>
      </div>

      <div className="max-w-4xl mx-auto border">
        <div className="w-full h-full grid grid-flow-row-dense grid-cols-2 gap-4">
          <img src={item.img1} alt="" />
          <img src={item.img2} alt="" />
          <img src={item.img2} alt="" />
          <img src={item.img4} alt="" />
          <img src={item.img5} alt="" />
          <img src={item.img6} alt="" />
          <img src={item.img7} alt="" />
          <img src={item.img8} alt="" />
          <img src={item.img9} alt="" />
          <img src={item.img10} alt="" />
          <img src={item.img1} alt="" />

        </div>
      </div>
    </div>
  );
};

export default Photopage;
