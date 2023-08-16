import React from "react";
import { useState } from "react";
import { Fragment } from "react";
import Switch from "./Switch";
const Bigsearchbar = () => {
  const [enabled, setEnabled] = useState(false);
  return (
    <div className="w-[700px] h-[65px] flex items-center rounded-lg border justify-between border-gray-400 px-4">
      <div className="flex items-center gap-5 ml-3 ">
        <p className="font-semibold">Display total price</p>
        <div className="w-[1px] h-5 bg-gray-500"></div>
        <p className="text-[15px] text-gray-500">Includes all fees, before taxes</p>
      </div>

      <div className="ml-5">
        <Switch />
      </div>
    </div>
  );
};

export default Bigsearchbar;
