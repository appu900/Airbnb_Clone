import React from "react";
import MainNav from "../components/MainNav";
import IconSlider from "../components/IconSlider";
import Bigsearchbar from "../components/Bigsearchbar";
import placeData from "../Data/Place";
import Cards from "../components/Cards";
import Navbar from "../components/Navbar";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { add } from "../Store/redirectSlice";
import LoadingBar from 'react-top-loading-bar'


const Homepage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleTarget = (item) =>{
      dispatch(add(item));
      navigate('/reserve');
  }
  return (
    <div>
         <LoadingBar
        color='#f11946'
        progress={100}
        loaderSpeed={500}
        
      />
      {/* <MainNav /> */}
      <Navbar/>
      {/* main content */}
      <div className="px-20 h-auto relative">
      
          
        <div className="mt-5  flex justify-evenly">
          <Bigsearchbar />
        </div> 

        {/* places section */}
        <div className="grid grid-cols-4 mt-1 gap-4">
          {placeData.map((item) => (
            <div onClick={()=>handleTarget(item)}  >
              <Cards
                img={item.img1}
                location={item.location}
                rating={item.rating}
                desc={item.desc}
                price={item.price}
                key={item.id}
              />
            </div>
          ))}
        </div>

        <div className=" bottom-16 left-[46%] sticky z-10  flex items-center justify-center gap-2 h-[48px] rounded-full
        cursor-pointer hover:scale-105 active:scale-95 shadow-lg
        w-[140px] bg-[#20262E] text-white" onClick={()=>navigate('/map')}>
                 <p className="text-[14px] font-semibold">Show map</p>
                 <span className="mt-1"><ion-icon name="map"></ion-icon></span>
        </div>
      </div>
    </div>
  );
};

export default Homepage;









