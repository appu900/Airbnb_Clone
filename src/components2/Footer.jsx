import React from "react";

const Footer = () => {
  return (
    <div className="w-full h-[300px] border border-gray-200 bg-[#f7f7f7] grid grid-cols-4 px-20 py-8 text-sm">
      {/* grid-1 */}
      <div className=" flex justify-evenly   ">
        <div className="text-left">
          <h1 className="font-semibold text-left">Support</h1>
          <div className="flex flex-col gap-2 mt-5 text-left">
            <p>Help Centre</p>
            <p>AirCover</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Report a neighbourhood concern</p>
          </div>
        </div>
      </div>
      {/* grid-2 */}
      <div className=" flex justify-evenly   ">
        <div className="text-left">
          <h1 className="font-semibold text-left">Community</h1>
          <div className="flex flex-col gap-2 mt-5 text-left">
            <p>Airbnb.org: disaster relief housing</p>
            <p>Combating discrimination</p>
          </div>
        </div>
      </div>
      
      {/* grid-3 */}
      <div className=" flex justify-evenly   ">
        <div className="text-left">
          <h1 className="font-semibold text-left">Hosting</h1>
          <div className="flex flex-col gap-2 mt-5 text-left">
            <p>Airbnb is your home</p>
            <p>AirCover for Hosts</p>
            <p>Supporting people with disabilities</p>
            <p>Explore hosting resources</p>
            <p>Visit our community forum</p>
            <p>How to host responsibly</p>
          </div>
        </div>
      </div>
      {/* grid-4 */}
      <div className=" flex justify-evenly   ">
        <div className="text-left">
          <h1 className="font-semibold text-left">Airbnb</h1>
          <div className="flex flex-col gap-2 mt-5 text-left">
            <p>Help Centre</p>
            <p>AirCover</p>
            <p>Supporting people with disabilities</p>
            <p>Cancellation options</p>
            <p>Our COVID-19 Response</p>
            <p>Report a neighbourhood concern</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
