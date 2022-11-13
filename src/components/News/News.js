import React from "react";
import { Link } from "react-router-dom";
const News = () => {
  return (
    <div>
      <div className="py-10">
        <div className=" ">
          <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
            News & Events
          </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10      py-8">
          <div
            className="card  border w-full h-full    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "500px" }}
          >
            <figure className="">
              <img
                src="https://i.ibb.co/QcMVHtK/9.png"
                alt="Shoes"
                className=" w-full  p-4  hover:  transition duration-500 hover:scale-110 "
                style={{  height:"250px",borderRadius: "25px" }}
              />
              {/* <img src="https://i.ibb.co/QcMVHtK/9.png" className="p-2        hover:  transition duration-500 hover:scale-110" alt="" /> */}
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </h2>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "500px" }}
          >
            <figure className="">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="  p-4  "
                style={{ height: "250px", borderRadius: "25px" }}
              />
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </h2>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "500px" }}
          >
            <figure className="">
              <img
                src="https://placeimg.com/400/225/arch"
                alt="Shoes"
                className="  p-4  "
                style={{ height: "250px", borderRadius: "25px" }}
              />
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </h2>
            </div>
          </div>
          
        </div>
        <div className="py-2 px-5   flex justify-center">
          <Link to="/news-media">
            <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
              More News
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default News;
