import React from "react";
import hcah from "../../assets/HCAHBD.png";
import tmc from "../../assets/tmc.png";
import tcc from "../../assets/tcc.png";
import tulip from "../../assets/tulip.png";
import mrs from "../../assets/mrs.png";
import land from "../../assets/land.png";
import leap from "../../assets/leap.png";
import agro from "../../assets/agro.png";
import rose from "../../assets/rose.png";
const CompaniesProfile = () => {
  return (
    <div>
      <div className="shadow-2xl bg-gradient-to-r from-[#103264]  to-[#303640] text-white p-4">
      
        <h2 className=" text-center  sm:text-4xl lg:text-[43px] md:text-[30px] font-bold   py-8" data-aos="fade-up"
          data-aos-duration="1000">
        Companies Profile
      </h2>

        <p className="  text-center font-bold sm:text-4xl  lg:text-[20px] md:text-[18px]   poppins-b  " data-aos="fade-up"
          data-aos-duration="1000">
          MR GROUP stands out of ventures engaged till date. The steadfast
          consistency, success and encouragement from the customers and
          stakeholders ignites confidence in our journey of sustainability and
          growth.
        </p>

        <div className="grid sm:grid-cols-1 mx-12 md:grid-cols-3 lg:grid-cols-3 gap-2 items-center justify-items-center py-10     ">
          <a href="https://www.hcah.mrg.com.bd/?fbclid=IwAR3e0yV_TpgKlr9LlKgUfLeiNrc8oPzr0z7vc1uprSPH17c-QM8mzKPFHJk" 
          target="_blank" 
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={hcah}
                alt="Shoes"
                className="  p-4 w-96  "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </a>
          <a href="https://www.facebook.com/tmcdiagnostichospitaltr" 
             target="_blank" 
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={tmc}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </a>

          <a href="https://www.facebook.com/TulipgardenTrishal"
          target="_blank" 
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={tulip}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </a>
          <a
          href="https://www.facebook.com/leap.physio"
          target="_blank" 
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={leap}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </a>
          <a href="https://www.facebook.com/mrsviews"
          target="_blank" 
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={mrs}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </a>
          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={land}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <a
          href="https://www.facebook.com/TCCTrishal"
          target="_blank" 
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={tcc}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </a>

          <div
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={agro}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </div>
          <a
          href="https://www.facebook.com/rosebeautytr"
          target="_blank" 
            className="card  border  shadow-xl bg-base-100   "
            data-aos="flip-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="2000"
            style={{ height: "200px" }}
            
          >
            <figure className="hover:  transition duration-500 hover:scale-110">
              <img
                src={rose}
                alt="Shoes"
                className="  p-4 w-96 "
                style={{ height: "200px", borderRadius: "25px" }}
              />
            </figure>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CompaniesProfile;
