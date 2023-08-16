import React from "react";
import MainNav from "../components/MainNav";
import LoadingBar from "react-top-loading-bar";
import { useSelector } from "react-redux";
import WishNav from "../components2/WishNav";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { add } from "../Store/redirectSlice";

const Wishlistpage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const data = useSelector((state) => state.wishlist);
  const handleWishAdd = (wishitem) => {
    dispatch(add(wishitem));
    navigate("/reserve");
  };

  const item = data[data.length - 1];
  console.log("wishlist page");
  console.log(item);

  return (
    <div>
      <LoadingBar color="#f11946" progress={100} loaderSpeed={500} />
      <WishNav />

      <div className="w-full px-28 ">
        <div className=" mt-20 text-left">
          <p className="font-semibold text-3xl">WishLists</p>
        </div>

        <div className="mt-10 ">
          <div className="w-full h-full grid grid-cols-3">
            {data.map((wishItem) => (
              <div>
                <div
                  className="w-[400px] h-[300px]   "
                  onClick={() => handleWishAdd(wishItem)}
                >
                  <img
                    src={wishItem.img1}
                    alt=""
                    className="h-[270px] w-[400px] rounded-lg hover:brightness-75 cursor-pointer"
                  />
                  <div className="text-left mt-2">
                    <p className="text-gray-600 font-semibold ml-1 text-xl">
                      {wishItem.location}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wishlistpage;
