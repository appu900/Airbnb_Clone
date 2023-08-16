import React from "react";
import { useState } from "react";

const Switch = () => {
  const [toggle, settoggle] = useState(true);
  const toggleClass =
    "transform translate-x-5 transition duration-300 ease-in-out bg-black ";
  const bgclass = "bg-black";
  return (
    <div
      className={
        "w-12 h-8 flex items-center bg-gray-400 rounded-full cursor-pointer"
      }
      onClick={() => settoggle(!toggle)}
    >
      {/* inner circle */}
      <div
        className={
          "bg-white w-7 h-7 rounded-full shadow-md transform ml-[2px] " +
          (toggle ? null : toggleClass)
        }
      ></div>
    </div>
  );
};

export default Switch;
