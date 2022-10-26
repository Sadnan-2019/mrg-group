import React from "react";
import avater from "../../assets/avater.png";

const Managment = () => {
  return (
    <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        Meet Our Management
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-12 gap-10    py-[25px] items-center justify-items-center">
      <div
          className="  bg-gradient-to-r from-[#303640] to-[#7e8999]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10"
          style={{
            borderRadius: "25px",
            color: "white",
            height: "200px",
          }}
        >
          <div className=" ">
            <h2 className="text-2xl font-bold "> Name one</h2>
            <p className="text-[15px]">Managing Director</p>
            <div className="card-actions   mt-5">
              <button className="btn bg-neutral "  >
                Details
              </button>
            </div>
          </div>
          <div className=" text-white">
            {" "}
            <img src={avater} className="w-62 h-36 rounded-lg " alt="" />{" "}
          </div>
        </div>
      <div
          className="  bg-gradient-to-r from-[#303640] to-[#7e8999]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10"
          style={{
            borderRadius: "25px",
            color: "white",
            height: "200px",
          }}
        >
          <div className=" ">
            <h2 className="text-2xl font-bold "> Name one</h2>
            <p className="text-[15px]">Managing Director</p>
            <div className="card-actions   mt-5">
              <button className="btn bg-neutral "  >
                Details
              </button>
            </div>
          </div>
          <div className=" text-white">
            {" "}
            <img src={avater} className="w-62 h-36 rounded-lg " alt="" />{" "}
          </div>
        </div>
      <div
          className="  bg-gradient-to-r from-[#303640] to-[#7e8999]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10"
          style={{
            borderRadius: "25px",
            color: "white",
            height: "200px",
          }}
        >
          <div className=" ">
            <h2 className="text-2xl font-bold "> Name one</h2>
            <p className="text-[15px]">Managing Director</p>
            <div className="card-actions   mt-5">
              <button className="btn bg-neutral "  >
                Details
              </button>
            </div>
          </div>
          <div className=" text-white">
            {" "}
            <img src={avater} className="w-62 h-36 rounded-lg " alt="" />{" "}
          </div>
        </div>
      <div
          className="  bg-gradient-to-r from-[#303640] to-[#7e8999]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10"
          style={{
            borderRadius: "25px",
            color: "white",
            height: "200px",
          }}
        >
          <div className=" ">
            <h2 className="text-2xl font-bold "> Name one</h2>
            <p className="text-[15px]">Managing Director</p>
            <div className="card-actions   mt-5">
              <button className="btn bg-neutral "  >
                Details
              </button>
            </div>
          </div>
          <div className=" text-white">
            {" "}
            <img src={avater} className="w-62 h-36 rounded-lg " alt="" />{" "}
          </div>
        </div>
         
      </div>
    </div>
  );
};

export default Managment;
