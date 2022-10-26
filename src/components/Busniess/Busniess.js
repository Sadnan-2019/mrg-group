import React from "react";
import hcah from "../../assets/HCAHBD.png"
import tmc from "../../assets/tmc.png"
import tcc from "../../assets/tcc.png"
import leap from "../../assets/leap.png"
import tulip from "../../assets/tulip.png"
import rose from "../../assets/rosegarden.png"

const Busniess = () => {
  return (
    <div>
      <div className=" md:py-20 py-10 lg:py-24 lg:mx-16 mx-8 grid grid-cols-1 md:grid-cols-1   lg:grid-cols-2  gap-5 items-center justify-items-center">
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <p
            className="lg:text-[43px] md:text-[30px] font-bold text-[26px] text-left poppins-b text-neutral "
            style={{ lineHeight: "120%"  }}
          >
            Business Sectors{" "}
          </p>
        

          <p className="max-w-lg  lg:text-[20px] md:text-[20px]  mt-5 text-neutral">
            MRG GROUP stands out of ventures engaged till date.
            The steadfast consistency, success and encouragement from the
            customers and stakeholders ignites confidence in our journey of
            sustainability and growth.
          </p>
          <div className=" mt-5">
              <button
                className="btn bg-neutral  "
                style={{   color: "white" }}
              >
                View More
              </button>
            </div>
        </div>
        <div className="max-w-xl text-left md:ml-8 lg:order-1 order-2 mt-10 lg:mt-0">
          <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-3 lg:grid-cols-3 gap-5 items-center justify-items-center   p-4  ">
             
            <div
              className=" card	  w-15	 border-solid	p-5"
              style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
            >
              <img
                src={hcah}
                alt="Shoes"
                className="rounded-xl w-15"
                
              />
              {/* <p className="poppins-t text-gray-600 text-center">
                HealthCare at Home
              </p> */}
            </div>
            <div
              className="  card	  w-15	 border-solid	p-5"
              style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
            >
              <img
                src={tmc}
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "white" }}
              />
              {/* <p className="poppins-t text-gray-600 text-center">
                HealthCare at Home
              </p> */}
            </div>
            <div
              className="  card	 w-15	 border-solid	p-5"
              style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
            >
              <img
                src={tcc}
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "white" }}
              />
              {/* <p className="poppins-t text-gray-600 text-center">
                HealthCare at Home
              </p> */}
            </div>
            <div
              className=" card	  w-15	 border-solid	p-5"
              style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
            >
              <img
                src={leap}
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "white" }}
              />
              {/* <p className="poppins-t text-gray-600 text-center">
                HealthCare at Home
              </p> */}
            </div>
            <div
              className="  card	 w-15	 border-solid	p-5"
              style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
            >
              <img
                src={tulip}
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "white" }}
              />
              {/* <p className="poppins-t text-gray-600 text-center">
                HealthCare at Home
              </p> */}
            </div>
            <div
              className=" card	 w-15	 border-solid	p-5"
              style={{ backgroundColor: " ", borderColor: "#F5F1EA" }}
            >
              <img
                src={rose}
                alt="Shoes"
                className="rounded-xl w-15"
                style={{ color: "white" }}
              />
              {/* <p className="poppins-t text-gray-600 text-center">
                HealthCare at Home
              </p> */}
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default Busniess;
