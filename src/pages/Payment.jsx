import React from "react";
import LoadingBar from "react-top-loading-bar";
import WishNav from "../components2/WishNav";
import { useNavigate } from "react-router-dom";
import Line from "../components/Line";
import SelectMenu from "../components2/SelectMenu";
import Requiredinfo from "../components2/Requiredinfo";
import FinalPriceCard from "../components2/FinalPriceCard";

const Payment = () => {
  const navigate = useNavigate();
  return (
    <div>
      <LoadingBar color="#f11946" progress={100} loaderSpeed={500} />
      <div className="px-8 py-6 border-b">
        <img
          src="images/logo.png"
          alt=""
          className="w-[100px] cursor-pointer"
          onClick={() => navigate("/")}
        />
      </div>

      <div className="flex items-center gap-2 w-full px-28  mt-14">
        <span
          className="text-xl mt-3 hover:bg-gray-100  px-3 py-2 rounded-full hover:shadow-md cursor-pointer"
          onClick={() => navigate("/reserve")}
        >
          <ion-icon name="chevron-back"></ion-icon>
        </span>
        <p className="text-[34px] font-semibold">Request to book </p>
      </div>

      {/* main content */}
      <div className=" px-40 mt-9  flex">
        <div className=" w-[60%]   h-auto pr-32">
          {/* first card */}

          <div className="w-full h-[100px] border border-gray-700 justify-between rounded-lg flex items-center px-4">
            <div className="text-left">
              <p className="font-semibold">This is a rare find</p>
              <p className="text-gray-600">
                Rachel & Stu's place is usually booked.
              </p>
            </div>
            <div>
              <span className="text-3xl mb-2 text-red-600">
                <ion-icon name="diamond-outline"></ion-icon>
              </span>
            </div>
          </div>

          {/* card-end */}

          {/* trip section start */}

          <div className="w-full mt-7 ">
            <h1 className="text-xl font-semibold text-left">Your trip</h1>
            <div className=" mt-6 flex flex-col gap-6">
              <div className="flex justify-between items-center">
                <div className="flex flex-col text-left">
                  <p className="font-semibold">Dates</p>
                  <p className="text-gray-500">22-4 april</p>
                </div>
                <div>
                  <p className="font-semibold underline">Edit</p>
                </div>
              </div>
              {/* date 2 */}

              <div className="flex justify-between items-center">
                <div className="flex flex-col text-left">
                  <p className="font-semibold">Dates</p>
                  <p className="text-gray-500">22-4 april</p>
                </div>
                <div>
                  <p className="font-semibold underline">Edit</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-7">
            <Line />
          </div>

          {/* payment method section */}

          <div className="mt-7 flex item-center justify-between">
            <div className="text-left">
              <p className="font-semibold text-[23px]">Pay With</p>
            </div>
            <div className="flex gap-2 text-xl">
              <span className="text-blue-500">
                <ion-icon name="logo-paypal"></ion-icon>
              </span>
              <span className="text-green-600">
                <ion-icon name="logo-mastodon"></ion-icon>
              </span>
              <span className="text-orange-700">
                <ion-icon name="logo-alipay"></ion-icon>
              </span>
            </div>
          </div>

          {/* form section */}
          <form action="">
            <div className="relative mt-7">
              <div className="flex flex-col gap-2">
                <SelectMenu title="Netbanking" />
                <SelectMenu title="select bank" />
              </div>
            </div>
          </form>

          <div className="mt-7">
            <p className="underline font-semibold text-left">Enter a coupon</p>
          </div>

          <div className="mt-7">
            <Line />
          </div>

          <div className="mt-7">
            <div className="text-left text-xl font-semibold">
              <h1>Required for your trip</h1>
            </div>

            <div className="mt-7">
              <Requiredinfo />
            </div>
          </div>

          <div className="mt-5">
            <Line />
          </div>

          {/* cancelation policy */}

          <div className="mt-7 text-left">
            <p className="font-semibold text-xl text-[22px]">
              Cancellation policy
            </p>
            <p className="font-semibold mt-6">
              Free cancellation for 48 -
              <span className="font-normal text-gray-500">
                .Cancel before 10 Jun for a partial refund
              </span>
              .
            </p>
            <p className="font-semibold underline">Learn more</p>
          </div>

          <div className="mt-7">
            <Line />
          </div>

          <div className="mt-7  flex justify-between gap-4 items-center">
            <div>
              <span className="text-red-600 text-3xl">
                <ion-icon name="today"></ion-icon>
              </span>
            </div>
            <div className="flex flex-col text-left">
              <p className="font-semibold text-left">
                Your reservation won’t be confirmed until the host accepts your
                request (within 24 hours).
              </p>
              <p>You won’t be charged until then.</p>
            </div>
          </div>

          <div className="mt-7">
            <Line />
          </div>

          <div className="text-xs text-left text-gray-600 mt-7">
            <p>
              By selecting the button below, I agree to the Host's House Rules,
              Ground rules for guests, Airbnb's Rebooking and Refund Policy and
              that Airbnb can charge my payment method if I’m responsible for
              damage. I agree to pay the total amount shown if the Host accepts
              my booking request.
            </p>
          </div>

          <div className="mt-7">
            <div className="w-[220px] px-3 py-3 border bg-red-600 rounded-lg text-white font-semibold text-[19px] bg-gradient-to-r  from-pink-600 to-rose-600 cursor-pointer ">
              <p>Request to book</p>
            </div>
          </div>

          <div className="mt-16"></div>
        </div>

        {/* ------------------------------------------------------------------------------------------ */}
        <div className="w-[40%]  h-[520px] sticky top-20 ">
          <FinalPriceCard />
        </div>
      </div>
    </div>
  );
};

export default Payment;
