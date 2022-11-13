import React from "react";
import one from "./../../assets/download.jpg" 
import achivtwo from "./../../assets/achivtwo.jpg" 
const Achievements = () => {
  return (
    <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        Achievments
      </h2>

      <div className="grid grid-sm-1 justify-center items-center lg:grid-cols-3   px-12 gap-10 mb-10">
        <div>
          <img src="https://i.ibb.co/QcMVHtK/9.png" className="p-2        hover:  transition duration-500 hover:scale-110" alt="" />
        </div>
        <div >
          <img src="https://i.ibb.co/Y09Zs0b/25.png" className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
          <img src= "https://i.ibb.co/fvwNBy0/slider1-6.png" className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
        </div>

        <div>
          <img src="https://i.ibb.co/6gS48SX/slider3.png" className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
          <img src={achivtwo} className="p-2 hover:  transition duration-500 hover:scale-110" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Achievements;
