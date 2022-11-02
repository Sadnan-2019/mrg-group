import React from 'react';
import avater from "../../assets/avater.png";

const Director = () => {
     return (
          <div>
      <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
      Board Of   Directors
      </h2>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 px-12 gap-10    py-[25px] items-center justify-items-center">
      <div
          className="card      bg-gradient-to-r from-[#303640] to-[#103264] hover:from-[#F39E4B] hover:to-[#4a473d]  w-7/12 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          data-aos="fade-right"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
          
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
          className="card      bg-gradient-to-r from-[#303640] to-[#103264] hover:from-[#F39E4B] hover:to-[#4a473d]  w-7/12 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          data-aos="fade-left"
        data-aos-offset="300"
        data-aos-delay="5000"
        data-aos-duration="3000"
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
            <h2 className=" text-center font-bold">DR. Zahiruddin Mahmud new </h2>
            <p>CEO</p>
          </div>
        </div>

        </div>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-12 gap-10    py-[25px] items-center justify-items-center">
         

        <div
          className="card      bg-gradient-to-r from-[#303640] to-[#103264] hover:from-[#F39E4B] hover:to-[#4a473d]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          
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
          className="card        bg-gradient-to-r from-[#303640] to-[#103264] hover:from-[#F39E4B] hover:to-[#4a473d]  w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          
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
            <h2 className=" text-center font-bold">DR. Zahiruddin Mahmud hover</h2>
            <p>CEO</p>
          </div>
        </div>
        <div
          className="card        bg-gradient-to-r from-[#303640] to-[#103264] hover:from-[#F39E4B] hover:to-[#4a473d] w-5/6 flex items-center justify-center	 gap-5      shadow-lg shadow-white-1000/50 border   p-10 "
          
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

export default Director;