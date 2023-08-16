import React from "react";

const Workspace = () => {
  return (
    <div className="w-full flex flex-col gap-4">

      <div className="flex items-center gap-3">
        <span className="text-2xl mb-2"><ion-icon name="file-tray-full"></ion-icon></span>
        <div className="text-left">
          <p className=" mt-1 text-[17px] font-semibold">Dedicated workspace</p>
          <p className="text-[15px] text-gray-500">A common area with wifi that’s well suited for working.</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl mb-2"><ion-icon name="business-outline"></ion-icon></span>
        <div className="text-left">
          <p className=" mt-1 text-[17px] font-semibold">Self check-in</p>
          <p className="text-[15px] text-gray-500">You can check in with the doorperson.</p>
        </div>
      </div>

      <div className="flex items-center gap-3">
        <span className="text-2xl  mb-2"><ion-icon name="location-outline"></ion-icon></span>
        <div className="text-left">
          <p className=" mt-1 text-[17px] font-semibold">Great location</p>
          <p className="text-[15px] text-gray-500">100% of recent guests gave the location a 5-star rating.</p>
        </div>
      </div>

    </div>
  );
};

export default Workspace;
