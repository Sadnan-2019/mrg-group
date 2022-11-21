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
                For the people of mymenshing division we have opened up a branch of our physiotherapy center and the name is LEAP.That 
                stands for life enrichment  acitivity program.
              </h2>
            </div>
          </div>


          <div
            className="card  border w-full h-full    "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "500px" }}
          >
            <figure className="">
              <img
                src="https://i.ibb.co/5j6X7FN/rosenews.jpg"
                alt="Shoes"
                className=" w-full  p-4  hover:  transition duration-500 hover:scale-110 "
                style={{  height:"250px",borderRadius: "25px" }}
              />
              {/* <img src="https://i.ibb.co/QcMVHtK/9.png" className="p-2        hover:  transition duration-500 hover:scale-110" alt="" /> */}
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                 We present to you very friendly, presentable, experienced,beautisians at our Rose Garden Beauty Parlor.
                 Expense wise we our very affordable.Rose garden will be happy to have you as our patrons.
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
                src="https://i.ibb.co/nfm7qcR/tmcnews.jpg"
                alt="Shoes"
                className=" hover:  transition duration-500 hover:scale-110  p-4  "
                style={{ height: "250px", borderRadius: "25px" }}
              />
            </figure>
            <div className="h-4/5 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white p-4  ">
              <h2 className=" text-justify ">
                TMC is a unique place to be treated by qualified,experienced,specialized physicians.We have just completed our 
                5th year in a row .We did pretty well during the last five years.Here we are celebriting our anniversary.
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
