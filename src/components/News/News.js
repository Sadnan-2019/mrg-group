import React from 'react';

const News = () => {
    return (
        <div>

    

      <div className="py-10"  >
        <div className=" ">
        <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold text-neutral py-8">
        News & Events
      </h2>
        </div>
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3  mx-10 gap-10      py-8">
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className="h-96 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white ">
              <h2 className=" text-center font-bold">Prof. Dr. Dhiman Banik</h2>
              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, D-Card, MD (Card.), Associate Fellow-American College of
                Cardiology
              </p>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className="h-96 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white ">
              <h2 className=" text-center font-bold">Prof. Dr. Dhiman Banik</h2>
              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, D-Card, MD (Card.), Associate Fellow-American College of
                Cardiology
              </p>
            </div>
          </div>
          <div
            className="card  border     "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000" style={{height:"400px"}}
          >
            <figure className="">
              <img src="https://placeimg.com/400/225/arch" alt="Shoes"   className="  p-4  " style={{height:"250px"  ,borderRadius:"25px"}} />
            </figure>
            <div className="h-96 items-center text-center bg-gradient-to-r from-[#303640] to-[#103264] text-white ">
              <h2 className=" text-center font-bold">Prof. Dr. Dhiman Banik</h2>
              <p>Professor & Senior Consultant Cardiologist</p>
              <p>
                MBBS, D-Card, MD (Card.), Associate Fellow-American College of
                Cardiology
              </p>
            </div>
          </div>
           
        
           
           
           
        
           
           
        
          
         
           
        </div>
        <div className="py-2 px-5   flex justify-center">
            <button className="btn     btn-xs sm:btn-sm md:btn-md mb-4 bg-gradient-to-r from-[#303640] to-[#103264]">
            More News
            </button>
          </div>
      </div>
        </div>
    );
};

export default News;