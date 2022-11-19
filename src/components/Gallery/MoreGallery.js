import React from "react";
import one from "./../../assets/download.jpg";
import achivtwo from "./../../assets/achivtwo.jpg";
const MoreGallery = () => {
  return (
    <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        Image Gallery
      </h2>

      <div className="grid grid-sm-1  lg:grid-cols-3   px-12 gap-10 mb-10">
        <div>
          <img
            src={one}
            className="p-2 transform      hover:  transition duration-500 hover:scale-110"
            alt=""
          />
        </div>
        <div>
          <img
            src="https://i.ibb.co/9ht9fXg/da6b9c62-0429-4cac-936d-6da6dbaa3709.jpg"
            className="p-2 hover:  transition duration-500 hover:scale-110"
            alt=""
          />
          <img
            src={achivtwo}
            className="p-2 hover:  transition duration-500 hover:scale-110"
            alt=""
          />
        </div>
    
 
        <div>
          <img
            src="https://i.ibb.co/x1pjqqs/a1f8e804-a4b5-4f52-b2c2-a2602a3be021.jpg"
            className="p-2 hover:  transition duration-500 hover:scale-110"
            alt=""
          />
          <img
            src="    https://i.ibb.co/PZ67DrF/36279b02-8662-4272-a103-5483aea5d9d8.jpg"
            className="p-2 hover:  transition duration-500 hover:scale-110"
            alt=""
          />
        </div>
        <div>
          <img
            src={achivtwo}
           className="p-2 rounded-lg hover:  transition duration-500 hover:scale-110"
            alt=""
          />
          <img
            src={achivtwo}
           
            className="p-2 rounded-lg hover:  transition duration-500 hover:scale-110"
            alt=""
          />
        </div>
        <div>
          <img
            src={one}
            className="p-2 transform      hover:  transition duration-500 hover:scale-110"
            alt=""
          />
        </div>
        <div>
          <img
            src={achivtwo}
            className="p-2 hover:  transition duration-500 hover:scale-110"
            alt=""
          />
          <img
            src={achivtwo}
            
            className="p-2 hover:  transition duration-500 hover:scale-110"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MoreGallery;
