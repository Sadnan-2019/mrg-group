import React from "react";
import avater from "../../assets/avater.png";

const Managment = () => {
  return (
    <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        Meet Our Management
      </h2>

      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-12 gap-10    py-[25px] items-center justify-items-center">
         

        <div
          className="card        bg-gradient-to-r from-[#303640] to-[#103264]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          data-aos="fade-up"
          data-aos-duration="1000"
          style={{ height: "300px" }}
        >
          <figure className="">
            <img
              src={avater}
              alt="Shoes"
              className="  p-4  "
              style={{ height: "150px", borderRadius: "25px" }}
            />
          </figure>
          <div className=" items-center text-center text-white ">
            <h2 className=" text-center font-bold">DR. Zahiruddin Mahmud </h2>
            <p>CEO</p>
          </div>
        </div>
        <div
          className="card        bg-gradient-to-r from-[#303640] to-[#103264]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          data-aos="fade-up"
          data-aos-duration="800"
          style={{ height: "300px" }}
        >
          <figure className="">
            <img
              src={avater}
              alt="Shoes"
              className="  p-4  "
              style={{ height: "150px", borderRadius: "25px" }}
            />
          </figure>
          <div className=" items-center text-center text-white ">
            <h2 className=" text-center font-bold">DR. Zahiruddin Mahmud </h2>
            <p>CEO</p>
          </div>
        </div>
        <div
          className="card        bg-gradient-to-r from-[#303640] to-[#103264]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          data-aos="fade-up"
          data-aos-duration="700"
          style={{ height: "300px" }}
        >
          <figure className="">
            <img
              src={avater}
              alt="Shoes"
              className="  p-4  "
              style={{ height: "150px", borderRadius: "25px" }}
            />
          </figure>
          <div className=" items-center text-center text-white ">
            <h2 className=" text-center font-bold">DR. Zahiruddin Mahmud </h2>
            <p>CEO</p>
          </div>
        </div>
        <div
          className="card        bg-gradient-to-r from-[#303640] to-[#103264]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          data-aos="fade-up"
          data-aos-duration="800"
          style={{ height: "300px" }}
        >
          <figure className="">
            <img
              src={avater}
              alt="Shoes"
              className="  p-4  "
              style={{ height: "150px", borderRadius: "25px" }}
            />
          </figure>
          <div className=" items-center text-center text-white ">
            <h2 className=" text-center font-bold">DR. Zahiruddin Mahmud </h2>
            <p>CEO</p>
          </div>
        </div>

         
        
         
      </div>
    </div>
  );
};

export default Managment;
